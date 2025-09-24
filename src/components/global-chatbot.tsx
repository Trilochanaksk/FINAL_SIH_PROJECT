"use client";

import { useChatbotStore } from "@/hooks/use-chatbot-store";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Chatbot from "@/components/chatbot/chatbot";

const CustomAIcon = ({ className }: { className?: string }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("h-7 w-7", className)}
    >
      <title>Chatbot Icon A</title>
      <path d="M17.5 17.5L12 5.5 6.5 17.5" />
      <path d="M14.5 13.5h-5" />
    </svg>
);


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
                    'bg-columbia-blue hover:bg-columbia-blue/90'
                )}
                >
                <CustomAIcon className="text-primary-foreground" />
            </Button>
        </>
    )
}
