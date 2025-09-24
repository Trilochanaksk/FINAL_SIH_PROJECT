
'use client';

import { usePathname, useSearchParams } from 'next/navigation';
import Link from 'next/link';
import { Home, Search, Upload } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useChatbotStore } from '@/hooks/use-chatbot-store';
import { Button } from '../ui/button';

const ChatbotIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 44 44"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M22 42C33.0457 42 42 33.0457 42 22C42 10.9543 33.0457 2 22 2C10.9543 2 2 10.9543 2 22C2 33.0457 10.9543 42 22 42Z"
      fill="url(#paint0_linear_30_93)"
      stroke="url(#paint1_linear_30_93)"
      strokeWidth="4"
    />
    <path
      d="M22.5 32C19.5 34.5 16.5 32.5 16.5 29C16.5 25.5 20.5 24.5 22.5 24.5C24.5 24.5 28.5 25.5 28.5 29.5C28.5 33.5 25.5 29.5 22.5 32Z"
      stroke="white"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M21.5 23.5C21.5 22.5 22 20.5 24 20.5C26 20.5 26.5 22.5 26.5 23.5"
      stroke="white"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M22 17C22 15.6667 21.4 12 18.5 12C15.6 12 15 15.6667 15 17"
      stroke="white"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <defs>
      <linearGradient
        id="paint0_linear_30_93"
        x1="22"
        y1="2"
        x2="22"
        y2="42"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#9E85FE" />
        <stop offset="1" stopColor="#7950F2" />
      </linearGradient>
      <linearGradient
        id="paint1_linear_30_93"
        x1="22"
        y1="0"
        x2="22"
        y2="44"
        gradientUnits="user-spaceOnUse"
      >
        <stop stopColor="white" />
        <stop offset="1" stopColor="white" stopOpacity="0" />
      </linearGradient>
    </defs>
  </svg>
);

export default function BottomNav() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const role = searchParams.get('role') || 'doctor';
  const { openChatbot } = useChatbotStore();

  const navItems =
    role === 'doctor'
      ? [
          { href: '/dashboard', icon: Home, label: 'Home' },
          { href: '/search', icon: Search, label: 'Search' },
          { href: '/upload', icon: Upload, label: 'Upload' },
        ]
      : [{ href: '/dashboard', icon: Home, label: 'Home' }];

  return (
    <div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-background border-t md:hidden">
      <div className="grid h-full max-w-lg grid-cols-4 mx-auto font-medium">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.label}
              href={`${item.href}?role=${role}`}
              className={cn(
                'inline-flex flex-col items-center justify-center px-5 hover:bg-muted-foreground/10 group',
                isActive
                  ? 'text-primary'
                  : 'text-muted-foreground'
              )}
            >
              <item.icon
                className={cn(
                  'w-6 h-6 mb-1',
                )}
              />
              <span className="text-xs">{item.label}</span>
            </Link>
          );
        })}
        <Button
            variant="ghost"
            onClick={openChatbot}
            className="inline-flex flex-col items-center justify-center px-5 hover:bg-muted-foreground/10 group text-muted-foreground h-full"
        >
            <ChatbotIcon className="w-8 h-8 mb-1" />
            <span className="text-xs">Chat</span>
        </Button>
      </div>
    </div>
  );
}
