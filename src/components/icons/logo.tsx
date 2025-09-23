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
    <path d="M8 3a4 4 0 0 1 8 0" />
    <path d="M8 3v3a4 4 0 0 0 4 4h0a4 4 0 0 0 4-4V3" />
    <path d="M12 10v10" />
    <circle cx="12" cy="20" r="2" />
    <path d="M6 6 C 2 10, 2 18, 6 22"/>
    <path d="M18 6 C 22 10, 22 18, 18 22"/>
  </svg>
);
