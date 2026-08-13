"use client";

import { useEffect, useState } from "react";
import { CheckCircle2, LoaderCircle, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ProductStory } from "@/data/portfolio";
import { MockAppFrame } from "./MockAppFrame";
import { WorkflowSteps } from "./WorkflowSteps";

type ProductStoryAnimationProps = {
  story: ProductStory;
  title: string;
};

export function ProductStoryAnimation({ story, title }: ProductStoryAnimationProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const steps = story.steps;
  const activeStep = steps[activeIndex];

  useEffect(() => {
    if (steps.length < 2) return;
    const timer = window.setInterval(() => setActiveIndex((current) => (current + 1) % steps.length), 1500);
    return () => window.clearInterval(timer);
  }, [steps]);

  if (!activeStep) return null;

  return (
    <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_14rem] lg:items-start">
      <MockAppFrame title={title} subtitle="Guided product walkthrough">
        <div className="flex h-full min-h-[15rem] flex-col justify-center">
          <div key={`${story.animationType}-${activeIndex}`} className="product-story-enter">
            {activeStep.input && <InputPanel label={activeStep.label} value={activeStep.input} />}
            {activeStep.meta && <CriteriaPanel label={activeStep.label} criteria={activeStep.meta} />}
            {activeStep.loadingText && <LoadingPanel text={activeStep.loadingText} />}
            {activeStep.output && <OutputPanel label={activeStep.label} value={activeStep.output} final={activeIndex === steps.length - 1} />}
          </div>
          <div className="mt-6 flex items-center justify-between gap-4 border-t border-slate-200 pt-4">
            <span className="text-xs font-medium text-slate-500">Animated product story</span>
            <span className="text-xs font-semibold tabular-nums text-[#183663]">{String(activeIndex + 1).padStart(2, "0")} / {String(steps.length).padStart(2, "0")}</span>
          </div>
        </div>
      </MockAppFrame>
      <WorkflowSteps steps={steps} activeIndex={activeIndex} />
    </div>
  );
}

function InputPanel({ label, value }: { label: string; value: string }) {
  return <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_10px_24px_rgba(15,23,42,0.06)]"><p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#35568d]">{label}</p><p className="mt-4 text-lg font-semibold tracking-[-0.025em] text-slate-900 sm:text-xl">{value}</p><div className="mt-5 flex justify-end"><span className="rounded-lg bg-[#183663] px-3 py-2 text-xs font-semibold text-white">Continue</span></div></div>;
}

function CriteriaPanel({ label, criteria }: { label: string; criteria: string[] }) {
  return <div><p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#35568d]">{label}</p><div className="mt-4 grid grid-cols-2 gap-3">{criteria.map((criterion, index) => <div key={criterion} className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm"><span className={cn("flex size-7 items-center justify-center rounded-lg text-xs font-bold", index % 2 ? "bg-slate-100 text-slate-700" : "bg-[#e6edfa] text-[#183663]")}>{String(index + 1).padStart(2, "0")}</span><p className="mt-5 text-sm font-semibold text-slate-800">{criterion}</p></div>)}</div></div>;
}

function LoadingPanel({ text }: { text: string }) {
  return <div className="flex min-h-40 flex-col items-center justify-center rounded-2xl border border-[#c7d5eb] bg-white p-6 text-center shadow-[0_10px_24px_rgba(15,23,42,0.06)]"><LoaderCircle className="size-9 animate-spin text-[#294a83]" aria-hidden="true" /><p className="mt-4 text-base font-semibold text-slate-900">{text}</p><p className="mt-2 text-sm text-slate-500">Reviewing inputs and balancing the criteria.</p></div>;
}

function OutputPanel({ label, value, final }: { label: string; value: string; final: boolean }) {
  return <div className="rounded-2xl border border-[#c5d6ef] bg-white p-5 shadow-[0_10px_24px_rgba(15,23,42,0.06)]"><div className="flex items-center gap-2"><span className="flex size-8 items-center justify-center rounded-full bg-[#e6edfa] text-[#183663]">{final ? <CheckCircle2 className="size-4" /> : <Sparkles className="size-4" />}</span><p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#35568d]">{label}</p></div><p className="mt-5 text-base font-medium leading-7 text-slate-800 sm:text-lg">{value}</p>{final && <div className="mt-5 rounded-xl bg-[#edf3fb] px-4 py-3 text-sm font-medium text-[#173763]">Decision context retained for a clearer next step.</div>}</div>;
}
