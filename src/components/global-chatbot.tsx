
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
                    'fixed bottom-6 right-6 z-40 h-20 w-20 rounded-full p-2 transition-transform hover:scale-110 bg-transparent'
                )}
            >
              <Image
                src="https://i.pinimg.com/736x/c0/de/c5/c0dec5962db905e0a4adde50daf4a6e6.jpg"
                alt="Chatbot Icon"
                width={80}
                height={80}
                className="rounded-full"
              />
            </Button>
        </>
    )
}
