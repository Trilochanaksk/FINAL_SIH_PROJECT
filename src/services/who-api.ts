import { z } from 'zod';

export const WhoIcd11Record = z.object({
  icd11Code: z.string(),
  description: z.string(),
});
export type WhoIcd11Record = z.infer<typeof WhoIcd11Record>;

async function getWhoAuthToken(): Promise<string> {
    const clientId = process.env.WHO_CLIENT_ID;
    const clientSecret = process.env.WHO_CLIENT_SECRET;

    if (!clientId || !clientSecret) {
        throw new Error('WHO_CLIENT_ID or WHO_CLIENT_SECRET environment variables not set.');
    }

    const tokenUrl = 'https://icd.who.int/connect/token';
    const body = `client_id=${clientId}&client_secret=${clientSecret}&grant_type=client_credentials&scope=icdapi_access`;

    const response = await fetch(tokenUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: body,
    });

    if (!response.ok) {
        throw new Error(`Failed to get WHO auth token: ${response.statusText}`);
    }

    const data = await response.json();
    return data.access_token;
}

export async function searchWhoIcd11(query: string): Promise<WhoIcd11Record[]> {
  const token = await getWhoAuthToken();
  const searchUrl = `https://id.who.int/icd/entity/search?q=${encodeURIComponent(query)}`;

  const response = await fetch(searchUrl, {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Accept': 'application/json',
      'Accept-Language': 'en',
      'API-Version': 'v2',
    },
  });

  if (!response.ok) {
    console.error('Failed to fetch from WHO ICD-11 API', await response.text());
    return [];
  }

  const data = await response.json();

  return data.destinationEntities.map((entity: any) => ({
    icd11Code: entity.id.split('/').pop(),
    description: entity.title,
  }));
}
