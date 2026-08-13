"use client";

import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { portfolio, type Project } from "@/data/portfolio";
import { ProjectPreview } from "./ProjectPreview";
import ProductStoryModal from "@/components/product-story/ProductStoryModal";
import { Section } from "./Section";

const accentStyles = {
  blue: "from-slate-100 to-[#dce5f4]",
  violet: "from-[#eef0f8] to-[#d9deef]",
  emerald: "from-[#eef5f3] to-[#d8e8e3]",
  amber: "from-[#f7f3ec] to-[#ebe0cc]",
  rose: "from-[#f6f0f2] to-[#eadadd]",
  cyan: "from-[#edf4f5] to-[#d7e5e8]",
} as const;

function ProjectCard({ project, index, onOpen }: { project: Project; index: number; onOpen: (project: Project) => void }) {
  const isReversed = index % 2 === 1;
  return (
    <Card className={`group grid overflow-hidden rounded-3xl shadow-[0_18px_45px_rgba(15,23,42,0.06)] transition-shadow hover:shadow-[0_22px_55px_rgba(15,23,42,0.12)] ${isReversed ? "lg:grid-cols-[0.75fr_1.25fr] lg:[&>*:first-child]:order-2" : "lg:grid-cols-[1.25fr_0.75fr]"}`}>
      <ProjectPreview project={project} accentClass={accentStyles[project.accent]} />
      <CardContent className="flex min-h-[25rem] flex-col p-7 sm:p-9 lg:p-10">
        <div className="flex items-center justify-between gap-4">
          <Badge variant={project.status === "Live project" ? "success" : project.status === "Work in progress" ? "blue" : "warning"}><span className={`mr-2 size-1.5 rounded-full ${project.status === "Live project" ? "bg-green-600" : project.status === "Work in progress" ? "bg-blue-600" : "bg-amber-600"}`} />{project.status}</Badge>
          <span className="text-xs font-semibold tracking-[0.16em] text-slate-400">0{index + 1}</span>
        </div>
        <h3 className="mt-7 max-w-md text-2xl font-semibold tracking-[-0.035em] text-slate-950 sm:text-3xl">{project.title}</h3>
        <p className="mt-3 text-sm font-medium leading-6 text-[#243b6b]">{project.role}</p>
        <p className="mt-5 max-w-md text-base leading-7 text-slate-600">{project.shortDescription}</p>
        <div className="mt-6 border-l-2 border-[#b8c6dd] pl-4"><p className="text-xs font-semibold uppercase tracking-[0.15em] text-[#243b6b]">Product outcome</p><p className="mt-2 text-sm leading-6 text-slate-600">{project.outcome}</p></div>
        <div className="mt-auto flex flex-wrap gap-2 pt-7">
          {project.tags.map((tag) => <Badge key={tag} variant="outline">{tag}</Badge>)}
        </div>
        <Button type="button" variant="outline" onClick={() => onOpen(project)} className="mt-7 w-full justify-between sm:w-auto">View product story <ArrowUpRight className="size-4" /></Button>
      </CardContent>
    </Card>
  );
}

export function Projects() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);
  return (
    <>
      <Section id="projects" className="bg-[radial-gradient(circle_at_94%_5%,rgba(203,216,235,0.7),transparent_24%),#f8fafc]">
        <SectionHeading eyebrow="Selected work" title="AI & Tech Projects" description="Product-minded AI tools designed around clear decisions, useful workflows, and practical outcomes." />
        <div className="mt-10 space-y-7 lg:mt-12 lg:space-y-8">
          {portfolio.projects.map((project, index) => <ProjectCard key={project.id} project={project} index={index} onOpen={setActiveProject} />)}
        </div>
      </Section>
      <ProductStoryModal project={activeProject} onClose={() => setActiveProject(null)} />
    </>
  );
}
