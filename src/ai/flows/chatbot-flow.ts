'use server';
/**
 * @fileOverview A simple chatbot flow.
 *
 * - chat - A function that handles the chatbot conversation.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

// Define schemas internally, do not export them.
const ChatInputSchema = z.object({ 
  history: z.array(z.object({role: z.enum(["user", "model"]), content: z.string()})), 
  question: z.string() 
});
type ChatInput = z.infer<typeof ChatInputSchema>;

const ChatOutputSchema = z.string();
type ChatOutput = z.infer<typeof ChatOutputSchema>;

const chatPrompt = ai.definePrompt({
    name: 'chatbotPrompt',
    input: { schema: ChatInputSchema },
    output: { schema: ChatOutputSchema },
    prompt: `You are a helpful assistant for AyuLink, a healthcare platform integrating traditional (NAMASTE) and modern (ICD-11) medical coding systems. Your primary user is a doctor. Keep your responses concise and helpful.

    Here is the conversation history:
    {{#each history}}
        {{#if (eq role "user")}}User: {{content}}{{/if}}
        {{#if (eq role "model")}}AI: {{content}}{{/if}}
    {{/each}}
    
    Now, answer this question:
    User: {{{question}}}
    AI:`,
});

const chatFlow = ai.defineFlow(
    {
        name: 'chatbotFlow',
        inputSchema: ChatInputSchema,
        outputSchema: ChatOutputSchema,
    },
    async (input) => {
        const {output} = await chatPrompt(input);
        return output!;
    }
);

export async function chat(input: ChatInput): Promise<ChatOutput> {
    return chatFlow(input);
}
