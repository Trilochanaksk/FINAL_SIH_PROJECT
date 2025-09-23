
import { cn } from "@/lib/utils";

export const Logo = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={cn("size-6", className)}
  >
    <title>AyuLink Logo</title>
    <path d="M12 2L12 22" />
    <path d="M12 2L8 6" />
    <path d="M12 2L16 6" />
    <path d="M17 9c-2.5 1.5-4 1.5-5 0" />
    <path d="M7 9c2.5 1.5 4 1.5 5 0" />
    <path d="M19 13H5c-1.1 0-2 .9-2 2v4c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2v-4c0-1.1-.9-2-2-2z" />
    <path d="M9.5 13C8.5 15 8 16.5 8 18" />
  </svg>
);
