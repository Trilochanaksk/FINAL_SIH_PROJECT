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
  prompt: `You are a medical diagnosis search assistant. Provide dual-code suggestions from both NAMASTE (National AYUSH Morbidity & Standardized Terminologies Electronic) and ICD-11 TM2 (Traditional Medicine Module 2), filtered by the user specified filter.

  The query is: {{{query}}}
  The filter is: {{{filter}}}

  Return the results in the following JSON format:
  {
    "results": [
      {
        "namasteCode": "<NAMASTE code>",
        "icd11Code": "<ICD-11 code>",
        "description": "<description of the diagnosis>"
      }
    ]
  }`,
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
