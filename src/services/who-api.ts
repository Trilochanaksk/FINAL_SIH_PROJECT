import { z } from 'zod';
import mockData from '@/lib/mock-data.json';

export const WhoIcd11Record = z.object({
  icd11Code: z.string(),
  description: z.string(),
});
export type WhoIcd11Record = z.infer<typeof WhoIcd11Record>;

export async function searchWhoIcd11(query: string): Promise<WhoIcd11Record[]> {
  console.log(`Searching mock data for WHO ICD-11: "${query}"`);
  try {
    const results = mockData.filter((item: any) => {
      const description = item.description || item.Long_definition || item.Short_definition || item.NUMC_TERM || "";
      const icd11Code = item.icd11Code || "";
      const queryLower = query.toLowerCase();

      // Search if the query matches the description or ICD-11 code
      return (
        description.toLowerCase().includes(queryLower) ||
        icd11Code.toLowerCase().includes(queryLower)
      );
    });

    const mappedResults = results
      .filter(item => item.icd11Code) // Only include items that have an icd11Code
      .map((item: any) => ({
        icd11Code: item.icd11Code,
        description: item.description || item.Long_definition || item.Short_definition || item.NUMC_TERM,
      }));
    
    // Deduplicate results based on icd11Code
    const uniqueResults = Array.from(new Map(mappedResults.map(item => [item.icd11Code, item])).values());

    return uniqueResults;
  } catch (error) {
    console.error("An error occurred during local WHO ICD-11 search:", error);
    return [];
  }
}
