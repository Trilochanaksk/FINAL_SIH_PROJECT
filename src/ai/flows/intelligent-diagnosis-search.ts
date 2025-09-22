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
    description: 'Search for NAMASTE codes.',
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
    description: 'Search for WHO ICD-11 codes.',
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
  prompt: `You are a medical diagnosis search assistant. Provide dual-code suggestions from both NAMASTE (National AYUSH Morbidity & Standardized Terminologies Electronic) and ICD-11 TM2 (Traditional Medicine Module 2), filtered by the user specified filter.

  Use the provided tools to search for relevant codes based on the user's query. Then, correlate the results to provide the best matching pairs of NAMASTE and ICD-11 codes.

  The query is: {{{query}}}
  The filter is: {{{filter}}}
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
