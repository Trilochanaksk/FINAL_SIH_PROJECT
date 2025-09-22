"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { LogOut, Settings, User } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import Link from "next/link";


export default function AppHeader() {
  const pathname = usePathname();
  const router = useRouter();

  const getPageTitle = () => {
    if (pathname.startsWith("/patients")) {
      return "Patient Records";
    }
    switch (pathname) {
      case "/dashboard":
        return "Dashboard";
      case "/search":
        return "Diagnosis Search";
      case "/reporting":
        return "Reporting";
       case "/settings":
        return "Settings";
      default:
        return "AyuLink";
    }
  };

  const handleLogout = () => {
    // In a real app, you'd clear the session/token here
    router.push('/'); 
  }

  return (
    <header className="sticky top-0 z-10 flex h-16 items-center gap-4 border-b bg-background/80 px-4 backdrop-blur-sm sm:px-6">
      <div className="md:hidden">
        <SidebarTrigger />
      </div>
      <div className="hidden md:block">
        <h1 className="text-xl font-semibold tracking-tight">
          {getPageTitle()}
        </h1>
      </div>
      <div className="ml-auto flex items-center gap-4">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="relative h-9 w-9 rounded-full">
              <Avatar className="h-9 w-9">
                <AvatarImage
                  src="https://picsum.photos/seed/user-avatar/100/100"
                  alt="User Avatar"
                />
                <AvatarFallback>U</AvatarFallback>
              </Avatar>
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56" align="end" forceMount>
            <DropdownMenuLabel className="font-normal">
              <div className="flex flex-col space-y-1">
                <p className="text-sm font-medium leading-none">
                  Dr. Anya Sharma
                </p>
                <p className="text-xs leading-none text-muted-foreground">
                  doctor.anya@ayulink.com
                </p>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <Link href="/settings">
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
               <Link href="/settings">
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
              </Link>
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={handleLogout}>
              <LogOut className="mr-2 h-4 w-4" />
              <span>Log out</span>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
