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

function WorkflowSnapshot({ src, alt, label, detail }: { src: string; alt: string; label: string; detail: string }) {
  return (
    <div className="relative isolate overflow-hidden rounded-xl border border-slate-300 bg-[#eef3fb] p-4 shadow-[0_12px_22px_rgba(15,23,42,0.12)]">
      <div className="absolute inset-0 opacity-25"><ProjectScreenshot src={src} alt={alt} index={1} /></div>
      <div className="absolute inset-0 bg-[linear-gradient(110deg,rgba(255,255,255,.96),rgba(245,249,255,.83))]" />
      <div className="relative flex h-full flex-col justify-between gap-2">
        <span className="w-fit rounded-full bg-[#dce8ff] px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.1em] text-[#234887]">Workflow view</span>
        <div><p className="text-base font-bold leading-tight text-[#132b52] sm:text-lg">{label}</p><p className="mt-1 text-xs font-medium leading-4 text-slate-600 sm:text-sm">{detail}</p></div>
      </div>
    </div>
  );
}

export function ProjectPreview({ project, accentClass }: ProjectPreviewProps) {
  const [workflow, output] = project.coverSupportingImages;
  const [workflowLabel, outputLabel] = project.coverSupportingLabels;
  const [workflowDetail, outputDetail] = project.coverSupportingDetails;
  const sideHero = ["energy-optimizer", "commercial-cv", "seo-automation"].includes(project.id);
  const hero = <div className="h-full overflow-hidden rounded-2xl border border-slate-300 bg-white p-2 shadow-[0_16px_30px_rgba(15,23,42,0.12)]"><ProjectScreenshot src={project.coverImage} alt={`${project.title} product cover`} index={0} /></div>;
  const workflowCard = <WorkflowSnapshot src={workflow} alt={`${project.title} workflow screen`} label={workflowLabel} detail={workflowDetail} />;
  const outputCard = <WorkflowSnapshot src={output} alt={`${project.title} output screen`} label={outputLabel} detail={outputDetail} />;
  return (
    <div className={`relative min-h-[34rem] overflow-hidden bg-gradient-to-br p-5 sm:p-7 ${accentClass}`}>
      <div className="absolute -right-10 -top-12 size-52 rounded-full bg-white/70 blur-3xl" />
      {sideHero ? <div className="relative grid min-h-[29rem] grid-cols-[1.15fr_.85fr] grid-rows-2 gap-4 sm:gap-5"><div className="row-span-2">{hero}</div>{workflowCard}{outputCard}</div> : <div className="relative grid min-h-[29rem] grid-rows-[minmax(0,1.25fr)_minmax(0,.75fr)] gap-4 sm:gap-5"><div>{hero}</div><div className="grid grid-cols-2 gap-4 sm:gap-5">{workflowCard}{outputCard}</div></div>}
    </div>
  );
}
