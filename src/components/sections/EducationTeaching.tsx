import { SectionHeading } from "@/components/ui/SectionHeading";
import { portfolio } from "@/data/portfolio";
import { Section } from "./Section";

export function EducationTeaching() {
  const academicEducation = portfolio.education.slice(0, 2);
  const teaching = portfolio.education[2];

  return (
    <Section id="education" className="bg-[#d6dfe9]">
      <SectionHeading eyebrow="Learning & sharing" title="Education & Teaching" description="Academic training combined with practical, student-focused teaching." />
      <div className="mt-12 grid gap-5 lg:mt-14 md:grid-cols-2">
        <article className="rounded-2xl border border-slate-200 bg-white p-7 shadow-[0_12px_30px_rgba(15,23,42,0.04)]">
          <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#243b6b]">Education</p>
          <div className="mt-6 space-y-6">
            {academicEducation.map((item) => <div key={item.title}><h3 className="text-lg font-semibold tracking-tight text-slate-950">{item.title}</h3><p className="mt-2 text-sm font-medium text-[#243b6b]">{item.detail}</p><p className="mt-3 text-sm leading-6 text-slate-600">{item.description}</p></div>)}
          </div>
        </article>
        {teaching && <article className="rounded-2xl border border-slate-200 bg-white p-7 shadow-[0_12px_30px_rgba(15,23,42,0.04)]"><p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#243b6b]">Practical teaching</p><h3 className="mt-6 text-lg font-semibold tracking-tight text-slate-950">{teaching.title}</h3><p className="mt-2 text-sm font-medium text-[#243b6b]">{teaching.detail}</p><p className="mt-4 text-sm leading-7 text-slate-600">{teaching.description}</p></article>}
      </div>
    </Section>
  );
}
