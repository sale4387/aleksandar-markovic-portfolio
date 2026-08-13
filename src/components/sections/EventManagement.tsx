import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { portfolio } from "@/data/portfolio";
import { Section } from "./Section";

export function EventManagement() {
  return (
    <Section id="events" className="bg-[#ccd7e4]">
      <SectionHeading eyebrow="Experiences" title="Event Management" description="Community, learning, and delivery experiences brought to life through clear organisation." />
      <div className="mt-10 grid gap-4 md:grid-cols-2">
        {portfolio.events.map((item) => <Card key={item.title}><CardHeader className="p-6 pb-0"><p className="text-sm font-medium text-[#243b6b]">{item.year} · {item.focus}</p><CardTitle className="mt-3 text-lg">{item.title}</CardTitle></CardHeader><CardContent className="p-6 pt-4"><p className="text-sm leading-7 text-slate-600">{item.description}</p></CardContent></Card>)}
      </div>
    </Section>
  );
}
