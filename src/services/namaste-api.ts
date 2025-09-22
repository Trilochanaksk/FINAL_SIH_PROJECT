import { z } from 'zod';

export const NamasteRecord = z.object({
  namasteCode: z.string(),
  description: z.string(),
  system: z.enum(['Ayurveda', 'Siddha', 'Unani']),
});
export type NamasteRecord = z.infer<typeof NamasteRecord>;

export async function searchNamaste(query: string, filter?: 'Ayurveda' | 'Siddha' | 'Unani'): Promise<NamasteRecord[]> {
  const apiKey = process.env.NAMASTE_API_KEY;
  if (!apiKey) {
    throw new Error('NAMASTE_API_KEY environment variable not set.');
  }

  // This is a placeholder for the actual NAMASTE API call.
  // You will need to replace this with the real API endpoint and logic.
  console.log(`Searching NAMASTE with query: ${query}, filter: ${filter}`);
  
  // Mock response
  const mockData: NamasteRecord[] = [
    { namasteCode: 'NAM-AY-123', description: 'Amavata (Rheumatoid Arthritis)', system: 'Ayurveda' },
    { namasteCode: 'NAM-SI-456', description: 'Vali Azhal Keel Vayu', system: 'Siddha' },
    { namasteCode: 'NAM-UN-789', description: 'Waja-ul-Mafasil (Polyarthritis)', system: 'Unani' },
  ];

  let results = mockData.filter(item => item.description.toLowerCase().includes(query.toLowerCase()));
  if (filter) {
    results = results.filter(item => item.system === filter);
  }

  return results;
}
