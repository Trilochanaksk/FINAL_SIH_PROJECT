import { cn } from "@/lib/utils";

export const Logo = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={cn("size-6", className)}
  >
    <title>AyuLink Logo</title>
    <path d="M12 2v20" />
    <path d="M17.5 2a4.5 4.5 0 0 1 0 9h-11a4.5 4.5 0 0 1 0-9h11Z" />
    <path d="M6.5 11a4.5 4.5 0 0 1 0 9h11a4.5 4.s_ 0 0 1 0-9h-11Z" />
  </svg>
);
