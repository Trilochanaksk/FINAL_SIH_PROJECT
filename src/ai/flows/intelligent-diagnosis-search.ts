// This file is machine-generated - edit at your own risk!

'use server';

/**
 * @fileOverview An intelligent diagnosis search flow that provides dual-code suggestions from both NAMASTE and ICD-11 TM2.
 *
 * - intelligentDiagnosisSearch - A function that handles the diagnosis search process.
 * - IntelligentDiagnosisSearchInput - The input type for the intelligentDiagnosisSearch function.
 * - IntelligentDiagnosisSearchOutput - The return type for the intelligentDiagnosisSearch function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';
import { searchNamaste, NamasteRecord } from '@/services/namaste-api';
import { searchWhoIcd11, WhoIcd11Record } from '@/services/who-api';

const namasteSearchTool = ai.defineTool(
  {
    name: 'namasteSearchTool',
    description: 'Search for NAMASTE codes. Use this to find traditional medicine terms.',
    inputSchema: z.object({
      query: z.string().describe('The search query for NAMASTE codes.'),
      filter: z.enum(['Ayurveda', 'Siddha', 'Unani']).optional().describe('The filter to apply.'),
    }),
    outputSchema: z.array(NamasteRecord),
  },
  async (input) => {
    return await searchNamaste(input.query, input.filter);
  }
);

const whoIcd11SearchTool = ai.defineTool(
  {
    name: 'whoIcd11SearchTool',
    description: 'Search for WHO ICD-11 codes. Use this to find modern medical codes.',
    inputSchema: z.object({
      query: z.string().describe('The search query for WHO ICD-11 codes.'),
    }),
    outputSchema: z.array(WhoIcd11Record),
  },
  async (input) => {
    return await searchWhoIcd11(input.query);
  }
);

const IntelligentDiagnosisSearchInputSchema = z.object({
  query: z.string().describe('The diagnosis search query.'),
  filter: z
    .enum(['Ayurveda', 'Siddha', 'Unani'])
    .optional()
    .describe('The filter to apply to the search results.'),
});
export type IntelligentDiagnosisSearchInput = z.infer<typeof IntelligentDiagnosisSearchInputSchema>;

const IntelligentDiagnosisSearchOutputSchema = z.object({
  results: z.array(
    z.object({
      namasteCode: z.string().describe('The NAMASTE code.'),
      icd11Code: z.string().describe('The ICD-11 code.'),
      description: z.string().describe('The description of the diagnosis.'),
    })
  ).describe('The search results.'),
});
export type IntelligentDiagnosisSearchOutput = z.infer<typeof IntelligentDiagnosisSearchOutputSchema>;

export async function intelligentDiagnosisSearch(input: IntelligentDiagnosisSearchInput): Promise<IntelligentDiagnosisSearchOutput> {
  return intelligentDiagnosisSearchFlow(input);
}

const prompt = ai.definePrompt({
  name: 'intelligentDiagnosisSearchPrompt',
  input: {schema: IntelligentDiagnosisSearchInputSchema},
  output: {schema: IntelligentDiagnosisSearchOutputSchema},
  tools: [namasteSearchTool, whoIcd11SearchTool],
  prompt: `You are a medical diagnosis search assistant. Your task is to provide dual-code suggestions from both NAMASTE and ICD-11 TM2 based on local data.

  1. Use the 'namasteSearchTool' to find all matching traditional medicine diagnoses based on the user's query and optional filter.
  2. For each NAMASTE result found, use the 'whoIcd11SearchTool' with the NAMASTE description to find the corresponding ICD-11 code.
  3. Correlate the results. For each NAMASTE diagnosis, find the best matching ICD-11 diagnosis from the local data.
  4. Create a result object with the NAMASTE code, the corresponding ICD-11 code, and the NAMASTE description.
  5. If no ICD-11 match is found for a NAMASTE result in the local data, use 'N/A' for the icd11Code.
  6. Return a list of these correlated results.

  User Query: {{{query}}}
  Filter: {{{filter}}}
`,
});

const intelligentDiagnosisSearchFlow = ai.defineFlow(
  {
    name: 'intelligentDiagnosisSearchFlow',
    inputSchema: IntelligentDiagnosisSearchInputSchema,
    outputSchema: IntelligentDiagnosisSearchOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
