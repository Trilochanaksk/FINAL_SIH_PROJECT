'use client';

import { useSearchParams } from 'next/navigation';
import AppHeader from '@/components/layout/app-header';
import {
  DoctorSidebarNav,
  PatientSidebarNav,
} from '@/components/layout/sidebar-nav';
import { Logo } from '@/components/icons/logo';
import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarInset,
  SidebarFooter,
} from '@/components/ui/sidebar';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import { LogOut } from 'lucide-react';
import Link from 'next/link';
import Chatbot from '@/components/chatbot/chatbot';
import BottomNav from '@/components/layout/bottom-nav';
import { useChatbotStore } from '@/hooks/use-chatbot-store';
import { cn } from '@/lib/utils';

const ChatbotIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 44 44"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <defs>
      <linearGradient id="icon-gradient" x1="0" y1="0" x2="0" y2="100%">
        <stop offset="0%" style={{ stopColor: '#F59E0B' }} />
        <stop offset="100%" style={{ stopColor: '#8B5CF6' }} />
      </linearGradient>
    </defs>
    <path
      d="M22 42C33.0457 42 42 33.0457 42 22C42 10.9543 33.0457 2 22 2C10.9543 2 2 10.9543 2 22C2 33.0457 10.9543 42 22 42Z"
      stroke="url(#icon-gradient)"
      strokeWidth="4"
    />
    <path
      d="M28.5 29.5C28.5 33.5 25.5 29.5 22.5 32C19.5 34.5 16.5 32.5 16.5 29C16.5 25.5 20.5 24.5 22.5 24.5C24.5 24.5 28.5 25.5 28.5 29.5Z"
      stroke="url(#icon-gradient)"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M26.5 23.5C26.5 22.5 26 20.5 24 20.5C22 20.5 21.5 22.5 21.5 23.5"
      stroke="url(#icon-gradient)"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M15 17C15 15.6667 15.6 12 18.5 12C21.4 12 22 15.6667 22 17"
      stroke="url(#icon-gradient)"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);


export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const searchParams = useSearchParams();
  const role = searchParams.get('role') || 'doctor';
  const { openChatbot } = useChatbotStore();

  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader>
          <Link href={`/?role=${role}`} className="flex items-center gap-2">
            <Logo className="size-8 text-primary" />
            <span className="text-xl font-semibold tracking-tight">
              AyuLink
            </span>
          </Link>
        </SidebarHeader>
        <Separator />
        <SidebarContent>
          {role === 'doctor' ? <DoctorSidebarNav /> : <PatientSidebarNav />}
        </SidebarContent>
        <Separator />
        <SidebarFooter>
          <Button variant="ghost" className="w-full justify-start" asChild>
            <Link href="/">
              <LogOut />
              <span>Log Out</span>
            </Link>
          </Button>
        </SidebarFooter>
      </Sidebar>
      <SidebarInset className="flex flex-col bg-muted/40">
        <AppHeader />
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 pb-20 md:pb-8">
          <div className="mx-auto max-w-7xl">{children}</div>
        </main>
        
        <Chatbot />

        {/* Floating Chatbot Button - Visible on all screen sizes */}
        <Button
          onClick={openChatbot}
          variant="ghost"
          size="icon"
          className={cn(
            'fixed bottom-6 right-6 z-40 h-16 w-16 rounded-full shadow-strong transition-transform hover:scale-110'
          )}
        >
          <ChatbotIcon className="h-full w-full" />
        </Button>
        
        <BottomNav />
      </SidebarInset>
    </SidebarProvider>
  );
}
