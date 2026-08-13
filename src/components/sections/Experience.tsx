"use client";

import { Check } from "lucide-react";
import { CompanyLogo } from "@/components/CompanyLogo";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { portfolio } from "@/data/portfolio";
import { Section } from "./Section";

export function Experience() {
  return (
    <Section id="experience">
      <SectionHeading eyebrow="Career" title="Professional Experience" description="Selected experience across technology, partnerships, operations, and delivery." />
      <Accordion type="single" collapsible defaultValue={portfolio.experience[0]?.company} className="mt-10 space-y-3">
        {portfolio.experience.map((item) => (
          <AccordionItem key={item.company} value={item.company} className="rounded-2xl border border-slate-200 bg-white shadow-[0_12px_30px_rgba(15,23,42,0.04)]">
            <AccordionTrigger className="gap-5 px-6 py-5 hover:bg-slate-50 sm:px-7 sm:py-6">
              <div className="grid flex-1 gap-3 pr-2 sm:grid-cols-[minmax(12rem,0.8fr)_minmax(0,1.5fr)_auto] sm:items-center sm:gap-6">
                <div><h3 className="text-lg"><CompanyLogo company={item.company} /></h3><p className="mt-1.5 text-sm font-semibold text-[#243b6b]">{item.role}</p></div>
                <p className="hidden text-sm leading-6 text-slate-600 sm:block">{item.summary}</p>
                <span className="text-sm font-medium text-slate-500 sm:text-right">{item.period}</span>
              </div>
            </AccordionTrigger>
            <AccordionContent className="px-6 sm:px-7">
              <Separator />
              <div className="grid gap-7 pt-6 lg:grid-cols-[minmax(0,1.4fr)_minmax(14rem,0.6fr)]">
                <div><p className="text-sm leading-7 text-slate-600 sm:hidden">{item.summary}</p><ul className="space-y-3 text-sm leading-6 text-slate-700 sm:mt-0">{item.responsibilities.map((responsibility) => <li key={responsibility} className="flex gap-3"><Check className="mt-0.5 size-4 shrink-0 text-[#243b6b]" aria-hidden="true" />{responsibility}</li>)}</ul></div>
                <div><p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">Capabilities</p><div className="mt-3 flex flex-wrap gap-2">{item.capabilities.map((capability) => <Badge key={capability} variant="outline">{capability}</Badge>)}</div></div>
              </div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Section>
  );
}
