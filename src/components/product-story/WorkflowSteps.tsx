import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ProductStoryStep } from "@/data/portfolio";

type WorkflowStepsProps = {
  steps: ProductStoryStep[];
  activeIndex: number;
};

export function WorkflowSteps({ steps, activeIndex }: WorkflowStepsProps) {
  return (
    <ol className="grid gap-2 sm:grid-cols-2 lg:grid-cols-1">
      {steps.map((step, index) => {
        const isActive = index === activeIndex;
        const isComplete = index < activeIndex;
        return (
          <li key={step.label} className={cn("flex items-center gap-3 rounded-xl border px-3 py-2.5 transition-all duration-500", isActive ? "border-[#294a83] bg-[#e7eef9] shadow-sm" : "border-slate-200 bg-white/70", isComplete && "border-slate-200 bg-white")}> 
            <span className={cn("flex size-6 shrink-0 items-center justify-center rounded-full text-[10px] font-bold", isActive ? "bg-[#183663] text-white" : isComplete ? "bg-emerald-100 text-emerald-700" : "bg-slate-100 text-slate-500")}>
              {isComplete ? <Check className="size-3.5" aria-hidden="true" /> : String(index + 1).padStart(2, "0")}
            </span>
            <span className={cn("text-sm font-medium", isActive ? "text-[#102c59]" : "text-slate-600")}>{step.label}</span>
          </li>
        );
      })}
    </ol>
  );
}
