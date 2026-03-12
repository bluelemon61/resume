import Link from "next/link";
import type { Lang } from "@/lib/i18n";
import { languages } from "@/lib/i18n";

export function LanguageSwitcher({ currentLang }: { currentLang: Lang }) {
  return (
    <div className="flex gap-2">
      {languages.map((lang) => (
        <Link
          key={lang}
          href={`/${lang}/`}
          className={`rounded-full px-3 py-1.5 text-xs font-semibold transition ${
            currentLang === lang
              ? "bg-slate-300 text-white"
              : "bg-slate-100 text-slate-600 hover:bg-slate-200"
          }`}
        >
          {lang.toUpperCase()}
        </Link>
      ))}
    </div>
  );
}
