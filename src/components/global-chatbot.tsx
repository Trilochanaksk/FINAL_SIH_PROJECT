
"use client";

import { useChatbotStore } from "@/hooks/use-chatbot-store";
import { cn } from "@/lib/utils";
import Chatbot from "@/components/chatbot/chatbot";

const CustomAIcon = ({ className, ...props }: { className?: string; [key: string]: any }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 100 100"
    className={cn("h-20 w-20 cursor-pointer", className)}
    {...props}
  >
    <defs>
      <linearGradient id="icon-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" style={{ stopColor: 'hsl(var(--primary))', stopOpacity: 1 }} />
        <stop offset="100%" style={{ stopColor: 'hsl(var(--secondary))', stopOpacity: 1 }} />
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
            <CustomAIcon
                onClick={openChatbot}
                className={cn(
                    'fixed bottom-6 right-6 z-40 shadow-strong transition-transform hover:scale-110'
                )}
            />
        </>
    )
}

