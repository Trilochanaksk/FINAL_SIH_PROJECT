import { z } from 'zod';

let token: {
  access_token: string;
  expires_at: number;
} | null = null;

async function getWhoAuthToken() {
  if (token && token.expires_at > Date.now()) {
    return token.access_token;
  }

  const whoClientId = process.env.WHO_CLIENT_ID;
  const whoClientSecret = process.env.WHO_CLIENT_SECRET;

  if (!whoClientId || !whoClientSecret) {
    console.error("WHO client ID or secret is not configured in environment variables.");
    // Fallback to offline mode
    return null;
  }

  const tokenUrl = 'https://icdaccessmanagement.who.int/connect/token';
  const body = `client_id=${whoClientId}&client_secret=${whoClientSecret}&grant_type=client_credentials&scope=icdapi_access`;

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
      console.error(`Failed to get WHO auth token: ${response.status} ${errorText}`);
      return null;
    }

    const data = await response.json();
    const expires_in = data.expires_in || 3600;
    token = {
      access_token: data.access_token,
      expires_at: Date.now() + (expires_in - 300) * 1000, // Refresh 5 mins before expiry
    };
    return token.access_token;
  } catch (error) {
    console.error("Error fetching WHO auth token:", error);
    return null;
  }
}

export const WhoIcd11Record = z.object({
  icd11Code: z.string(),
  description: z.string(),
});
export type WhoIcd11Record = z.infer<typeof WhoIcd11Record>;

export async function searchWhoIcd11(query: string): Promise<WhoIcd11Record[]> {
   const accessToken = await getWhoAuthToken();
  if (!accessToken) {
    console.log("Could not get WHO token. Returning empty results.");
    return [];
  }

  const searchUrl = `https://id.who.int/icd/entity/search?q=${encodeURIComponent(query)}`;

  try {
    const response = await fetch(searchUrl, {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Accept-Language': 'en',
        'API-Version': 'v2',
        'Accept': 'application/json',
      },
      cache: 'no-store',
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`Failed to fetch from WHO API: ${response.status} ${errorText}`);
      return [];
    }

    const data = await response.json();

    if (data.destinationEntities && data.destinationEntities.length > 0) {
      return data.destinationEntities.map((entity: any) => ({
        // The code is often in the ID URI, need to parse it
        icd11Code: entity.id.split('/').pop() || 'N/A',
        description: entity.title.replace(/<[^>]*>/g, ''), // Strip HTML tags from title
      }));
    }

    return [];
  } catch (err: any) {
    console.error("WHO API fetch failed:", err);
    return [];
  }
}
