import { Navigation } from "@/components/Navigation";
import { ContactFooter } from "@/components/sections/ContactFooter";
import { CoreSkills } from "@/components/sections/CoreSkills";
import { EducationTeaching } from "@/components/sections/EducationTeaching";
import { EventManagement } from "@/components/sections/EventManagement";
import { Experience } from "@/components/sections/Experience";
import { Hero } from "@/components/sections/Hero";
import { Hobbies } from "@/components/sections/Hobbies";
import { Languages } from "@/components/sections/Languages";
import { Projects } from "@/components/sections/Projects";

export default function Home() {
  return <><Navigation /><main className="mx-auto max-w-[1180px] space-y-3 px-3 py-3 sm:px-4"><Hero /><CoreSkills /><Experience /><Projects /><EducationTeaching /><EventManagement /><Hobbies /><Languages /></main><ContactFooter /></>;
}
