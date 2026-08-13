"use client";

import { useState } from "react";
import { ArrowUpRight, MapPin } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { portfolio, type Event } from "@/data/portfolio";
import EventStoryModal from "@/components/event-story/EventStoryModal";
import { Section } from "./Section";

export function EventManagement() {
  const [activeEvent, setActiveEvent] = useState<Event | null>(null);

  return (
    <>
      <Section id="events" className="bg-[#ccd7e4]">
        <SectionHeading eyebrow="Experiences" title="Event Management" description="Community, learning, and delivery experiences brought to life through clear organisation." />
        <div className="mt-10 grid gap-4 md:grid-cols-2">
          {portfolio.events.map((item) => (
            <Card key={item.id} role="button" tabIndex={0} aria-label={`View ${item.title} story`} onClick={() => setActiveEvent(item)} onKeyDown={(keyboardEvent) => {
              if (keyboardEvent.key === "Enter" || keyboardEvent.key === " ") {
                keyboardEvent.preventDefault();
                setActiveEvent(item);
              }
            }} className="group cursor-pointer transition-all hover:-translate-y-0.5 hover:border-[#8fa6c8] hover:shadow-[0_18px_36px_rgba(15,23,42,0.10)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#35568d] focus-visible:ring-offset-2">
              <CardHeader className="p-6 pb-0"><div className="flex items-center justify-between gap-3"><p className="flex items-center gap-1.5 text-sm font-medium text-[#243b6b]"><MapPin className="size-3.5" aria-hidden="true" />{item.year} · {item.location}</p><span className="text-xs font-semibold text-slate-400">{item.category}</span></div><CardTitle className="mt-3 text-lg">{item.title}</CardTitle></CardHeader>
              <CardContent className="p-6 pt-4"><p className="text-sm leading-7 text-slate-600">{item.shortDescription}</p><span className="mt-5 flex items-center gap-2 text-sm font-semibold text-[#243b6b]">View story <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" aria-hidden="true" /></span></CardContent>
            </Card>
          ))}
        </div>
      </Section>
      <EventStoryModal event={activeEvent} onClose={() => setActiveEvent(null)} />
    </>
  );
}
