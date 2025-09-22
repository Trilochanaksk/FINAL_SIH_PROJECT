import { z } from 'zod';
import mockData from '@/lib/mock-data.json';

// In-memory cache for the auth token - no longer used but kept for structure
let token: {
  access_token: string;
  expires_at: number;
} | null = null;

async function getWhoAuthToken() {
  // This function is now a placeholder and will not be called in offline mode.
  console.log("Offline mode: Skipping WHO auth token fetch.");
  return "fake-offline-token";
}

export const WhoIcd11Record = z.object({
  icd11Code: z.string(),
  description: z.string(),
});
export type WhoIcd11Record = z.infer<typeof WhoIcd11Record>;

export async function searchWhoIcd11(query: string): Promise<WhoIcd11Record[]> {
  console.log(`Searching mock data for WHO ICD-11 code for: "${query}"`);

  // Search the mock data for a matching description to find an ICD-11 code.
  const results = mockData.filter((item: any) => {
    const description = item.description || item.Long_definition || item.Short_definition || item.NUMC_TERM || "";
    return description.toLowerCase().includes(query.toLowerCase());
  });

  if (results.length > 0 && results[0].icd11Code) {
    return [{
      icd11Code: results[0].icd11Code,
      // Use the same description that was queried.
      description: query,
    }];
  }

  // Fallback if no match is found in mock data
  return [];
}
