
import { z } from 'zod';
import mockData from '@/lib/mock-data.json';

// NOTE: This service is now using local mock data to avoid network issues.
// The live API call logic is commented out but preserved for reference.

/*
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
    console.error("WHO client ID or secret is not configured in environment variables. Switching to offline mode.");
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
      expires_at: Date.now() + (expires_in - 300) * 1000,
    };
    return token.access_token;
  } catch (error) {
    console.error("Error fetching WHO auth token:", error);
    return null;
  }
}
*/

export const WhoIcd11Record = z.object({
  icd11Code: z.string(),
  description: z.string(),
});
export type WhoIcd11Record = z.infer<typeof WhoIcd11Record>;

export async function searchWhoIcd11(query: string): Promise<WhoIcd11Record[]> {
  console.log(`Searching mock WHO data for: "${query}"`);

  // Simulate a network delay
  await new Promise(resolve => setTimeout(resolve, 250));

  const results = mockData.filter((item: any) => {
    const description = item.description || "";
    const icd11Code = item.icd11Code || "";
    const queryLower = query.toLowerCase();

    return description.toLowerCase().includes(queryLower) || icd11Code.toLowerCase().includes(queryLower);
  });
  
  const mappedResults = results.map((item: any) => ({
    icd11Code: item.icd11Code || 'N/A',
    description: item.description,
  })).filter(item => item.icd11Code !== 'N/A');

  // Remove duplicates
  const uniqueResults = Array.from(new Map(mappedResults.map(item => [item.icd11Code, item])).values());
  
  return uniqueResults;
}
