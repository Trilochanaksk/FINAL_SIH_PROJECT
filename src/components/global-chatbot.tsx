
"use client";

import { useChatbotStore } from "@/hooks/use-chatbot-store";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import Chatbot from "@/components/chatbot/chatbot";

const CustomAIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    className={cn("h-14 w-14", className)}
  >
    <defs>
      <linearGradient id="icon-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: '#00D4FF', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: '#00FF87', stopOpacity: 1 }} />
      </linearGradient>
    </defs>
    <rect width="100" height="100" rx="22" ry="22" fill="black" />
    <path
      d="M50 15 C 85 85, 15 85, 50 15 Z"
      fill="url(#icon-gradient)"
      transform="matrix(0.9, 0, 0, 1, 5, -5)"
    />
    <path
      d="M50 42.5 L55.5 50 L50 57.5 L44.5 50 Z"
      fill="white"
      stroke="white"
      strokeWidth="1"
    />
  </svg>
);


export default function GlobalChatbot() {
    const { openChatbot } = useChatbotStore();

    return (
        <>
            <Chatbot />
            <Button
                onClick={openChatbot}
                variant="ghost"
                size="icon"
                className={cn(
                    'fixed bottom-6 right-6 z-40 h-16 w-16 rounded-full shadow-strong transition-transform hover:scale-110 p-0'
                )}
                >
                <CustomAIcon />
            </Button>
        </>
    )
}
