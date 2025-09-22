import { z } from 'zod';

export const WhoIcd11Record = z.object({
  icd11Code: z.string(),
  description: z.string(),
});
export type WhoIcd11Record = z.infer<typeof WhoIcd11Record>;

let authToken: { token: string; expires: number } | null = null;

async function getWhoAuthToken(): Promise<string | null> {
    if (authToken && authToken.expires > Date.now()) {
        return authToken.token;
    }

    const clientId = process.env.WHO_CLIENT_ID;
    const clientSecret = process.env.WHO_CLIENT_SECRET;

    if (!clientId || !clientSecret) {
        console.error('WHO_CLIENT_ID or WHO_CLIENT_SECRET environment variables not set.');
        return null;
    }

    const tokenUrl = 'https://icd.who.int/connect/token';
    const body = `client_id=${clientId}&client_secret=${clientSecret}&grant_type=client_credentials&scope=icdapi_access`;

    try {
        const response = await fetch(tokenUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: body,
            cache: 'no-store',
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error(`Failed to get WHO auth token: ${response.status} ${response.statusText}`, errorText);
            return null;
        }

        const data = await response.json();
        authToken = {
            token: data.access_token,
            expires: Date.now() + (data.expires_in - 300) * 1000, // Refresh 5 minutes before expiry
        };
        return authToken.token;
    } catch (error) {
        console.error("Error fetching WHO auth token:", error);
        return null;
    }
}

export async function searchWhoIcd11(query: string): Promise<WhoIcd11Record[]> {
  try {
    const token = await getWhoAuthToken();

    if (!token) {
      console.log("Could not retrieve WHO auth token. Skipping WHO API search.");
      return [];
    }

    const searchUrl = `https://id.who.int/icd/entity/search?q=${encodeURIComponent(query)}`;

    const response = await fetch(searchUrl, {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/json',
        'Accept-Language': 'en',
        'API-Version': 'v2',
      },
      cache: 'no-store',
    });

    if (!response.ok) {
      console.error('Failed to fetch from WHO ICD-11 API', await response.text());
      return [];
    }

    const data = await response.json();

    if (!data.destinationEntities || !Array.isArray(data.destinationEntities)) {
        return [];
    }

    return data.destinationEntities.map((entity: any) => {
        // Strip HTML tags from the title
        const description = entity.title.replace(/<[^>]*>/g, '');
        return {
            icd11Code: entity.theCode || entity.id.split('/').pop(),
            description: description,
        }
    });
  } catch (error) {
    console.error("An error occurred during WHO ICD-11 search:", error);
    return [];
  }
}
