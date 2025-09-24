
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
import { LogOut, Bot } from "lucide-react";
import Link from "next/link";
import Chatbot from "@/components/chatbot/chatbot";
import { useChatbotStore } from "@/hooks/use-chatbot-store";
import { cn } from "@/lib/utils";


const ChatbotIcon = ({ className }: { className?: string }) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 40 40"
      fill="none"
      className={className}
    >
      <defs>
        <linearGradient id="chatbot-gradient" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#F97316" />
          <stop offset="100%" stopColor="#A855F7" />
        </linearGradient>
      </defs>
      <path
        d="M13.416,21.532c-0.64,2.04 -2.453,3.253 -4.666,2.866c-2.213,-0.387 -3.64,-2.213 -3.24,-4.426c0.4,-2.213 2.2,-3.64 4.413,-3.253c1.48,0.253 2.693,1.226 3.24,2.493"
        stroke="url(#chatbot-gradient)"
        strokeWidth="3.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.416,21.532c1.427,4.56 5.466,7.28 10.32,6.893c4.853,-0.387 8.146,-4.066 8.013,-8.76c-0.133,-4.693 -3.893,-7.92 -8.586,-7.453c-1.853,0.187 -3.533,0.973 -4.8,2.133"
        stroke="url(#chatbot-gradient)"
        strokeWidth="3.5"
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
            className="fixed bottom-6 right-6 h-14 w-14 rounded-full z-50 p-0 shadow-lg hover:bg-transparent focus:bg-transparent"
        >
            <ChatbotIcon className="h-full w-full" />
            <span className="sr-only">Open Chatbot</span>
        </Button>
        <Chatbot />
      </SidebarInset>
    </SidebarProvider>
  );
}
