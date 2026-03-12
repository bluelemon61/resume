import type { ReactNode } from "react";
import { languages, isLang, type Lang } from "@/lib/i18n";
import { notFound } from "next/navigation";

export function generateStaticParams() {
  return languages.map((lang) => ({ lang }));
}

export const dynamicParams = false;

function getLangFontClass(lang: Lang) {
  switch (lang) {
    case "ko":
      return "font-lang-ko";
    case "ja":
      return "font-lang-ja";
    case "en":
    default:
      return "font-lang-en";
  }
}

export default async function LangLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (!isLang(lang)) {
    notFound();
  }

  return <div className={getLangFontClass(lang)}>{children}</div>;
}
