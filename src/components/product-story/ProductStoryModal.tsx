"use client";

import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { Check, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import type { Project } from "@/data/portfolio";
import { ProductStoryAnimation } from "./ProductStoryAnimation";

type ProductStoryModalProps = {
  project: Project | null;
  onClose: () => void;
};

function statusVariant(status: Project["status"]) {
  return status === "Live project" ? "success" : status === "Work in progress" ? "blue" : "warning";
}

export default function ProductStoryModal({ project, onClose }: ProductStoryModalProps) {
  const closeButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!project) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButton.current?.focus();
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [onClose, project]);

  if (!project || typeof document === "undefined") return null;

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-slate-950/45 p-0 backdrop-blur-sm sm:items-center sm:p-5" onMouseDown={onClose}>
      <section role="dialog" aria-modal="true" aria-labelledby={`product-story-${project.id}`} className="max-h-[92dvh] w-full overflow-y-auto rounded-t-[28px] border border-white/70 bg-[#f8fafc] shadow-[0_30px_90px_rgba(15,23,42,0.36)] sm:max-w-[1100px] sm:rounded-[28px]" onMouseDown={(event) => event.stopPropagation()}>
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-slate-200/90 bg-[#f8fafc]/95 px-5 py-4 backdrop-blur sm:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#243b6b]">Product story</p>
          <Button ref={closeButton} type="button" variant="ghost" size="sm" aria-label={`Close ${project.title} story`} onClick={onClose} className="size-9 rounded-full p-0"><X className="size-4" /></Button>
        </div>

        <div className="p-5 sm:p-8 lg:p-10">
          <div className="flex flex-wrap items-center gap-3">
            <Badge variant={statusVariant(project.status)}><span className={`mr-2 size-1.5 rounded-full ${project.status === "Live project" ? "bg-green-600" : project.status === "Work in progress" ? "bg-blue-600" : "bg-amber-600"}`} />{project.status}</Badge>
            <span className="text-sm text-slate-500">{project.role}</span>
          </div>
          <h2 id={`product-story-${project.id}`} className="mt-5 max-w-3xl text-3xl font-semibold tracking-[-0.045em] text-slate-950 sm:text-4xl">{project.title}</h2>
          <p className="mt-4 max-w-3xl text-base leading-7 text-slate-600 sm:text-lg">{project.shortDescription}</p>

          <div className="mt-8 rounded-[26px] border border-slate-300 bg-[#e5edf7] p-3 shadow-[0_18px_40px_rgba(15,23,42,0.09)] sm:p-5">
            <ProductStoryAnimation story={project.productStory} title={project.title} />
          </div>

          <div className="mt-10 grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(16rem,0.85fr)]">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#243b6b]">The problem</p>
              <p className="mt-3 text-base leading-7 text-slate-600">{project.problem}</p>
              <Separator className="my-8" />
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#243b6b]">Workflow</p>
              <ol className="mt-5 space-y-3">{project.workflow.map((step, index) => <li key={step} className="flex gap-4 rounded-xl border border-slate-200 bg-white p-4"><span className="flex size-7 shrink-0 items-center justify-center rounded-full bg-[#e6edfa] text-xs font-bold text-[#243b6b]">{String(index + 1).padStart(2, "0")}</span><span className="pt-0.5 text-sm font-medium leading-6 text-slate-700">{step}</span></li>)}</ol>
            </div>
            <aside className="self-start rounded-2xl border border-slate-200 bg-white p-6 shadow-[0_12px_30px_rgba(15,23,42,0.05)]">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#243b6b]">What it demonstrates</p>
              <p className="mt-3 text-sm leading-7 text-slate-600">{project.outcome}</p>
              <div className="mt-6 border-t border-slate-100 pt-6"><p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">Tech</p><div className="mt-3 flex flex-wrap gap-2">{project.tags.map((tag) => <Badge key={tag} variant="outline">{tag}</Badge>)}</div></div>
              <div className="mt-6 flex items-center gap-2 text-sm font-medium text-slate-600"><Check className="size-4 text-[#243b6b]" aria-hidden="true" />Guided product story — no public demo link</div>
            </aside>
          </div>
        </div>
      </section>
    </div>,
    document.body,
  );
}
