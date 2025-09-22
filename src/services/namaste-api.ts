import { z } from 'zod';
import { GET } from '@/app/api/namaste/route';

export const NamasteRecord = z.object({
  namasteCode: z.string(),
  description: z.string(),
  system: z.enum(['Ayurveda', 'Siddha', 'Unani']),
});
export type NamasteRecord = z.infer<typeof NamasteRecord>;

// A mock Request object to satisfy the API handler's signature.
function createMockRequest(query: string, filter?: string): Request {
    const url = new URL('http://localhost/api/namaste');
    url.searchParams.set('q', query);
    if (filter) {
        url.searchParams.set('system', filter);
    }
    return new Request(url);
}

export async function searchNamaste(query: string, filter?: 'Ayurveda' | 'Siddha' | 'Unani'): Promise<NamasteRecord[]> {
  try {
    // Directly invoke the route handler instead of a network fetch.
    const mockRequest = createMockRequest(query, filter);
    const response = await GET(mockRequest);

    if (response.ok) {
      const data = await response.json();
      const parsedData = z.array(NamasteRecord).safeParse(data);
      if (parsedData.success) {
        return parsedData.data;
      } else {
        console.error("Failed to parse NAMASTE API response:", parsedData.error);
      }
    } else {
      console.error('Failed to get data from NAMASTE service. Status:', response.status);
    }
  } catch (error) {
    console.error("An error occurred in the NAMASTE service.", error);
  }

  // Fallback to mock data if the API call fails.
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
