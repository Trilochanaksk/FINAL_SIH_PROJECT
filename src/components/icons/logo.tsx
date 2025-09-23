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
    <path d="M12 3v4" />
    <path d="M12 17v4" />
    <path d="M21 12h-4" />
    <path d="M7 12H3" />
    <path d="M17.65 6.35C16.2 4.9 14.2 4 12 4s-4.2.9-5.65 2.35" />
    <path d="M6.35 17.65C7.8 19.1 9.8 20 12 20s4.2-.9 5.65-2.35" />
    <path d="M17.65 17.65C19.1 16.2 20 14.2 20 12s-.9-4.2-2.35-5.65" />
    <path d="M6.35 6.35C4.9 7.8 4 9.8 4 12s.9 4.2 2.35 5.65" />
  </svg>
);
