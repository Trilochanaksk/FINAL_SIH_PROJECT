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
                src="https://i.pinimg.com/736x/8e/96/1e/8e961ed75303f3da90a8c27fb4e88ec4.jpg"
                alt="Chatbot Icon"
                width={64}
                height={64}
                className="rounded-full"
              />
            </Button>
        </>
    )
}
