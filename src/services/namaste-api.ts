import { z } from 'zod';

export const NamasteRecord = z.object({
  namasteCode: z.string(),
  description: z.string(),
  system: z.enum(['Ayurveda', 'Siddha', 'Unani']),
});
export type NamasteRecord = z.infer<typeof NamasteRecord>;

export async function searchNamaste(query: string, filter?: 'Ayurveda' | 'Siddha' | 'Unani'): Promise<NamasteRecord[]> {
  const apiKey = process.env.NAMASTE_API_KEY;
  
  // Always try to fetch from the live API first.
  if (apiKey) {
    const searchUrl = `https://api.namaste.gov.in/search?q=${encodeURIComponent(query)}${filter ? `&system=${filter}`: ''}`;

    try {
      const response = await fetch(searchUrl, {
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Accept': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
        const parsedData = z.array(NamasteRecord).safeParse(data);

        if (parsedData.success) {
          return parsedData.data;
        } else {
          console.error("Failed to parse NAMASTE API response:", parsedData.error);
        }
      } else {
        console.error('Failed to fetch from NAMASTE API', await response.text());
      }
    } catch (error) {
      console.error("Error calling NAMASTE API:", error);
      // Fall through to mock data if the API call fails
    }
  }

  // Fallback to mock data if API key is missing or API call fails.
  console.log("Falling back to mock data for NAMASTE search.");
  const mockData: NamasteRecord[] = [
    { namasteCode: 'NAM-AY-123', description: 'Amavata (Rheumatoid Arthritis)', system: 'Ayurveda' },
    { namasteCode: 'NAM-SI-456', description: 'Vali Azhal Keel Vayu', system: 'Siddha' },
    { namasteCode: 'NAM-UN-789', description: 'Waja-ul-Mafasil (Polyarthritis)', system: 'Unani' },
    { namasteCode: 'NAM-AY-101', description: 'Gridhrasi (Sciatica)', system: 'Ayurveda' },
    { namasteCode: 'NAM-UN-112', description: 'Nazla (Common Cold)', system: 'Unani' },
  ];
  
  let results = mockData.filter(item => item.description.toLowerCase().includes(query.toLowerCase()));
  if (filter) {
    results = results.filter(item => item.system === filter);
  }
  return results;
}
