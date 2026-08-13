"use client";

/* Static export uses native images so missing user-provided assets can fall back gracefully. */
/* eslint-disable @next/next/no-img-element */

import { useEffect, useState } from "react";
import type { Hobby } from "@/data/portfolio";

export function HobbyCarousel({ hobby }: { hobby: Hobby }) {
  const [active, setActive] = useState(0);
  const [failed, setFailed] = useState(false);
  const canCycle = hobby.images.length > 1;

  useEffect(() => {
    if (!canCycle) return;
    const timer = window.setInterval(() => setActive((current) => (current + 1) % hobby.images.length), 5500);
    return () => window.clearInterval(timer);
  }, [canCycle, hobby.images.length]);

  const move = (direction: 1 | -1) => {
    setFailed(false);
    setActive((current) => (current + direction + hobby.images.length) % hobby.images.length);
  };

  return (
    <div className="relative aspect-[16/10] overflow-hidden rounded-3xl bg-slate-100 shadow-[0_16px_36px_rgba(15,23,42,0.08)]">
      {!failed ? <img key={hobby.images[active]} src={hobby.images[active]} alt={`${hobby.title}, photo ${active + 1}`} loading="lazy" className="size-full object-cover transition-opacity duration-500" onError={() => setFailed(true)} /> : (
        <div className={`size-full ${hobby.title === "Diving" ? "bg-[radial-gradient(circle_at_70%_20%,rgba(125,211,252,.9),transparent_30%),linear-gradient(135deg,#e0f2fe,#bfdbfe)]" : "bg-[radial-gradient(circle_at_70%_20%,rgba(251,191,36,.42),transparent_30%),linear-gradient(135deg,#fef3c7,#fed7aa)]"}`} />
      )}
      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between bg-gradient-to-t from-slate-950/75 via-slate-950/20 to-transparent p-5 sm:p-6">
        <span className="text-xs font-medium uppercase tracking-[0.16em] text-white/80">{String(active + 1).padStart(2, "0")} / {String(hobby.images.length).padStart(2, "0")}</span>
        {canCycle && <div className="flex gap-2"><button type="button" onClick={() => move(-1)} className="grid size-9 place-items-center rounded-full border border-white/30 bg-black/20 text-lg text-white transition hover:bg-white hover:text-slate-900" aria-label={`Previous ${hobby.title} photo`}>←</button><button type="button" onClick={() => move(1)} className="grid size-9 place-items-center rounded-full border border-white/30 bg-black/20 text-lg text-white transition hover:bg-white hover:text-slate-900" aria-label={`Next ${hobby.title} photo`}>→</button></div>}
      </div>
    </div>
  );
}
