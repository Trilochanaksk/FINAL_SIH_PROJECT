'use server';
/**
 * @fileOverview A simple chatbot flow that uses Gemini to generate responses.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

const ChatInputSchema = z.object({
  message: z.string().describe("The user's message."),
  history: z
    .array(
      z.object({
        role: z.enum(['user', 'model']),
        content: z.array(z.object({ text: z.string() })),
      })
    )
    .optional()
    .describe('The chat history.'),
});
type ChatInput = z.infer<typeof ChatInputSchema>;

const chatPrompt = ai.definePrompt({
  name: 'chatbotPrompt',
  input: { schema: ChatInputSchema },
  output: { schema: z.string() }, // Expecting a simple string response
  prompt: `You are a helpful AI assistant named AyuLink Assistant. 
    Your role is to assist users of the AyuLink platform, which integrates traditional Indian medicine (Ayurveda, Siddha, Unani) with modern ICD-11 coding.

    - Be friendly, professional, and concise.
    - If you don't know an answer, say so.
    - Your knowledge is based on the application's context.
    - If asked about something you cannot do, politely explain your limitations.
    
    Start the conversation by introducing yourself and asking how you can help.
    
    {{#if history}}
    Chat History:
    {{#each history}}
    {{role}}: {{#each content}}{{text}}{{/each}}
    {{/each}}
    {{/if}}
    
    User Question: {{{message}}}
    
    Your Answer:`,
});

const chatFlow = ai.defineFlow(
  {
    name: 'chatbotFlow',
    inputSchema: ChatInputSchema,
    outputSchema: z.string(),
  },
  async (input) => {
    const { output } = await chatPrompt(input);
    // Ensure that we always return a string, even if the model returns null/undefined.
    // This is a robust check to prevent schema validation errors on the client.
    if (output === null || output === undefined) {
        return "Sorry, I am having trouble responding right now. Please try again later.";
    }
    return output;
  }
);

export async function chat(input: ChatInput) {
  const response = await chatFlow(input);
  return { response };
}
