import Link from "next/link";
import type { Lang } from "@/lib/i18n";
import { languages } from "@/lib/i18n";

const LanguageText: Record<Lang, string> = {
  ko: "한국어",
  en: "English",
  ja: "日本語",
};

export function LanguageSwitcher({ currentLang }: { currentLang: Lang }) {
  return (
    <div className="flex gap-2">
      {languages.map((lang) => (
        <Link
          key={lang}
          href={`/${lang}/`}
          className={`rounded-full px-3 py-1.5 text-xs font-semibold transition ${
            currentLang === lang
              ? "bg-slate-400 text-white"
              : "bg-slate-100 text-slate-600 hover:bg-slate-200"
          }`}
        >
          {LanguageText[lang]}
        </Link>
      ))}
    </div>
  );
}
