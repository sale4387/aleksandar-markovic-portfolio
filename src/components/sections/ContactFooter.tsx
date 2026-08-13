import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Mail } from "lucide-react";
import { portfolio } from "@/data/portfolio";

export function ContactFooter() {
  return (
    <footer id="contact" className="scroll-mt-20 mx-3 mb-3 max-w-[1148px] rounded-[28px] bg-[radial-gradient(circle_at_85%_10%,rgba(88,104,132,0.34),transparent_28%),linear-gradient(135deg,#172033,#111827)] px-6 py-14 text-white shadow-[0_14px_32px_rgba(15,23,42,0.12)] sm:mx-4 sm:px-8 sm:py-16 lg:mx-auto lg:px-12">
      <div className="max-w-3xl">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-slate-300">Get in touch</p>
        <h2 className="mt-4 text-4xl font-semibold tracking-[-0.035em] sm:text-5xl">Let&apos;s build something meaningful.</h2>
        <p className="mt-5 max-w-xl text-base leading-7 text-slate-300">Open to relevant professional opportunities, collaboration, and practical product discussions.</p>
        <div className="mt-9 flex flex-wrap gap-3">
          <Button asChild variant="outline" size="lg" className="border-slate-400 bg-transparent text-white shadow-none hover:border-white hover:bg-white/10 hover:text-white"><a href={`mailto:${portfolio.person.email}`}><Mail className="size-4" aria-hidden="true" />Email</a></Button>
          <Button asChild variant="outline" size="lg" className="border-slate-400 bg-transparent text-white shadow-none hover:border-white hover:bg-white/10 hover:text-white"><a href={portfolio.person.linkedIn} target="_blank" rel="noreferrer">LinkedIn</a></Button>
        </div>
        <Separator className="mt-14 bg-white/15" />
        <p className="mt-6 text-sm text-slate-400">{portfolio.footer}</p>
      </div>
    </footer>
  );
}
