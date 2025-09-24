"use client";

import { useChatbotStore } from "@/hooks/use-chatbot-store";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Chatbot from "@/components/chatbot/chatbot";
import { Sparkles } from "lucide-react";


export default function GlobalChatbot() {
    const { openChatbot } = useChatbotStore();

    return (
        <>
            <Chatbot />
            <Button
                onClick={openChatbot}
                variant="default"
                size="icon"
                className={cn(
                    'fixed bottom-6 right-6 z-40 h-14 w-14 rounded-full shadow-strong transition-transform hover:scale-110',
                    'bg-sparkling-pink hover:bg-sparkling-pink/90'
                )}
                >
                <Sparkles className="h-7 w-7 text-primary-foreground" />
            </Button>
        </>
    )
}
