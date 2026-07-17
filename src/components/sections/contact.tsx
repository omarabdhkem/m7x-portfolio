import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";

export function Contact() {
  return (
    <section id="contact" className="mx-auto w-full max-w-[1560px] scroll-mt-12 px-3">
      <div className="glass relative grid overflow-hidden rounded-2xl p-7 sm:p-9 lg:grid-cols-[0.7fr_1fr]">
        <div className="relative z-10">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-purple-300">Let&apos;s Work Together</p>
          <h2 className="font-display mt-3 max-w-md text-4xl font-bold sm:text-5xl">
            Have a <span className="neon-text">project</span> in mind?
          </h2>
        </div>
        <div className="relative z-10 mt-8 lg:mt-0">
          <p className="max-w-xl leading-7 text-white/65">
            I&apos;m always open to discussing new projects, creative ideas or opportunities to be part of your vision.
          </p>
          <a href="mailto:hello@m7x.dev" className="mt-7 inline-block">
            <Button>
              <Mail className="size-4" />
              Start A Conversation
              <ArrowRight className="size-4" />
            </Button>
          </a>
        </div>
        <div className="pointer-events-none absolute bottom-0 right-0 h-44 w-2/3 opacity-80">
          <div className="absolute bottom-0 left-0 right-0 h-px bg-cyan-300/40" />
          {Array.from({ length: 18 }).map((_, index) => (
            <span
              key={index}
              className="absolute bottom-0 h-px origin-left bg-gradient-to-r from-cyan-300/80 to-purple-400/0"
              style={{
                left: `${index * 5.4}%`,
                width: `${28 + (index % 5) * 13}%`,
                transform: `rotate(${-18 - (index % 7) * 4}deg)`,
              }}
            />
          ))}
          <span className="font-display absolute right-16 top-4 rounded border border-cyan-300/30 bg-purple-500/20 px-4 py-2 text-2xl font-bold text-white shadow-[0_0_28px_rgba(168,85,247,0.4)]">
            M7x
          </span>
        </div>
      </div>
    </section>
  );
}
