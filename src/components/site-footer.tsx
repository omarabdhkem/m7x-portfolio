import { ArrowUp, Code2 } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="mx-auto flex w-full max-w-7xl flex-col gap-5 px-2 py-7 text-sm text-white/55 sm:flex-row sm:items-center sm:justify-between">
      <a className="font-display text-4xl font-bold text-purple-300" href="#home">
        M7x
      </a>
      <p>© 2025 M7x. All rights reserved.</p>
      <p className="flex items-center gap-3">
        Crafting the future, one line of code at a time.
        <Code2 className="size-4 text-cyan-300" />
      </p>
      <a
        href="#home"
        aria-label="Back to top"
        className="grid size-11 place-items-center rounded-full border border-white/15 bg-white/[0.03] text-white transition hover:border-cyan-300 hover:text-cyan-200"
      >
        <ArrowUp className="size-4" />
      </a>
    </footer>
  );
}
