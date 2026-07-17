"use client";

import { Button } from "@/components/ui/button";
import { impactStats, navItems, socialLinks } from "@/lib/portfolio-data";
import { motion } from "framer-motion";
import gsap from "gsap";
import {
  ArrowRight,
  BriefcaseBusiness,
  Code2,
  Download,
  Home,
  Mail,
  Menu,
  UserRound,
} from "lucide-react";
import dynamic from "next/dynamic";
import { useEffect, useRef } from "react";
import { HeroStats } from "./hero-stats";

const ProceduralWorldMap = dynamic(
  () => import("@/components/procedural-world-map").then((mod) => mod.ProceduralWorldMap),
  { ssr: false },
);

const sideIcons = [Home, UserRound, BriefcaseBusiness, Code2, Mail];

export function Hero() {
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!headingRef.current || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    gsap.fromTo(
      headingRef.current.querySelectorAll("span"),
      { yPercent: 108, opacity: 0 },
      { yPercent: 0, opacity: 1, stagger: 0.11, duration: 1.05, ease: "power4.out" },
    );
  }, []);

  return (
    <section id="home" className="relative mx-auto min-h-[980px] w-full max-w-[1560px] overflow-hidden rounded-2xl border border-white/10 bg-[#02040d]/80 lg:min-h-[880px]">
      <div className="absolute inset-0 opacity-70">
        <ProceduralWorldMap />
      </div>
      <div className="grid-floor pointer-events-none absolute inset-x-0 bottom-0 h-72 opacity-55" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(2,3,10,0.98)_0%,rgba(2,3,10,0.74)_28%,rgba(2,3,10,0.18)_58%,rgba(2,3,10,0.66)_100%)]" />

      <header className="relative z-20 flex items-center justify-between px-5 py-5 lg:px-8">
        <a href="#home" className="font-display text-4xl font-bold tracking-tight text-white lg:text-5xl">
          M<span className="text-purple-300">7x</span>
        </a>
        <nav className="hidden items-center gap-9 text-[11px] font-bold uppercase tracking-[0.16em] text-white/80 lg:flex">
          {navItems.map((item, index) => (
            <a key={item.href} href={item.href} className="group relative transition hover:text-cyan-200">
              {item.label}
              {index === 0 ? (
                <span className="absolute -bottom-4 left-1/2 h-1 w-11 -translate-x-1/2 rounded-full bg-gradient-to-r from-cyan-300 to-purple-400 shadow-[0_0_18px_rgba(168,85,247,0.9)]" />
              ) : null}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden h-12 items-center gap-4 rounded-2xl border border-cyan-300/50 px-6 text-xs font-bold uppercase tracking-[0.14em] shadow-[0_0_28px_rgba(0,229,255,0.12)] transition hover:bg-cyan-300/10 sm:flex"
          >
            Let&apos;s Talk <ArrowRight className="size-4" />
          </a>
          <button aria-label="Open menu" className="grid size-12 place-items-center rounded-full border border-white/10 bg-white/[0.03]">
            <Menu className="size-5" />
          </button>
        </div>
      </header>

      <aside className="glass absolute left-6 top-36 z-20 hidden w-16 flex-col items-center rounded-[2rem] py-4 lg:flex">
        <span className="mb-5 grid size-8 place-items-center rounded-full border border-purple-400/50 bg-purple-500/20">
          <span className="size-3 rounded-full bg-purple-400 shadow-[0_0_18px_#a855f7]" />
        </span>
        <div className="flex flex-col gap-3">
          {sideIcons.map((Icon, index) => (
            <a key={index} href={navItems[index]?.href ?? "#home"} aria-label={navItems[index]?.label} className="grid size-10 place-items-center rounded-xl text-white/75 transition hover:bg-cyan-300/10 hover:text-cyan-200">
              <Icon className="size-4" />
            </a>
          ))}
        </div>
        <span className="mt-8 [writing-mode:vertical-rl] text-[10px] font-bold uppercase tracking-[0.2em] text-white/55">
          Scroll Down
        </span>
      </aside>

      <div className="relative z-10 grid min-h-[720px] items-center px-6 pb-44 pt-14 sm:px-10 lg:grid-cols-[0.9fr_1.1fr] lg:px-28 lg:pb-32">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-6 inline-flex rounded-md border border-purple-400/60 bg-black/35 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-white"
          >
            Developer • Designer • AI Enthusiast
          </motion.div>
          <h1 ref={headingRef} className="font-display text-5xl font-bold uppercase leading-[0.98] tracking-normal text-white sm:text-7xl lg:text-[5.6rem]">
            <span className="block overflow-hidden">I Build</span>
            <span className="block overflow-hidden">Digital</span>
            <span className="neon-text block overflow-hidden">Experiences</span>
          </h1>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.7 }}
            className="mt-7 max-w-md text-lg leading-8 text-white/72"
          >
            Turning ideas into powerful digital products with code, design and AI technology.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.48, duration: 0.7 }}
            className="mt-9 flex flex-col gap-4 sm:flex-row"
          >
            <a href="#projects">
              <Button>
                Explore My Work <ArrowRight className="size-4" />
              </Button>
            </a>
            <a href="#contact">
              <Button variant="ghost">
                Download CV <Download className="size-4" />
              </Button>
            </a>
          </motion.div>
          <div className="mt-10 flex flex-wrap items-center gap-5 text-xs font-bold uppercase tracking-[0.16em] text-white/45">
            Find me on
            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a key={label} href={href} aria-label={label} className="text-white transition hover:text-cyan-200">
                <Icon className="size-5" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="glass absolute right-5 top-36 z-10 hidden w-32 rounded-lg p-4 text-xs lg:block">
        <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.18em] text-cyan-300">Connected</p>
        <p className="font-display text-xl font-bold">{impactStats[0].value}</p>
        <p className="mt-1 text-[10px] text-white/50">{impactStats[0].label}</p>
        <div className="mt-4 h-9 rounded bg-[linear-gradient(135deg,transparent_0_20%,rgba(0,229,255,.4)_20%_24%,transparent_24%_42%,rgba(168,85,247,.55)_42%_47%,transparent_47%)]" />
      </div>

      <div className="glass absolute bottom-28 left-1/2 z-20 w-[calc(100%-2rem)] max-w-6xl -translate-x-1/2 rounded-2xl">
        <HeroStats />
      </div>
    </section>
  );
}
