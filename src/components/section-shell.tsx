import { cn } from "@/lib/utils";

export function SectionShell({
  id,
  eyebrow,
  title,
  children,
  className,
}: {
  id: string;
  eyebrow: string;
  title: React.ReactNode;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <section id={id} className={cn("mx-auto w-full max-w-[1560px] scroll-mt-12 px-3", className)}>
      <div className="glass rounded-2xl p-6 sm:p-8">
        <div className="mb-7">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-purple-300">{eyebrow}</p>
          <h2 className="font-display mt-2 text-3xl font-bold tracking-normal text-white sm:text-4xl">
            {title}
          </h2>
        </div>
        {children}
      </div>
    </section>
  );
}
