"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar";
import { LayoutDashboard, Users, FileText, Search, Settings } from "lucide-react";

const menuItems = [
  {
    href: "/dashboard",
    icon: LayoutDashboard,
    label: "Dashboard",
  },
  {
    href: "/patients",
    icon: Users,
    label: "Patients",
  },
  {
    href: "/reporting",
    icon: FileText,
    label: "Reporting",
  },
    {
    href: "/search",
    icon: Search,
    label: "Diagnosis Search",
  },
  {
    href: "/settings",
    icon: Settings,
    label: "Settings",
  }
];

export function SidebarNav() {
  const pathname = usePathname();

  return (
    <SidebarMenu>
      {menuItems.map((item) => (
        <SidebarMenuItem key={item.href}>
          <SidebarMenuButton
            asChild
            isActive={pathname.startsWith(item.href)}
            tooltip={item.label}
          >
            <Link href={item.href}>
              <item.icon />
              <span>{item.label}</span>
            </Link>
          </SidebarMenuButton>
        </SidebarMenuItem>
      ))}
    </SidebarMenu>
  );
}
