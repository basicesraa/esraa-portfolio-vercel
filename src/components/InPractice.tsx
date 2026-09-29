import React from "react";
import type { Capability, Project } from "@/lib/types";
import SectionHeading from "./SectionHeading";
import Link from "next/link";

interface InPracticeProps {
    capabilities: Capability[];
    projects: Project[];
}

export default function InPractice({ capabilities, projects }: InPracticeProps) {
    // Build a map from slug to project title for quick lookup
    const projectMap = Object.fromEntries(projects.map((p) => [p.slug, p]));

    // Human-readable link labels per slug
    const linkLabels: Record<string, string> = {
        medseek: "See MedSeek",
        "egypt-law-rag": "See Egypt Law RAG",
        "ag-news-pipeline": "See AG News Pipeline",
    };

    return (
        <section
            id="in-practice"
            aria-labelledby="in-practice-heading"
            className="py-16 md:py-24"
        >
            <div className="mx-auto max-w-content px-5 md:px-8">
                <SectionHeading
                    index="01"
                    title="What that looks like in practice"
                    id="in-practice-heading"
                    intro="What I've built, in plain terms."
                />
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {capabilities.map((cap) => (
                        <div
                            key={cap.title}
                            className="bg-[var(--color-surface)] rounded-card border border-[rgba(74,77,96,0.18)] p-6 space-y-3"
                        >
                            <h3 className="font-body font-semibold text-xl text-[var(--color-text)]">
                                {cap.title}
                            </h3>
                            <p className="text-base text-[var(--color-text)] opacity-85 leading-relaxed">
                                {cap.text}
                            </p>
                            {cap.projects.length > 0 && (
                                <div className="flex flex-wrap gap-3 pt-1">
                                    {cap.projects.map((slug) => {
                                        const proj = projectMap[slug];
                                        if (!proj) return null;
                                        return (
                                            <Link
                                                key={slug}
                                                href={`/projects/${slug}`}
                                                className="text-sm font-medium text-[var(--color-text)] underline underline-offset-[3px] decoration-[var(--color-accent)] decoration-2 hover:text-[var(--color-accent-dark)] transition-colors duration-150"
                                            >
                                                {linkLabels[slug] ?? `See ${proj.title}`}
                                            </Link>
                                        );
                                    })}
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
