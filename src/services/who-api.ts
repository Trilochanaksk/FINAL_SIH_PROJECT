import { z } from 'zod';
import mockData from '@/lib/mock-data.json';

export const WhoIcd11Record = z.object({
  icd11Code: z.string(),
  description: z.string(),
});
export type WhoIcd11Record = z.infer<typeof WhoIcd11Record>;


export async function searchWhoIcd11(query: string): Promise<WhoIcd11Record[]> {
  console.log(`Searching mock data for WHO codes with query: "${query}"`);
  
  const results = mockData.filter(item => 
    item.description.toLowerCase().includes(query.toLowerCase())
  );

  // Map the mock data to the WhoIcd11Record schema
  return results.map(item => ({
    icd11Code: item.icd11Code,
    description: item.description,
  }));
}
