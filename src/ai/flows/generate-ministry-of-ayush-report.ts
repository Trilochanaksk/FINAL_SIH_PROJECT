'use server';
/**
 * @fileOverview Generates reports for the Ministry of Ayush.
 *
 * - generateMinistryOfAyushReport - A function that handles the report generation process.
 * - GenerateMinistryOfAyushReportInput - The input type for the generateMinistryOfAyushReport function.
 * - GenerateMinistryOfAyushReportOutput - The return type for the generateMinistryOfAyushReport function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateMinistryOfAyushReportInputSchema = z.object({
  startDate: z.string().describe('The start date for the report (YYYY-MM-DD).'),
  endDate: z.string().describe('The end date for the report (YYYY-MM-DD).'),
});
export type GenerateMinistryOfAyushReportInput = z.infer<typeof GenerateMinistryOfAyushReportInputSchema>;

const GenerateMinistryOfAyushReportOutputSchema = z.object({
  report: z.string().describe('The generated report in markdown format.'),
});
export type GenerateMinistryOfAyushReportOutput = z.infer<typeof GenerateMinistryOfAyushReportOutputSchema>;

export async function generateMinistryOfAyushReport(input: GenerateMinistryOfAyushReportInput): Promise<GenerateMinistryOfAyushReportOutput> {
  return generateMinistryOfAyushReportFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateMinistryOfAyushReportPrompt',
  input: {schema: GenerateMinistryOfAyushReportInputSchema},
  output: {schema: GenerateMinistryOfAyushReportOutputSchema},
  prompt: `You are an expert in generating reports for the Ministry of Ayush.

You will generate a report summarizing the usage of NAMASTE and ICD-11 codes within the specified date range.

The report should include:
- Total number of diagnoses recorded.
- Breakdown of diagnoses by NAMASTE code (top 10).
- Breakdown of diagnoses by ICD-11 code (top 10).
- Trends in diagnosis patterns over time.
- Any other relevant information for the Ministry of Ayush.

Start Date: {{{startDate}}}
End Date: {{{endDate}}}

Please format the report in markdown.
`,
});

const generateMinistryOfAyushReportFlow = ai.defineFlow(
  {
    name: 'generateMinistryOfAyushReportFlow',
    inputSchema: GenerateMinistryOfAyushReportInputSchema,
    outputSchema: GenerateMinistryOfAyushReportOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
