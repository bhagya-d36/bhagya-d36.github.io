import type { ReactNode } from "react";

type SectionProps = {
  id: string;
  label: string;
  title: string;
  children: ReactNode;
};

export default function Section({ id, label, title, children }: SectionProps) {
  return (
    <section id={id} className="scroll-mt-24 border-t border-line py-24 first:border-t-0 first:pt-0 md:py-32">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-[160px_1fr] md:gap-16">
        <div className="md:sticky md:top-32 md:self-start">
          <span className="mono-label">{label}</span>
        </div>
        <div className="min-w-0">
          <h2 className="mb-8 text-2xl font-semibold text-text md:text-3xl">{title}</h2>
          {children}
        </div>
      </div>
    </section>
  );
}
