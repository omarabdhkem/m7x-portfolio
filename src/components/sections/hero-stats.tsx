import { heroStats } from "@/lib/portfolio-data";

export function HeroStats() {
  return (
    <div className="grid grid-cols-2 divide-x divide-white/10 md:grid-cols-4">
      {heroStats.map(({ label, value, icon: Icon }) => (
        <div key={label} className="flex items-center gap-5 px-5 py-5 sm:px-8">
          <span className="grid size-12 shrink-0 place-items-center rounded-full bg-purple-400/10 text-purple-200 shadow-[0_0_28px_rgba(168,85,247,0.18)]">
            <Icon className="size-7" />
          </span>
          <span>
            <strong className="font-display block text-2xl text-white sm:text-3xl">{value}</strong>
            <span className="text-xs text-white/58 sm:text-sm">{label}</span>
          </span>
        </div>
      ))}
    </div>
  );
}
