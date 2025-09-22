import { z } from 'zod';
import mockData from '@/lib/mock-data.json';

export const NamasteRecord = z.object({
  namasteCode: z.string(),
  description: z.string(),
  system: z.enum(['Ayurveda', 'Siddha', 'Unani']),
});
export type NamasteRecord = z.infer<typeof NamasteRecord>;

export async function searchNamaste(query: string, filter?: 'Ayurveda' | 'Siddha' | 'Unani'): Promise<NamasteRecord[]> {
  console.log(`Searching mock data for: "${query}" with filter: "${filter}"`);
  
  let results = mockData.filter(item => 
    item.description.toLowerCase().includes(query.toLowerCase())
  );

  if (filter) {
    results = results.filter(item => item.system === filter);
  }

  // Ensure the returned data matches the NamasteRecord schema
  return results.map(item => ({
    namasteCode: item.namasteCode,
    description: item.description,
    system: item.system as 'Ayurveda' | 'Siddha' | 'Unani',
  }));
}
