import { cn } from "@/lib/utils";

/* Local brand image assets use native images for the static export. */
/* eslint-disable @next/next/no-img-element */

type CompanyLogoProps = { company: string; className?: string };

const companyLogos: Record<string, { label: string; color: string; src?: string; wordmark?: boolean; trim?: number }> = {
  MessageBird: { label: "MessageBird", color: "text-slate-950", src: "/images/companies/bird.png", trim: 4.1 },
  "Bird (formerly MessageBird)": { label: "Bird", color: "text-slate-950", src: "/images/companies/bird.png", trim: 4.1 },
  Twilio: { label: "Twilio", color: "text-rose-500", src: "/images/companies/twilio.png" },
  Quiubas: { label: "Quiubas", color: "text-slate-700", src: "/images/companies/quiubas.png", trim: 1.12 },
  "Quiubas Mobile": { label: "Quiubas", color: "text-slate-700", src: "/images/companies/quiubas.png", trim: 1.12 },
  TeleSign: { label: "TeleSign", color: "text-indigo-700", src: "/images/companies/telesign-wordmark.png", wordmark: true },
  Infobip: { label: "Infobip", color: "text-orange-500", src: "/images/companies/infobip.png" },
};

export function CompanyLogo({ company, className }: CompanyLogoProps) {
  const logo = companyLogos[company] ?? { label: company, color: "text-[#0f2454]" };
  return (
    <span className={cn("inline-flex h-8 items-center", logo.color, className)}>
      {logo.src && <span className={cn("mr-3 grid shrink-0 place-items-center overflow-hidden", logo.wordmark ? "h-9 w-32" : "size-10 rounded-lg border border-slate-300 bg-white")}><img src={logo.src} alt={`${logo.label} logo`} style={logo.trim ? { transform: `scale(${logo.trim})` } : undefined} className="size-full object-contain" /></span>}
      {!logo.wordmark && <span className="font-semibold tracking-[-0.03em]">{logo.label}</span>}
    </span>
  );
}
