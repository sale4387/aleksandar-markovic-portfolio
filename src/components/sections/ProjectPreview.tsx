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
  const [workflow, output] = project.coverSupportingImages;
  return (
    <div className={`relative min-h-[34rem] overflow-hidden bg-gradient-to-br p-5 sm:p-7 ${accentClass}`}>
      <div className="absolute -right-10 -top-12 size-52 rounded-full bg-white/70 blur-3xl" />
      <div className="relative grid min-h-[29rem] grid-rows-[minmax(0,1fr)_11rem] gap-4 sm:grid-rows-[minmax(0,1fr)_12rem] sm:gap-5">
        <div className="overflow-hidden rounded-2xl border border-slate-300 bg-white p-2 shadow-[0_16px_30px_rgba(15,23,42,0.12)]">
          <ProjectScreenshot src={project.coverImage} alt={`${project.title} product cover`} index={0} />
        </div>
        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          <div className="relative overflow-hidden rounded-xl border border-slate-300 bg-white p-1.5 shadow-[0_12px_22px_rgba(15,23,42,0.12)]">
            <ProjectScreenshot src={workflow} alt={`${project.title} workflow screen`} index={1} className="scale-[1.35]" />
            <span className="absolute bottom-2 left-2 rounded-md bg-[#102b57]/90 px-2 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-white">Workflow</span>
          </div>
          <div className="relative overflow-hidden rounded-xl border border-slate-300 bg-white p-1.5 shadow-[0_12px_22px_rgba(15,23,42,0.12)]">
            <ProjectScreenshot src={output} alt={`${project.title} output screen`} index={2} className="scale-[1.35]" />
            <span className="absolute bottom-2 left-2 rounded-md bg-[#102b57]/90 px-2 py-1 text-[10px] font-bold uppercase tracking-[0.12em] text-white">Output</span>
          </div>
        </div>
      </div>
    </div>
  );
}
