import { ReactNode } from "react";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface CardProps {
  children: ReactNode;
  className?: string;
}

export default function Card({ children, className }: CardProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-900/50 p-6",
        "transition-all duration-300 hover:border-neutral-700 hover:bg-neutral-900",
        className
      )}
    >
      {children}
    </div>
  );
}