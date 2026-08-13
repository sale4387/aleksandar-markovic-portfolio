import { Button } from "@/components/ui/button";
import { portfolio } from "@/data/portfolio";

export function Navigation() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#cbd5e1]/90 bg-[#dfe7f0]/92 px-6 backdrop-blur-md sm:px-8">
      <div className="mx-auto flex h-16 max-w-[1180px] items-center justify-between gap-6">
        <a href="#about" className="shrink-0 text-sm font-semibold tracking-tight text-slate-950">Aleksandar Marković</a>
        <nav aria-label="Main navigation" className="overflow-x-auto">
          <ul className="flex items-center gap-5 whitespace-nowrap text-sm font-medium text-slate-600 lg:gap-6">
            {portfolio.navigation.map((item) => <li key={item.href}>{item.href === "#contact" ? <Button asChild size="sm"><a href={item.href}>{item.label}</a></Button> : <a className="transition-colors hover:text-slate-950" href={item.href}>{item.label}</a>}</li>)}
          </ul>
        </nav>
      </div>
    </header>
  );
}
