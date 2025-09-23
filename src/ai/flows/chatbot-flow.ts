'use server';
/**
 * @fileOverview A simple chatbot flow.
 *
 * - chat - A function that handles the chatbot conversation.
 * - ChatInput - The input type for the chat function.
 * - ChatOutput - The return type for the chat function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ChatInputSchema = z.string();
export type ChatInput = z.infer<typeof ChatInputSchema>;

const ChatOutputSchema = z.string();
export type ChatOutput = z.infer<typeof ChatOutputSchema>;

const chatPrompt = ai.definePrompt({
    name: 'chatbotPrompt',
    input: { schema: z.object({ history: z.array(z.object({role: z.enum(["user", "model"]), content: z.string()})), question: z.string() }) },
    output: { schema: ChatOutputSchema },
    prompt: `You are a helpful assistant for AyuLink, a healthcare platform integrating traditional (NAMASTE) and modern (ICD-11) medical coding systems.

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
        inputSchema: z.object({ history: z.array(z.object({role: z.enum(["user", "model"]), content: z.string()})), question: z.string() }),
        outputSchema: ChatOutputSchema,
    },
    async (input) => {
        const {output} = await chatPrompt(input);
        return output!;
    }
);

export async function chat(input: z.infer<typeof chatFlow.inputSchema>): Promise<ChatOutput> {
    return chatFlow(input);
}
