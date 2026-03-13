"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";
import type { PortfolioProject } from "@/content/portfolio";

export function PortfolioCard({ project }: { project: PortfolioProject }) {
  const [open, setOpen] = useState(false);

  return (
    <article className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-soft transition">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="flex w-full flex-col text-left"
      >
        {project.image && (
          <div className="relative aspect-[16/9] w-full bg-slate-100">
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        )}

        <div className="p-6">
          <div className="flex items-start justify-between gap-4">
            <div>
              <h3 className="text-xl font-semibold text-slate-900">
                {project.title}
              </h3>
              <p className="mt-1 text-sm text-slate-500">{project.subtitle}</p>
            </div>
            <span
              className={`mt-1 shrink-0 rounded-full bg-slate-100 p-2 text-slate-600 transition ${
                open ? "rotate-180" : ""
              }`}
            >
              <ChevronDown className="h-4 w-4" />
            </span>
          </div>

          <p className="mt-4 line-clamp-2 text-sm leading-7 text-slate-600">
            {project.description}
          </p>

          <div className="mt-4 flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <span
                key={tech}
                className="rounded-full bg-slate-100 px-3 py-1.5 text-sm text-slate-700"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </button>

      {open && (
        <div className="border-t border-slate-200 px-6 py-6">
          <div className="mb-5 flex flex-wrap gap-3 text-sm font-medium">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-full bg-black px-4 py-2 text-white"
              >
                GitHub
              </a>
            )}
            {project.demoUrl && (
              <a
                href={project.demoUrl}
                target="_blank"
                rel="noreferrer"
                className="rounded-full border border-slate-300 px-4 py-2 text-slate-800"
              >
                Link
              </a>
            )}
          </div>

          <div className="space-y-6">
            {project.details.map((block, index) => {
              if (block.type === "text") {
                return (
                  <section
                    key={`${project.title}-text-${index}`}
                    className="space-y-2"
                  >
                    {block.title && (
                      <h4 className="text-base font-semibold text-slate-900">
                        {block.title}
                      </h4>
                    )}
                    <p className="text-sm leading-7 text-slate-700 whitespace-pre-line">
                      {block.content}
                    </p>
                  </section>
                );
              }

              return (
                <figure
                  key={`${project.title}-image-${index}`}
                  className="space-y-3"
                >
                  <div className="w-full max-w-[1024px]">
                    <Image
                      src={block.src}
                      alt={block.alt}
                      width={1024}
                      height={1024}
                      className="h-auto max-w-full w-auto rounded-2xl"
                      sizes="(max-width: 1024px) 100vw, 1024px"
                    />
                  </div>

                  {block.caption && (
                    <figcaption className="text-xs leading-6 text-slate-500">
                      {block.caption}
                    </figcaption>
                  )}
                </figure>
              );
            })}
          </div>
        </div>
      )}
    </article>
  );
}
