"use client";

/* Static export uses native images so missing user-provided assets can fall back gracefully. */
/* eslint-disable @next/next/no-img-element */

import { useState } from "react";
import { cn } from "@/lib/utils";
import type { Project } from "@/data/portfolio";

type ProjectPreviewProps = {
  project: Project;
  accentClass: string;
};

function PreviewFallback({ title, index }: { title: string; index: number }) {
  const labels = ["Workspace overview", "Workflow map", "Output review"];
  return (
    <div className="relative flex size-full min-h-40 overflow-hidden rounded-[inherit] bg-[linear-gradient(145deg,#ffffff,#f1f5f9)] p-4">
      <div className="absolute inset-x-4 top-4 flex items-center gap-1.5"><i className="size-1.5 rounded-full bg-rose-300" /><i className="size-1.5 rounded-full bg-amber-300" /><i className="size-1.5 rounded-full bg-emerald-300" /><span className="ml-2 h-1.5 w-20 rounded-full bg-slate-200" /></div>
      <div className="mt-7 w-full rounded-xl border border-slate-200 bg-white p-3 shadow-sm">
        <div className="flex items-center justify-between"><div className="h-2 w-2/5 rounded-full bg-slate-700" /><div className="h-5 w-12 rounded-full bg-blue-100" /></div>
        <div className="mt-4 grid grid-cols-3 gap-2"><div className="h-10 rounded-md bg-slate-100" /><div className="h-10 rounded-md bg-blue-100" /><div className="h-10 rounded-md bg-slate-100" /></div>
        <div className="mt-3 flex h-12 items-end gap-1.5 rounded-md bg-slate-50 px-2 pb-2"><i className="h-3 w-1/6 rounded-t bg-slate-300" /><i className="h-6 w-1/6 rounded-t bg-blue-300" /><i className="h-4 w-1/6 rounded-t bg-slate-300" /><i className="h-8 w-1/6 rounded-t bg-blue-500" /><i className="h-5 w-1/6 rounded-t bg-slate-300" /></div>
      </div>
      <span className="absolute bottom-3 left-4 text-[10px] font-semibold uppercase tracking-[0.15em] text-slate-500">{index === 0 ? title : labels[index] ?? "Product screen"}</span>
    </div>
  );
}

export function ProjectScreenshot({ src, alt, index, className }: { src?: string; alt: string; index: number; className?: string }) {
  const [failed, setFailed] = useState(false);
  if (!src || failed) return <div className={cn("size-full", className)}><PreviewFallback title={alt} index={index} /></div>;
  return <img src={src} alt={alt} loading="lazy" className={cn("size-full object-cover object-top", className)} onError={() => setFailed(true)} />;
}

export function ProjectPreview({ project, accentClass }: ProjectPreviewProps) {
  const [featured, ...supporting] = project.screenshots;
  return (
    <div className={`relative min-h-[22rem] overflow-hidden bg-gradient-to-br p-5 sm:p-7 ${accentClass}`}>
      <div className="absolute -right-10 -top-12 size-52 rounded-full bg-white/70 blur-3xl" />
      <div className="relative h-full min-h-[18rem]">
        <div className="absolute inset-x-0 bottom-0 top-0 overflow-hidden rounded-2xl border border-slate-300 bg-white p-2.5 shadow-[0_16px_30px_rgba(15,23,42,0.12)]">
          <ProjectScreenshot src={featured} alt={`${project.title} main screen`} index={0} />
        </div>
        <div className="absolute -bottom-3 -right-2 hidden w-[43%] rotate-3 overflow-hidden rounded-xl border border-slate-300 bg-white p-1.5 shadow-[0_14px_26px_rgba(15,23,42,0.15)] sm:block">
          <div className="aspect-[4/3]"><ProjectScreenshot src={supporting[0]} alt={`${project.title} supporting screen`} index={1} /></div>
        </div>
        <div className="absolute -bottom-6 left-2 hidden w-[34%] -rotate-3 overflow-hidden rounded-xl border border-slate-300 bg-white p-1.5 shadow-[0_14px_26px_rgba(15,23,42,0.15)] md:block">
          <div className="aspect-[4/3]"><ProjectScreenshot src={supporting[1]} alt={`${project.title} detail screen`} index={2} /></div>
        </div>
      </div>
    </div>
  );
}
