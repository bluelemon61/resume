import type { ReactNode } from "react";

export function TimelineItem({
  title,
  subtitle,
  meta,
  children,
}: {
  title: string;
  subtitle?: string;
  meta?: string;
  children?: ReactNode;
}) {
  return (
    <div className="rounded-3xl bg-slate-50 p-5">
      <div className="flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
        <div>
          <h3 className="font-semibold text-slate-900">{title}</h3>
          {subtitle && (
            <p className="mt-1 text-sm text-slate-600">{subtitle}</p>
          )}
        </div>
        {meta && <p className="text-sm text-slate-500 md:text-right">{meta}</p>}
      </div>
      {children}
    </div>
  );
}
