
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
            className={cn(
                "fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg z-50",
                "bg-primary hover:bg-primary/90"
            )}
        >
            <Bot className="h-8 w-8 text-primary-foreground" />
            <span className="sr-only">Open Chatbot</span>
        </Button>
        <Chatbot />
      </SidebarInset>
    </SidebarProvider>
  );
}
