import { z } from 'zod';
import mockData from '@/lib/mock-data.json';

export const NamasteRecord = z.object({
  namasteCode: z.string().optional(),
  description: z.string(),
  system: z.enum(['Ayurveda', 'Siddha', 'Unani', 'Unspecified']).optional(),
  NUMC_CODE: z.string().optional(),
  NUMC_TERM: z.string().optional(),
  Short_definition: z.string().optional(),
});
export type NamasteRecord = z.infer<typeof NamasteRecord>;

export async function searchNamaste(query: string, filter?: 'Ayurveda' | 'Siddha' | 'Unani'): Promise<NamasteRecord[]> {
  console.log(`Searching mock data for: "${query}" with filter: "${filter}"`);
  
  const results = mockData.filter((item: any) => {
    const description = item.description || item.Long_definition || item.Short_definition || item.NUMC_TERM || "";
    return description.toLowerCase().includes(query.toLowerCase());
  });

  const mappedResults = results.map((item: any) => ({
    namasteCode: item.namasteCode || item.NUMC_CODE,
    description: item.description || item.Long_definition || item.Short_definition || item.NUMC_TERM,
    system: item.system || 'Unspecified',
  }));

  if (filter) {
    return mappedResults.filter(item => item.system === filter);
  }

  return mappedResults;
}