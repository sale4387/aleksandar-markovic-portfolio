import { Bot, BriefcaseBusiness, Handshake, Lightbulb, Settings2, Target } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { portfolio } from "@/data/portfolio";
import { Section } from "./Section";

const skillIcons = [Handshake, BriefcaseBusiness, Settings2, Lightbulb, Target, Bot];
const accentStyles = ["bg-slate-200 text-[#243b6b]", "bg-[#e8ebf4] text-[#343b66]", "bg-[#e6eff0] text-[#28505a]", "bg-[#f1ebdf] text-[#6b5731]", "bg-[#f1e7e9] text-[#734254]", "bg-[#e7efea] text-[#315b4b]"];

export function CoreSkills() {
  return (
    <Section id="skills" className="bg-[#ccd7e4]">
      <SectionHeading eyebrow="Capabilities" title="Core Skills" description="A capability-led view of the work I do — grounded in transferable skills, not industries." />
      <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3 lg:gap-4">
        {portfolio.skills.map((skill, index) => {
          const Icon = skillIcons[index];
          return (
            <Card key={skill.title} className="group transition-all duration-200 hover:-translate-y-0.5 hover:border-[#b8c6dd] hover:shadow-[0_16px_40px_rgba(15,23,42,0.07)]">
              <CardHeader className="p-4 pb-0"><span className={`grid size-9 place-items-center rounded-lg ${accentStyles[index]}`}><Icon className="size-[18px]" aria-hidden="true" /></span><CardTitle className="mt-4 text-[15px]">{skill.title}</CardTitle></CardHeader>
              <CardContent className="p-4 pt-2.5"><p className="text-sm leading-6 text-slate-600">{skill.description}</p></CardContent>
            </Card>
          );
        })}
      </div>
    </Section>
  );
}
