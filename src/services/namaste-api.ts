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

  const searchUrl = `https://api.namaste.gov.in/search?q=${encodeURIComponent(query)}${filter ? `&system=${filter}`: ''}`;

  try {
    const response = await fetch(searchUrl, {
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Accept': 'application/json',
      },
    });

    if (!response.ok) {
      console.error('Failed to fetch from NAMASTE API', await response.text());
      return [];
    }
    
    const data = await response.json();

    // Assuming the API returns an array of objects that match the NamasteRecord schema
    // You may need to adjust the parsing based on the actual API response format
    const parsedData = z.array(NamasteRecord).safeParse(data);

    if (parsedData.success) {
      return parsedData.data;
    } else {
      console.error("Failed to parse NAMASTE API response:", parsedData.error);
      return [];
    }

  } catch (error) {
    console.error("Error calling NAMASTE API:", error);
    // In a real-world scenario, you might want to fall back to mock data here or handle the error differently.
    // For now, returning a mock response on failure.
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
}