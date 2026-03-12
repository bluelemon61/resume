import type { ReactNode } from "react";

export function SectionCard({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-soft print:rounded-none print:border print:border-slate-300 print:p-4 print:shadow-none">
      <h2 className="mb-4 text-xl font-semibold tracking-tight text-slate-900 print:mb-3 print:text-lg">
        {title}
      </h2>
      {children}
    </section>
  );
}
