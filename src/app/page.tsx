import { About } from "@/components/sections/about";
import { Contact } from "@/components/sections/contact";
import { Experience } from "@/components/sections/experience";
import { Hero } from "@/components/sections/hero";
import { Projects } from "@/components/sections/projects";
import { SkillsOrbit } from "@/components/sections/skills-orbit";
import { SiteFooter } from "@/components/site-footer";
import { SmoothScroll } from "@/components/smooth-scroll";

export default function Home() {
  return (
    <SmoothScroll>
      <main className="relative isolate min-h-screen overflow-hidden px-3 py-4 sm:px-5 lg:px-6">
        <div className="pointer-events-none fixed inset-0 -z-20 bg-[radial-gradient(circle_at_center,rgba(0,229,255,0.06),transparent_45%)]" />
        <div className="pointer-events-none fixed inset-x-0 top-0 -z-10 h-px bg-gradient-to-r from-transparent via-cyan-300/70 to-transparent" />
        <Hero />
        <About />
        <Projects />
        <SkillsOrbit />
        <Experience />
        <Contact />
        <SiteFooter />
      </main>
    </SmoothScroll>
  );
}
