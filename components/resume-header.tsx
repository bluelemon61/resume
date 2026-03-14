import Link from "next/link";
import type { Lang } from "@/lib/i18n";
import type { ResumeContent } from "@/content/resume";
import { LanguageSwitcher } from "@/components/language-switcher";

export function ResumeHeader({
  lang,
  content,
}: {
  lang: Lang;
  content: ResumeContent;
}) {
  return (
    <header className="mb-8 rounded-4xl border border-slate-200 bg-white p-8 shadow-soft print:mb-4 print:rounded-none print:border print:p-5 print:shadow-none">
      <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
        <div className="max-w-2xl">
          <p className="text-md font-bold uppercase tracking-[0.25em] text-slate-500">
            {content.nav.profile}
          </p>
          <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-950 md:text-5xl">
            {content.hero.name}
          </h1>
          <p className="mt-3 text-lg text-slate-600">{content.hero.role}</p>
          <p className="mt-5 text-sm leading-7 text-slate-600">
            {content.hero.summary}
          </p>
        </div>

        <div className="space-y-4 text-sm text-slate-600 md:text-right">
          <div className="no-print md:flex md:justify-end">
            <LanguageSwitcher currentLang={lang} />
          </div>
          <p>{content.hero.email}</p>
          <p>{content.hero.phone}</p>
          <p>{content.hero.birth}</p>
          <p>{content.hero.address}</p>
          <a
            href={content.hero.github}
            target="_blank"
            rel="noreferrer"
            className="inline-block rounded-full font-medium bg-black px-4 py-2 text-sm text-white underline underline-offset-4 no-print"
          >
            GitHub
          </a>
          <a
            href={content.hero.github}
            target="_blank"
            rel="noreferrer"
            className="inline-block font-medium py-2 text-sm text-black underline underline-offset-4 print-only"
          >
            GitHub: {content.hero.github}
          </a>
          <div className="no-print">
            <Link
              href={`/${lang}/portfolio/`}
              className="inline-flex rounded-full bg-gray-600 px-4 py-2 text-sm font-medium text-white transition hover:opacity-90"
            >
              {content.nav.portfolio}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
