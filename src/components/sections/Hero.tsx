import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { portfolio } from "@/data/portfolio";

export function Hero() {
  const { person } = portfolio;
  return (
    <section id="about" className="scroll-mt-20 overflow-hidden rounded-[28px] border border-[#cbd5e1] bg-[radial-gradient(circle_at_82%_18%,rgba(190,206,227,0.65),transparent_30%),radial-gradient(circle_at_12%_84%,rgba(225,233,244,0.88),transparent_25%),linear-gradient(135deg,#ffffff,#f1f5f9)] px-6 py-16 shadow-[0_12px_30px_rgba(15,23,42,0.05)] sm:px-8 sm:py-20 lg:px-12 lg:py-24">
      <div className="max-w-4xl">
        <p className="flex items-center gap-2 text-sm font-medium text-slate-600"><MapPin className="size-4 text-[#243b6b]" aria-hidden="true" />{person.location}</p>
        <h1 className="mt-6 max-w-3xl text-5xl font-semibold tracking-[-0.06em] text-[#07111f] sm:text-6xl lg:text-7xl">{person.name}</h1>
        <p className="mt-7 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl">{person.summary}</p>
        <div className="mt-9 flex flex-wrap gap-3">
          <Button asChild size="lg"><a href="#contact">Let&apos;s Connect</a></Button>
          <Button asChild variant="outline" size="lg"><a href="#projects">View AI Projects</a></Button>
        </div>
      </div>
    </section>
  );
}
