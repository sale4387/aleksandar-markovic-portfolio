type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  dark?: boolean;
};

export function SectionHeading({ eyebrow, title, description, dark = false }: SectionHeadingProps) {
  return (
    <div className="max-w-3xl">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#243b6b]">{eyebrow}</p>
      <h2 className={`text-3xl font-semibold tracking-[-0.035em] sm:text-4xl ${dark ? "text-white" : "text-slate-900"}`}>{title}</h2>
      {description && <p className={`mt-4 text-base leading-7 ${dark ? "text-slate-300" : "text-slate-600"}`}>{description}</p>}
    </div>
  );
}
