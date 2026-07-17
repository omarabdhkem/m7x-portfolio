import { SectionShell } from "@/components/section-shell";
import { Bot, Layers3, Palette, ShieldCheck } from "lucide-react";

const principles = [
  {
    title: "Product Thinking",
    description: "Every interface starts from the user's goal and ends in a fast, polished path to value.",
    icon: Layers3,
  },
  {
    title: "AI Acceleration",
    description: "I design intelligent workflows that feel practical, human and useful from the first click.",
    icon: Bot,
  },
  {
    title: "Visual Systems",
    description: "Brand, motion and interaction details work together so products feel memorable.",
    icon: Palette,
  },
  {
    title: "Production Quality",
    description: "Clean architecture, accessible structure and reliable delivery are part of the design.",
    icon: ShieldCheck,
  },
];

export function About() {
  return (
    <SectionShell id="about" eyebrow="About M7x" title={<>Building sharp systems for ambitious ideas.</>} className="-mt-10">
      <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
        <p className="max-w-xl text-lg leading-8 text-white/68">
          M7x blends engineering, interface design and AI experimentation to turn raw ideas into digital products with a cinematic edge. The focus is simple: build fast, make it beautiful, keep it scalable, and leave every detail feeling intentional.
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          {principles.map(({ title, description, icon: Icon }) => (
            <article key={title} className="rounded-xl border border-white/10 bg-white/[0.035] p-5">
              <Icon className="mb-4 size-7 text-cyan-300" />
              <h3 className="font-display text-xl font-bold">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-white/58">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}
