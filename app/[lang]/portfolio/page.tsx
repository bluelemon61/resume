import { notFound } from "next/navigation";
import Link from "next/link";
import { Container } from "@/components/container";
import { Footer } from "@/components/footer";
import { LanguageSwitcher } from "@/components/language-switcher";
import { PortfolioCard } from "@/components/portfolio-card";
import { portfolioContent } from "@/content/portfolio";
import { resumeContent } from "@/content/resume";
import { isLang, type Lang } from "@/lib/i18n";

export default async function PortfolioPage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (!isLang(lang)) {
    notFound();
  }

  const currentLang = lang as Lang;
  const content = portfolioContent[currentLang];
  const nav = resumeContent[currentLang].nav;

  return (
    <main className="min-h-screen bg-slate-50 py-10 text-slate-900">
      <Container>
        <header className="mb-8 rounded-[32px] border border-slate-200 bg-white p-8 shadow-soft print:rounded-none print:border print:p-5 print:shadow-none">
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.25em] text-slate-500">
                {nav.portfolio}
              </p>
              <h1 className="mt-3 text-4xl font-bold tracking-tight text-slate-950">
                {content.title}
              </h1>
              <p className="mt-4 max-w-2xl text-sm leading-7 text-slate-600">
                {content.description}
              </p>
              <div className="mt-5 no-print">
                <Link
                  href={`/${currentLang}/`}
                  className="inline-flex rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-800"
                >
                  {nav.profile}
                </Link>
              </div>
            </div>

            <div className="no-print">
              <LanguageSwitcher currentLang={currentLang} />
            </div>
          </div>
        </header>

        <div className="grid gap-6">
          {content.projects.length > 0 ? (
            content.projects.map((project) => (
              <PortfolioCard key={project.title} project={project} />
            ))
          ) : (
            <div className="rounded-[28px] border border-dashed border-slate-300 bg-white p-8 text-sm text-slate-500">
              Portfolio projects will be added next.
            </div>
          )}
        </div>

        <Footer />
      </Container>
    </main>
  );
}
