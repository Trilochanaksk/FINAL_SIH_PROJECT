'use server';
/**
 * @fileOverview A simple chatbot flow that uses Gemini to generate responses.
 */

import { ai } from '@/ai/genkit';
import { z } from 'genkit';

export const ChatInputSchema = z.object({
  message: z.string().describe('The user\'s message.'),
  history: z.array(z.object({
    role: z.enum(['user', 'model']),
    content: z.array(z.object({ text: z.string() })),
  })).optional().describe('The chat history.'),
});
export type ChatInput = z.infer<typeof ChatInputSchema>;


export const ChatOutputSchema = z.object({
  response: z.string().describe('The chatbot\'s response.'),
});
export type ChatOutput = z.infer<typeof ChatOutputSchema>;


const chatPrompt = ai.definePrompt(
  {
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
  }
);

const chatFlow = ai.defineFlow(
  {
    name: 'chatbotFlow',
    inputSchema: ChatInputSchema,
    outputSchema: z.string(),
  },
  async (input) => {
    const { output } = await chatPrompt(input);
    return output!;
  }
);

export async function chat(input: ChatInput): Promise<ChatOutput> {
  const response = await chatFlow(input);
  return { response };
}
