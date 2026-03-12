import { notFound } from "next/navigation";
import { Container } from "@/components/container";
import { Footer } from "@/components/footer";
import { ResumeHeader } from "@/components/resume-header";
import { SectionCard } from "@/components/section-card";
import { SkillGroup } from "@/components/skill-group";
import { TimelineItem } from "@/components/timeline-item";
import { resumeContent } from "@/content/resume";
import { isLang } from "@/lib/i18n";

export default async function ResumePage({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;

  if (!isLang(lang)) {
    notFound();
  }
  const content = resumeContent[lang];

  return (
    <main className="min-h-screen bg-slate-50 py-10 text-slate-900 print:bg-white print:py-0">
      <Container>
        <ResumeHeader lang={lang} content={content} />

        <div className="grid gap-6">
          <SectionCard title={content.sectionTitles.education}>
            <div className="space-y-4">
              {content.education.map((item) => (
                <TimelineItem
                  key={`${item.school}-${item.period}`}
                  title={item.school}
                  subtitle={item.major}
                  meta={item.period}
                >
                  {item.detail && (
                    <p className="mt-3 text-sm text-slate-500">{item.detail}</p>
                  )}
                </TimelineItem>
              ))}
            </div>
          </SectionCard>

          <SectionCard title={content.sectionTitles.experience}>
            <div className="space-y-4">
              {content.experience.map((item) => (
                <TimelineItem
                  key={`${item.company}-${item.period}`}
                  title={item.title}
                  subtitle={item.company}
                  meta={
                    item.duration
                      ? `${item.period} · ${item.duration}`
                      : item.period
                  }
                >
                  <ul className="mt-3 list-disc space-y-1 pl-5 text-sm leading-6 text-slate-700">
                    {item.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                </TimelineItem>
              ))}
            </div>
          </SectionCard>

          <SectionCard title={content.sectionTitles.awards}>
            <div className="grid gap-4 md:grid-cols-2">
              {content.awards.map((item) => (
                <div key={item.title} className="rounded-3xl bg-slate-50 p-5">
                  <h3 className="font-semibold text-slate-900">{item.title}</h3>
                  <p className="mt-1 text-sm text-slate-500">
                    {item.organization}
                  </p>
                  <p className="mt-3 text-sm leading-6 text-slate-600">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </SectionCard>

          <SectionCard title={content.sectionTitles.skills}>
            <div className="grid gap-6 md:grid-cols-3">
              <SkillGroup
                title={content.skillLabels.frontendBackend}
                skills={content.skills.frontendBackend}
              />
              <SkillGroup
                title={content.skillLabels.ai}
                skills={content.skills.ai}
              />
              <SkillGroup
                title={content.skillLabels.design}
                skills={content.skills.design}
              />
            </div>
          </SectionCard>
        </div>

        <Footer />
      </Container>
    </main>
  );
}
