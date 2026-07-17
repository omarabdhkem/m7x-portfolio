"use client";

import { timeline } from "@/lib/portfolio-data";
import { motion } from "framer-motion";

export function Experience() {
  return (
    <section id="experience" className="mx-auto w-full max-w-[1560px] scroll-mt-12 px-3">
      <div className="glass overflow-hidden rounded-2xl p-6 sm:p-8">
        <div className="grid gap-8 lg:grid-cols-[260px_1fr]">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-purple-300">My Journey</p>
            <h2 className="font-display mt-3 text-4xl font-bold text-white">Experience Timeline</h2>
          </div>
          <div className="relative grid gap-4 md:grid-cols-4">
            <div className="absolute left-0 right-0 top-[calc(100%-12px)] hidden h-px bg-gradient-to-r from-purple-400 via-cyan-300 to-purple-400 md:block" />
            {timeline.map(({ year, title, description, icon: Icon }, index) => (
              <motion.article
                key={year}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.08 }}
                className="relative rounded-xl border border-purple-300/30 bg-white/[0.035] p-5"
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="font-display text-2xl font-bold text-purple-200">{year}</p>
                    <h3 className="mt-2 font-bold text-white">{title}</h3>
                  </div>
                  <Icon className="size-9 text-cyan-300" />
                </div>
                <p className="mt-3 text-sm leading-6 text-white/58">{description}</p>
                <span className="absolute -bottom-4 left-1/2 hidden size-5 -translate-x-1/2 rounded-full border-4 border-[#070918] bg-cyan-300 shadow-[0_0_20px_rgba(0,229,255,0.8)] md:block" />
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
