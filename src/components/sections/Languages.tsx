import { SectionHeading } from "@/components/ui/SectionHeading";
import { portfolio } from "@/data/portfolio";
import { Section } from "./Section";

/* Local SVG flag assets use native images for the static export. */
/* eslint-disable @next/next/no-img-element */

const languageMeta: Record<string, { flag: string; code: string }> = {
  Serbian: { flag: "/images/flags/rs.svg", code: "RS" },
  English: { flag: "/images/flags/gb.svg", code: "GB" },
  Dutch: { flag: "/images/flags/nl.svg", code: "NL" },
  Spanish: { flag: "/images/flags/es.svg", code: "ES" },
  German: { flag: "/images/flags/de.svg", code: "DE" },
};

export function Languages() {
  return (
    <Section id="languages" className="bg-[#f8fafc]">
      <SectionHeading eyebrow="Communication" title="Languages" description="Working across languages, cultures, and international teams." />
      <dl className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-5">
        {portfolio.languages.map((language) => {
          const meta = languageMeta[language.name];
          return <div key={language.name} className="flex items-center gap-3 rounded-xl border border-slate-300 bg-[#f6f8fb] px-4 py-3 shadow-sm"><span className="grid size-6 shrink-0 overflow-hidden rounded-sm border border-slate-300 bg-slate-100"><img src={meta?.flag} alt="" className="size-full object-cover" /></span><dt className="text-sm font-semibold text-[#243b6b]">{language.name}</dt><dd className="ml-auto text-sm font-medium text-slate-600">{language.level}</dd></div>;
        })}
      </dl>
    </Section>
  );
}
