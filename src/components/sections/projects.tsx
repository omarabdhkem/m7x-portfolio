"use client";

import { SectionShell } from "@/components/section-shell";
import { projects } from "@/lib/portfolio-data";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function Projects() {
  return (
    <SectionShell id="projects" eyebrow="Featured Work" title={<>Projects I&apos;m <span className="neon-text">Proud</span> Of</>}>
      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {projects.map((project, index) => (
          <motion.article
            key={project.title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ delay: index * 0.08, duration: 0.55 }}
            className="group overflow-hidden rounded-xl border border-cyan-300/20 bg-[#060914]/78 p-4 transition duration-300 hover:-translate-y-1 hover:border-purple-300/60 hover:shadow-[0_0_38px_rgba(168,85,247,0.16)]"
          >
            <div className="project-art relative h-44 overflow-hidden rounded-lg border border-white/10">
              <span className="absolute left-4 top-4 rounded border border-white/10 bg-black/30 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.14em] text-white/75">
                {project.category}
              </span>
              <div className="absolute inset-x-8 bottom-8 h-20 rounded-[50%] border border-cyan-300/20 shadow-[0_0_48px_rgba(0,229,255,0.28)]" />
              <div className="absolute bottom-7 left-8 right-8 h-16 rounded-xl border border-purple-300/20 bg-black/35" />
              <div className="absolute bottom-11 left-12 h-2 w-24 rounded-full bg-cyan-300/70" />
              <div className="absolute bottom-16 left-12 h-2 w-32 rounded-full bg-purple-300/40" />
              <div className="absolute right-10 top-14 size-20 rounded-full border border-cyan-300/30 bg-cyan-300/10 shadow-[0_0_32px_rgba(0,229,255,0.18)]" />
            </div>
            <div className="pt-5">
              <h3 className="font-display text-2xl font-bold">{project.title}</h3>
              <p className="mt-2 min-h-12 text-sm leading-6 text-white/62">{project.description}</p>
              <div className="mt-5 flex items-center justify-between">
                <div className="flex gap-2">
                  {project.stack.slice(0, 4).map((item) => (
                    <span key={item} className="grid size-8 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-[10px] font-bold text-cyan-200">
                      {item.slice(0, 2)}
                    </span>
                  ))}
                </div>
                <a href="#contact" aria-label={`Discuss ${project.title}`} className="grid size-10 place-items-center rounded-full border border-white/15 transition group-hover:border-cyan-300 group-hover:text-cyan-200">
                  <ArrowRight className="size-4" />
                </a>
              </div>
            </div>
          </motion.article>
        ))}
      </div>
    </SectionShell>
  );
}
