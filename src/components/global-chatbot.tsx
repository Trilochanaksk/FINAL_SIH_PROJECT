"use client";

import { useChatbotStore } from "@/hooks/use-chatbot-store";
import { cn } from "@/lib/utils";
import Chatbot from "@/components/chatbot/chatbot";
import { Button } from "@/components/ui/button";
import Image from 'next/image';

export default function GlobalChatbot() {
    const { openChatbot } = useChatbotStore();

    return (
        <>
            <Chatbot />
            <Button
                onClick={openChatbot}
                className={cn(
                    'fixed bottom-6 right-6 z-40 h-16 w-16 rounded-full p-2 transition-transform hover:scale-110 bg-transparent'
                )}
            >
              <Image
                src="https://cdn.prod.website-files.com/6613fb094bf4b69c86a1dfd9/6613fb094bf4b69c86a1e053_gemini-icon.svg"
                alt="Chatbot Icon"
                width={64}
                height={64}
                className="rounded-full"
              />
            </Button>
        </>
    )
}
