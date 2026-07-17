"use client";

import { skills } from "@/lib/portfolio-data";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function SkillsOrbit() {
  return (
    <section id="skills" className="mx-auto w-full max-w-[1560px] scroll-mt-12 px-3">
      <div className="glass grid min-h-[370px] overflow-hidden rounded-2xl p-6 sm:p-8 lg:grid-cols-[310px_1fr]">
        <div className="relative z-10">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-purple-300">Technologies</p>
          <h2 className="font-display mt-3 text-4xl font-bold">
            I <span className="neon-text">Work With</span>
          </h2>
          <p className="mt-4 max-w-xs leading-7 text-white/62">
            I use modern technologies to build fast, secure and scalable solutions.
          </p>
          <a href="#contact" className="mt-7 inline-flex h-11 items-center gap-3 rounded-lg border border-white/15 px-5 text-xs font-bold uppercase tracking-[0.14em] transition hover:border-cyan-300 hover:text-cyan-200">
            Explore All Skills <ArrowRight className="size-4" />
          </a>
        </div>

        <div className="relative mt-14 min-h-[300px] lg:mt-0">
          <div className="absolute left-1/2 top-1/2 size-56 -translate-x-1/2 -translate-y-1/2 rounded-full border border-purple-400/30 bg-[#06101f]/80 shadow-[0_0_62px_rgba(124,60,255,0.3)]" />
          <div className="font-display neon-text absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 text-5xl font-bold">
            M7x
          </div>
          {[0, 1, 2].map((ring) => (
            <div
              key={ring}
              className="orbital-ring absolute left-1/2 top-1/2 rounded-full"
              style={{
                width: `${420 + ring * 180}px`,
                height: `${135 + ring * 62}px`,
                transform: "translate(-50%, -50%) rotate(-8deg)",
              }}
            />
          ))}
          {skills.map(({ name, icon: Icon }, index) => {
            const angle = (index / skills.length) * Math.PI * 2 - Math.PI / 2;
            const x = Math.cos(angle) * 340;
            const y = Math.sin(angle) * 120;
            return (
              <motion.div
                key={name}
                initial={{ opacity: 0, scale: 0.85 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                className="absolute left-1/2 top-1/2 flex items-center gap-3 rounded-full border border-white/10 bg-black/45 px-4 py-3 shadow-[0_0_26px_rgba(0,229,255,0.12)]"
                style={{ transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))` }}
              >
                <span className="grid size-11 place-items-center rounded-full bg-cyan-300/10 text-cyan-200">
                  <Icon className="size-6" />
                </span>
                <span className="whitespace-nowrap text-sm font-medium text-white/82">{name}</span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
