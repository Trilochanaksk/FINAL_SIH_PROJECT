"use client";

import { useChatbotStore } from "@/hooks/use-chatbot-store";
import { cn } from "@/lib/utils";
import Chatbot from "@/components/chatbot/chatbot";
import { Button } from "@/components/ui/button";
import Image from 'next/image';

const CustomAIcon = ({ className, ...props }: React.SVGProps<SVGSVGElement>) => (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 100 100" 
      className={className} 
      {...props}
    >
      <defs>
        <linearGradient id="iconGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: '#4f46e5', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: '#10b981', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      <path 
        fill="url(#iconGradient)" 
        d="M50,10 A10,10 0 0,0 40,20 L15,80 A10,10 0 0,0 25,90 L75,90 A10,10 0 0,0 85,80 L60,20 A10,10 0 0,0 50,10 Z M50,30 L68,75 L32,75 Z"
      />
      <path 
        fill="white" 
        d="M50 45 L52.5 52.5 L60 55 L52.5 57.5 L50 65 L47.5 57.5 L40 55 L47.5 52.5 Z"
      />
    </svg>
);


export default function GlobalChatbot() {
    const { openChatbot } = useChatbotStore();

    return (
        <>
            <Chatbot />
            <button
                onClick={openChatbot}
                className={cn(
                    'fixed bottom-6 right-6 z-40 h-16 w-16 rounded-full p-2 transition-transform hover:scale-110'
                )}
            >
              <CustomAIcon className="h-full w-full" />
            </button>
        </>
    )
}
