"use client";

import { useEffect, useState, type ReactNode } from "react";
import { Check, CheckCircle2, ChevronRight, CloudSun, Database, FileText, Gauge, LoaderCircle, LockKeyhole, Mail, MapPin, Plane, Search, Send, ShieldCheck, Sparkles, SunMedium } from "lucide-react";
import { cn } from "@/lib/utils";
import type { ProductStory, ProductStoryStep } from "@/data/portfolio";
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
    const timer = window.setInterval(() => setActiveIndex((current) => (current + 1) % steps.length), 1700);
    return () => window.clearInterval(timer);
  }, [steps]);

  if (!activeStep) return null;

  return (
    <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_14rem] lg:items-start">
      <MockAppFrame title={title} subtitle="Guided product walkthrough">
        <div className="flex h-full min-h-[15rem] flex-col justify-center">
          <div key={`${story.animationType}-${activeIndex}`} className="product-story-enter">
            <StoryPanel type={story.animationType} step={activeStep} final={activeIndex === steps.length - 1} />
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

type StoryPanelProps = {
  type: ProductStory["animationType"];
  step: ProductStoryStep;
  final: boolean;
};

function StoryPanel({ type, step, final }: StoryPanelProps) {
  if (type === "energy") return <EnergyPanel step={step} final={final} />;
  if (type === "cv" || type === "commercial-cv") return <CvPanel step={step} final={final} secure={type === "commercial-cv"} />;
  if (type === "comparison") return <ComparisonPanel step={step} final={final} />;
  if (type === "seo") return <SeoPanel step={step} final={final} />;
  return <DecisionPanel step={step} final={final} />;
}

function Panel({ children, className }: { children: ReactNode; className?: string }) {
  return <div className={cn("rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_10px_24px_rgba(15,23,42,0.06)]", className)}>{children}</div>;
}

function PanelTitle({ label, icon: Icon }: { label: string; icon: typeof Sparkles }) {
  return <div className="flex items-center gap-2"><span className="flex size-8 items-center justify-center rounded-xl bg-[#e6edfa] text-[#183663]"><Icon className="size-4" aria-hidden="true" /></span><p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#35568d]">{label}</p></div>;
}

function ProcessingPanel({ step, tone = "blue" }: { step: ProductStoryStep; tone?: "blue" | "amber" | "emerald" }) {
  const toneClass = tone === "emerald" ? "border-emerald-200 bg-emerald-50/50 text-emerald-700" : tone === "amber" ? "border-amber-200 bg-amber-50/60 text-amber-700" : "border-[#c7d5eb] bg-white text-[#294a83]";
  return <Panel className={cn("flex min-h-44 flex-col items-center justify-center text-center", toneClass)}><LoaderCircle className="size-9 animate-spin" aria-hidden="true" /><p className="mt-4 text-base font-semibold text-slate-900">{step.loadingText}</p>{step.loadingDetail && <p className="mt-2 max-w-sm text-sm leading-6 text-slate-500">{step.loadingDetail}</p>}<div className="mt-5 flex gap-1.5" aria-hidden="true"><span className="size-1.5 animate-pulse rounded-full bg-current [animation-delay:0ms]" /><span className="size-1.5 animate-pulse rounded-full bg-current [animation-delay:150ms]" /><span className="size-1.5 animate-pulse rounded-full bg-current [animation-delay:300ms]" /></div></Panel>;
}

function DecisionPanel({ step, final }: Omit<StoryPanelProps, "type">) {
  if (step.loadingText) return <ProcessingPanel step={step} />;
  if (step.input) return <Panel><PanelTitle label={step.label} icon={Sparkles} /><p className="mt-5 text-lg font-semibold tracking-[-0.025em] text-slate-900 sm:text-xl">{step.input}</p><div className="mt-5 flex justify-end"><span className="rounded-lg bg-[#183663] px-3 py-2 text-xs font-semibold text-white">Analyze</span></div></Panel>;
  if (step.meta) return <div><PanelTitle label={step.label} icon={Sparkles} /><div className="mt-4 grid grid-cols-2 gap-3">{step.meta.map((item, index) => <Panel key={item} className="p-3.5"><span className="text-xs font-bold text-[#35568d]">0{index + 1}</span><p className="mt-4 text-sm font-semibold leading-5 text-slate-800">{item}</p></Panel>)}</div></div>;
  return <OutputCard step={step} final={final} />;
}

function EnergyPanel({ step, final }: Omit<StoryPanelProps, "type">) {
  if (step.loadingText) return <ProcessingPanel step={step} tone="emerald" />;
  if (step.input) return <Panel className="border-emerald-200"><PanelTitle label={step.label} icon={CloudSun} /><div className="mt-5 flex items-center gap-4"><span className="flex size-14 items-center justify-center rounded-2xl bg-amber-100 text-amber-600"><SunMedium className="size-7" /></span><p className="text-lg font-semibold leading-7 text-slate-900">{step.input}</p></div><div className="mt-5 grid grid-cols-3 gap-2">{["06:00", "12:00", "18:00"].map((time, index) => <div key={time} className="rounded-xl bg-emerald-50 p-2 text-center"><p className="text-[10px] font-semibold text-emerald-700">{time}</p><div className={cn("mx-auto mt-2 h-1.5 rounded-full bg-emerald-500", index === 1 ? "w-full" : "w-1/2 opacity-50")} /></div>)}</div></Panel>;
  if (step.meta && step.output) return <PhoneNotification step={step} final={final} />;
  if (step.meta) return <div><PanelTitle label={step.label} icon={Gauge} /><div className="mt-4 grid gap-3 sm:grid-cols-3">{step.meta.map((item, index) => <Panel key={item} className="p-3.5"><span className={cn("flex size-8 items-center justify-center rounded-xl", index === 0 ? "bg-sky-100 text-sky-700" : "bg-emerald-100 text-emerald-700")}><Gauge className="size-4" /></span><p className="mt-4 text-sm font-semibold leading-5 text-slate-800">{item}</p><div className="mt-3 h-1.5 overflow-hidden rounded-full bg-slate-100"><div className={cn("h-full rounded-full bg-emerald-500", index === 1 ? "w-3/4" : index === 2 ? "w-2/3" : "w-1/2")} /></div></Panel>)}</div></div>;
  return <OutputCard step={step} final={final} icon={SunMedium} />;
}

function PhoneNotification({ step, final }: { step: ProductStoryStep; final: boolean }) {
  return <div className="mx-auto max-w-xs rounded-[2rem] border-[6px] border-slate-900 bg-slate-950 p-2 shadow-[0_18px_34px_rgba(15,23,42,0.22)]"><div className="rounded-[1.45rem] bg-slate-100 p-3"><div className="mx-auto h-1.5 w-16 rounded-full bg-slate-900" /><p className="mt-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-500">Notifications</p><div className="mt-3 space-y-2">{step.meta?.map((item, index) => <div key={item} className="flex gap-2 rounded-xl bg-white p-2.5 shadow-sm"><span className={cn("flex size-7 shrink-0 items-center justify-center rounded-lg", index === 0 ? "bg-red-100 text-red-600" : "bg-sky-100 text-sky-600")}>{index === 0 ? <Mail className="size-3.5" /> : <Send className="size-3.5" />}</span><div><p className="text-xs font-semibold text-slate-800">{item}</p>{index === 0 && <p className="mt-0.5 text-[11px] leading-4 text-slate-500">{step.output}</p>}</div></div>)}</div>{final && step.finalNote && <p className="mt-3 text-center text-[10px] font-medium text-slate-500">{step.finalNote}</p>}</div></div>;
}

function CvPanel({ step, final, secure }: Omit<StoryPanelProps, "type"> & { secure: boolean }) {
  if (step.loadingText) return <CvProcessingPanel step={step} secure={secure} />;
  if (step.input) return <Panel className={secure ? "border-amber-200" : "border-blue-200"}><PanelTitle label={step.label} icon={secure ? LockKeyhole : FileText} /><div className="mt-5 flex gap-4"><span className={cn("flex size-12 shrink-0 items-center justify-center rounded-xl", secure ? "bg-amber-100 text-amber-700" : "bg-blue-100 text-blue-700")}><FileText className="size-6" /></span><div><p className="text-base font-semibold leading-6 text-slate-900">{step.input}</p><div className="mt-3 flex gap-2"><span className="rounded-full bg-slate-100 px-2.5 py-1 text-[10px] font-semibold text-slate-600">Validated input</span>{secure && <span className="rounded-full bg-amber-100 px-2.5 py-1 text-[10px] font-semibold text-amber-700">Temporary session</span>}</div></div></div></Panel>;
  if (step.meta) return <Panel><PanelTitle label={step.label} icon={CheckCircle2} /><div className="mt-5 space-y-3">{step.meta.map((item) => <div key={item} className="flex items-start gap-3 rounded-xl border border-slate-100 bg-slate-50/80 p-3"><span className="mt-0.5 flex size-5 shrink-0 items-center justify-center rounded-md bg-emerald-100 text-emerald-700"><Check className="size-3.5" /></span><p className="text-sm font-medium leading-5 text-slate-700">{item}</p></div>)}</div></Panel>;
  return <DocumentOutput step={step} final={final} secure={secure} />;
}

function CvProcessingPanel({ step, secure }: { step: ProductStoryStep; secure: boolean }) {
  return <Panel className={cn("border-dashed", secure ? "border-amber-300" : "border-blue-300")}><PanelTitle label={step.label} icon={secure ? ShieldCheck : FileText} /><div className="mt-5 flex gap-4"><div className="w-24 shrink-0 rounded-lg border border-slate-200 bg-slate-50 p-2 shadow-sm"><div className="h-1.5 w-1/2 rounded bg-slate-300" /><div className="mt-2 h-1 w-full rounded bg-slate-200" /><div className="mt-1.5 h-1 w-4/5 rounded bg-slate-200" /><div className="mt-1.5 h-1 w-3/5 rounded bg-slate-200" /><div className="mt-4 h-1.5 w-2/3 rounded bg-slate-300" /></div><div className="min-w-0 flex-1"><p className="text-sm font-semibold leading-6 text-slate-900">{step.loadingText}</p>{step.loadingDetail && <p className="mt-2 text-sm leading-5 text-slate-500">{step.loadingDetail}</p>}<div className="mt-4 space-y-2"><div className="flex items-center gap-2 text-xs font-medium text-emerald-700"><CheckCircle2 className="size-3.5" /> Source checks</div><div className="flex items-center gap-2 text-xs font-medium text-[#294a83]"><LoaderCircle className="size-3.5 animate-spin" /> Grounding output</div></div></div></div></Panel>;
}

function DocumentOutput({ step, final, secure }: { step: ProductStoryStep; final: boolean; secure: boolean }) {
  return <Panel className={secure ? "border-amber-200" : "border-blue-200"}><PanelTitle label={step.label} icon={final ? CheckCircle2 : FileText} /><div className="mt-5 rounded-lg border border-slate-200 bg-white p-4 shadow-sm"><div className="flex items-center justify-between"><p className="text-xs font-bold text-slate-800">{step.label}</p><FileText className="size-4 text-slate-400" /></div><div className="mt-4 space-y-2"><div className="h-1.5 w-3/5 rounded bg-slate-800" /><div className="h-1 w-full rounded bg-slate-200" /><div className="h-1 w-11/12 rounded bg-slate-200" /><div className="h-1 w-4/5 rounded bg-slate-200" /></div></div><p className="mt-4 text-sm font-medium leading-6 text-slate-700">{step.output}</p>{final && step.finalNote && <div className="mt-4 flex items-center gap-2 rounded-xl bg-[#edf3fb] px-3 py-2 text-xs font-semibold text-[#173763]"><CheckCircle2 className="size-4" />{step.finalNote}</div>}</Panel>;
}

function ComparisonPanel({ step, final }: Omit<StoryPanelProps, "type">) {
  if (step.loadingText) return <ProcessingPanel step={step} tone="amber" />;
  if (step.input) return <Panel className="border-rose-200"><PanelTitle label={step.label} icon={step.label.toLowerCase().includes("airport") ? Plane : ShieldCheck} /><div className="mt-5 flex items-center gap-3 rounded-xl bg-rose-50 p-4"><span className="flex size-10 items-center justify-center rounded-xl bg-white text-rose-600 shadow-sm"><MapPin className="size-5" /></span><p className="text-base font-semibold text-slate-900">{step.input}</p></div></Panel>;
  if (step.meta && !step.output) return <div><PanelTitle label={step.label} icon={MapPin} /><div className="mt-4 grid grid-cols-3 gap-3">{step.meta.map((item, index) => <Panel key={item} className="p-3"><span className="flex size-7 items-center justify-center rounded-full bg-rose-100 text-xs font-bold text-rose-700">{index + 1}</span><p className="mt-4 text-sm font-semibold leading-5 text-slate-800">{item}</p></Panel>)}</div></div>;
  return <Panel className="border-rose-200"><PanelTitle label={step.label} icon={final ? FileText : Sparkles} /><div className="mt-5 grid gap-2 sm:grid-cols-3">{step.meta?.map((item, index) => <div key={item} className={cn("rounded-xl p-3", index === 2 ? "bg-rose-100" : "bg-slate-50")}><p className="text-[10px] font-bold uppercase tracking-[0.08em] text-slate-500">{item}</p><div className="mt-3 h-1.5 rounded bg-slate-300" /><div className="mt-2 h-1.5 w-2/3 rounded bg-slate-200" /></div>)}</div><p className="mt-4 text-sm font-medium leading-6 text-slate-700">{step.output}</p>{final && step.finalNote && <p className="mt-3 text-xs font-medium text-rose-700">{step.finalNote}</p>}</Panel>;
}

function SeoPanel({ step, final }: Omit<StoryPanelProps, "type">) {
  if (step.loadingText) return <ProcessingPanel step={step} tone="amber" />;
  if (step.input) return <Panel className="border-cyan-200"><PanelTitle label={step.label} icon={Database} /><div className="mt-5 flex items-center gap-4 rounded-xl bg-cyan-50 p-4"><span className="flex size-10 items-center justify-center rounded-xl bg-white text-cyan-700 shadow-sm"><Database className="size-5" /></span><p className="text-base font-semibold leading-6 text-slate-900">{step.input}</p></div></Panel>;
  if (step.meta && !step.output) return <Panel className="border-cyan-200"><PanelTitle label={step.label} icon={Search} /><div className="mt-5 flex flex-wrap gap-2">{step.meta.map((item) => <span key={item} className="rounded-full border border-cyan-200 bg-cyan-50 px-3 py-2 text-xs font-semibold text-cyan-900">{item}</span>)}</div></Panel>;
  return <Panel className="border-cyan-200"><PanelTitle label={step.label} icon={final ? FileText : Sparkles} /><div className="mt-5 space-y-2">{step.meta?.map((item, index) => <div key={item} className="flex items-center gap-3 rounded-xl bg-slate-50 p-3"><span className={cn("flex size-7 items-center justify-center rounded-lg text-xs font-bold", index === 2 ? "bg-cyan-100 text-cyan-700" : "bg-slate-200 text-slate-600")}>{index + 1}</span><p className="text-sm font-semibold text-slate-700">{item}</p>{index < (step.meta?.length ?? 0) - 1 && <ChevronRight className="ml-auto size-4 text-slate-400" />}</div>)}</div><p className="mt-4 text-sm font-medium leading-6 text-slate-700">{step.output}</p>{final && step.finalNote && <p className="mt-3 text-xs font-medium text-cyan-800">{step.finalNote}</p>}</Panel>;
}

function OutputCard({ step, final, icon: Icon = Sparkles }: { step: ProductStoryStep; final: boolean; icon?: typeof Sparkles }) {
  return <Panel className="border-[#c5d6ef]"><PanelTitle label={step.label} icon={final ? CheckCircle2 : Icon} /><p className="mt-5 text-base font-medium leading-7 text-slate-800 sm:text-lg">{step.output}</p>{final && step.finalNote && <div className="mt-5 rounded-xl bg-[#edf3fb] px-4 py-3 text-sm font-medium text-[#173763]">{step.finalNote}</div>}</Panel>;
}
