import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type MockAppFrameProps = {
  title: string;
  subtitle: string;
  children: ReactNode;
  className?: string;
};

export function MockAppFrame({ title, subtitle, children, className }: MockAppFrameProps) {
  return (
    <div className={cn("overflow-hidden rounded-[22px] border border-slate-300/90 bg-white shadow-[0_22px_50px_rgba(15,23,42,0.14)]", className)}>
      <div className="flex items-center justify-between border-b border-slate-200 bg-slate-50/90 px-4 py-3 sm:px-5">
        <div className="flex items-center gap-1.5" aria-hidden="true">
          <span className="size-2 rounded-full bg-rose-300" />
          <span className="size-2 rounded-full bg-amber-300" />
          <span className="size-2 rounded-full bg-emerald-300" />
        </div>
        <div className="min-w-0 text-right">
          <p className="truncate text-xs font-semibold text-slate-800">{title}</p>
          <p className="mt-0.5 truncate text-[11px] text-slate-500">{subtitle}</p>
        </div>
      </div>
      <div className="min-h-[19rem] bg-[linear-gradient(145deg,#f8fafc_0%,#eef3f9_100%)] p-4 sm:min-h-[22rem] sm:p-6">{children}</div>
    </div>
  );
}
