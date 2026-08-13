"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";
import { Check, MapPin, X } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import type { Event } from "@/data/portfolio";

type EventStoryModalProps = {
  event: Event | null;
  onClose: () => void;
};

function EventImageGallery({ images, title }: { images: string[]; title: string }) {
  const [visibleImages, setVisibleImages] = useState(images);

  if (visibleImages.length === 0) return null;

  return (
    <div className="mt-8 grid gap-3 sm:grid-cols-2">
      {visibleImages.map((image) => (
        <Image
          key={image}
          src={image}
          alt={`${title} event documentation`}
          className="aspect-[4/3] w-full rounded-2xl border border-slate-200 bg-slate-100 object-cover"
          width={800}
          height={600}
          onError={() => setVisibleImages((current) => current.filter((item) => item !== image))}
        />
      ))}
    </div>
  );
}

export default function EventStoryModal({ event, onClose }: EventStoryModalProps) {
  const closeButton = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!event) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButton.current?.focus();
    const onKeyDown = (keyboardEvent: KeyboardEvent) => {
      if (keyboardEvent.key === "Escape") onClose();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [event, onClose]);

  if (!event || typeof document === "undefined") return null;

  return createPortal(
    <div className="fixed inset-0 z-50 flex items-end justify-center bg-slate-950/45 p-0 backdrop-blur-sm sm:items-center sm:p-5" onMouseDown={onClose}>
      <section role="dialog" aria-modal="true" aria-labelledby={`event-story-${event.id}`} className="max-h-[92dvh] w-full overflow-y-auto rounded-t-[28px] border border-white/70 bg-[#f8fafc] shadow-[0_30px_90px_rgba(15,23,42,0.36)] sm:max-w-3xl sm:rounded-[28px]" onMouseDown={(mouseEvent) => mouseEvent.stopPropagation()}>
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-slate-200/90 bg-[#f8fafc]/95 px-5 py-4 backdrop-blur sm:px-8">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#243b6b]">Event story</p>
          <Button ref={closeButton} type="button" variant="ghost" size="sm" aria-label={`Close ${event.title} story`} onClick={onClose} className="size-9 rounded-full p-0"><X className="size-4" /></Button>
        </div>

        <div className="p-5 sm:p-8">
          <div className="flex flex-wrap items-center gap-2">
            <Badge variant="blue">{event.category}</Badge>
            <span className="flex items-center gap-1.5 text-sm text-slate-500"><MapPin className="size-3.5" aria-hidden="true" />{event.year} · {event.location}</span>
          </div>
          <h2 id={`event-story-${event.id}`} className="mt-5 text-3xl font-semibold tracking-[-0.045em] text-slate-950 sm:text-4xl">{event.title}</h2>
          <p className="mt-3 text-base font-medium text-[#243b6b]">{event.role}</p>
          <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">{event.shortDescription}</p>

          <EventImageGallery key={event.id} images={event.images} title={event.title} />

          <div className="mt-8 grid gap-8 sm:grid-cols-[minmax(0,1.2fr)_minmax(14rem,0.8fr)]">
            <div>
              <StorySection title="Context"><p className="text-sm leading-7 text-slate-600">{event.context}</p></StorySection>
              <Separator className="my-7" />
              <StorySection title="My role"><p className="text-sm leading-7 text-slate-600">{event.role}</p></StorySection>
              <Separator className="my-7" />
              <StorySection title="What happened">
                <ul className="space-y-3">{event.contribution.map((item) => <li key={item} className="flex gap-3 text-sm leading-6 text-slate-600"><Check className="mt-1 size-4 shrink-0 text-[#35568d]" aria-hidden="true" />{item}</li>)}</ul>
                <p className="mt-5 text-sm leading-7 text-slate-600">{event.outcome}</p>
              </StorySection>
            </div>
            <aside className="self-start rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_12px_30px_rgba(15,23,42,0.05)]">
              <StorySection title="What it shows"><div className="mt-4 flex flex-wrap gap-2">{event.demonstrates.map((item) => <Badge key={item} variant="outline">{item}</Badge>)}</div></StorySection>
            </aside>
          </div>
        </div>
      </section>
    </div>,
    document.body,
  );
}

function StorySection({ title, children }: { title: string; children: React.ReactNode }) {
  return <section>
    <h3 className="text-xs font-semibold uppercase tracking-[0.16em] text-[#243b6b]">{title}</h3>
    <div className="mt-3">{children}</div>
  </section>;
}
