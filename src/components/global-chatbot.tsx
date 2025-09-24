
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
                variant="ghost"
                size="icon"
                onClick={openChatbot}
                className={cn(
                    'fixed bottom-6 right-6 z-40 h-16 w-16 rounded-full p-0 shadow-strong transition-transform hover:scale-110'
                )}
            >
              <Image
                src="https://i.pinimg.com/736x/ad/0e/53/ad0e537aefc65e02de2b2656339a4062.jpg"
                alt="Chatbot Icon"
                width={64}
                height={64}
                className="rounded-full"
              />
            </Button>
        </>
    )
}
