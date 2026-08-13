import { SectionHeading } from "@/components/ui/SectionHeading";
import { portfolio } from "@/data/portfolio";
import { HobbyCarousel } from "./HobbyCarousel";
import { Section } from "./Section";
import { WoodworkingGallery } from "./WoodworkingGallery";

export function Hobbies() {
  return (
    <Section id="interests" className="bg-[#f8fafc]">
      <SectionHeading eyebrow="Outside work" title="Hobbies & Interests" description="The hands-on and under-water pursuits that keep me curious." />
      <div className="mt-14 space-y-12 lg:mt-16 lg:space-y-16">
        {portfolio.hobbies.map((hobby, index) => (
          <article key={hobby.title} className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-14 ${index % 2 ? "lg:[&>*:first-child]:order-2" : ""}`}>
            {hobby.title === "DIY & Woodworking" ? <WoodworkingGallery hobby={hobby} /> : <HobbyCarousel hobby={hobby} />}
            <div className="max-w-sm px-1 lg:px-0">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#243b6b]">{hobby.label}</p>
              <h3 className="mt-4 text-3xl font-semibold tracking-tight text-slate-950">{hobby.title}</h3>
              <p className="mt-5 text-base leading-7 text-slate-600">{hobby.description}</p>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}
