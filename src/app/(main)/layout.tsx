
"use client";

import { useSearchParams } from "next/navigation";
import AppHeader from "@/components/layout/app-header";
import { DoctorSidebarNav, PatientSidebarNav } from "@/components/layout/sidebar-nav";
import { Logo } from "@/components/icons/logo";
import {
  SidebarProvider,
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarInset,
  SidebarFooter,
} from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import Link from "next/link";
import Chatbot from "@/components/chatbot/chatbot";
import { useChatbotStore } from "@/hooks/use-chatbot-store";
import { cn } from "@/lib/utils";


const ChatbotIcon = ({ className }: { className?: string }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 56 56"
      fill="none"
      className={className}
    >
      <defs>
        <linearGradient id="chatbot-gradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#F97316" />
          <stop offset="100%" stopColor="#A855F7" />
        </linearGradient>
      </defs>
      <circle cx="28" cy="28" r="26" stroke="url(#chatbot-gradient)" strokeWidth="3" />
      <path
        d="M21.104,24.819c-0.48,1.53-1.84,2.44-3.5,2.15c-1.66-0.29-2.73-1.66-2.43-3.32s1.65-2.73,3.31-2.44c1.11,0.19,2.02,0.92,2.43,1.87"
        stroke="url(#chatbot-gradient)"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21.104,24.819c1.07,3.42,4.1,5.46,7.74,5.17c3.64-0.29,6.11-3.05,6.01-6.57c-0.1-3.52-2.92-5.94-6.44-5.59c-1.39,0.14-2.65,0.73-3.6,1.6"
        stroke="url(#chatbot-gradient)"
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
            <span className="text-xl font-semibold tracking-tight">AyuLink</span>
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
        <main className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8">
            <div className="max-w-7xl mx-auto">
                 {children}
            </div>
        </main>
         <Button 
            onClick={openChatbot}
            variant="ghost"
            className="fixed bottom-6 right-6 h-16 w-16 rounded-full z-50 p-0 shadow-lg hover:bg-transparent focus:bg-transparent"
        >
            <ChatbotIcon className="h-full w-full" />
            <span className="sr-only">Open Chatbot</span>
        </Button>
        <Chatbot />
      </SidebarInset>
    </SidebarProvider>
  );
}
