import { z } from 'zod';

const whoApiUrl = 'https://icd.who.int';

// In-memory cache for the auth token
let token: {
  access_token: string;
  expires_at: number;
} | null = null;

async function getWhoAuthToken() {
  const clientId = process.env.WHO_CLIENT_ID;
  const clientSecret = process.env.WHO_CLIENT_SECRET;

  if (!clientId || !clientSecret) {
    console.error("WHO_CLIENT_ID or WHO_CLIENT_SECRET is not set in environment variables.");
    return null;
  }

  // If we have a valid token, return it
  if (token && token.expires_at > Date.now()) {
    console.log('Using cached WHO token.');
    return token.access_token;
  }
  
  console.log('Fetching new WHO token.');
  const tokenUrl = 'https://icd.who.int/auth/connect/token';
  const body = `client_id=${clientId}&client_secret=${clientSecret}&grant_type=client_credentials&scope=icdapi_access`;

  try {
    const response = await fetch(tokenUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body,
      cache: 'no-store',
    });

    if (!response.ok) {
      const errorText = await response.text();
      console.error(`Failed to get WHO auth token: ${response.status} ${errorText}`);
      return null;
    }

    const tokenData = await response.json();
    token = {
      access_token: tokenData.access_token,
      // Set expiration to 10 seconds before actual expiration to be safe
      expires_at: Date.now() + (tokenData.expires_in - 10) * 1000, 
    };
    return token.access_token;
  } catch (error: any) {
    console.error('Error fetching WHO auth token:', error);
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
    console.error("Could not obtain WHO API access token. Aborting search.");
    return [];
  }

  const searchUrl = `${whoApiUrl}/icd/entity/search?q=${encodeURIComponent(query)}`;

  try {
    const response = await fetch(searchUrl, {
      method: 'GET',
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        'Accept': 'application/json',
        'API-Version': 'v2',
        'Accept-Language': 'en',
      },
      cache: 'no-store',
    });

    if (!response.ok) {
       const errorText = await response.text();
       console.error(`WHO API search failed: ${response.status} ${errorText}`);
       return [];
    }

    const data = await response.json();
    
    return data.destinationEntities.map((entity: any) => ({
        icd11Code: entity.theCode || 'N/A',
        description: entity.title.replace(/<[^>]*>/g, ''), // Strip HTML tags from title
    }));
    
  } catch (error: any) {
    console.error('An error occurred during WHO ICD-11 search:', error.message);
    return [];
  }
}
