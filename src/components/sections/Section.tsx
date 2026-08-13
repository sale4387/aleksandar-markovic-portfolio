import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function Section({ id, children, className = "" }: { id: string; children: ReactNode; className?: string }) {
  return <section id={id} className={cn("scroll-mt-20 overflow-hidden rounded-[28px] border border-[#cbd5e1] bg-[#f8fafc] px-6 py-16 shadow-[0_12px_30px_rgba(15,23,42,0.05)] sm:px-8 sm:py-20 lg:px-12", className)}>{children}</section>;
}
