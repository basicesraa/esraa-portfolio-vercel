import React from "react";
import ButtonLink from "./ButtonLink";
import PipelineDiagram from "./PipelineDiagram";
import type { SiteConfig } from "@/lib/types";

interface HeroProps {
    site: SiteConfig;
}

export default function Hero({ site }: HeroProps) {
    const heroLane = {
        name: "Typical RAG flow",
        steps: site.heroFlow,
    };

    return (
        <section
            aria-labelledby="hero-heading"
            className="pt-16 pb-20 md:pt-24 md:pb-28"
        >
            <div className="mx-auto max-w-content px-5 md:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
                    {/* Text column: 7 of 12 */}
                    <div className="lg:col-span-7 space-y-6">
                        <p className="font-mono text-xs uppercase tracking-widest text-[var(--color-text)] opacity-70">
                            Esraa · AI Engineering student
                        </p>

                        <h1 id="hero-heading" className="font-heading font-medium text-[var(--color-text)]">
                            I build assistants that answer from documents, and show where the
                            answer came from.
                        </h1>

                        <p className="text-[17px] md:text-[18px] leading-relaxed text-[var(--color-text)] opacity-90 max-w-reading">
                            I&apos;m an AI Engineering student at Tanta University, graduating in 2027.
                            Most of what I&apos;ve built so far is retrieval-based assistants in Arabic
                            and English. Now I&apos;m moving into agentic AI.
                        </p>

                        <div className="flex flex-wrap items-center gap-3">
                            <ButtonLink href="#projects" variant="primary">
                                See the projects
                            </ButtonLink>
                            {site.email && (
                                <ButtonLink href={`mailto:${site.email}`} variant="secondary">
                                    Email me
                                </ButtonLink>
                            )}
                            {site.github && (
                                <ButtonLink
                                    href={site.github}
                                    variant="text"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    GitHub
                                </ButtonLink>
                            )}
                        </div>

                        {site.availability && (
                            <p className="text-sm text-[var(--color-text)] opacity-70">
                                {site.availability}
                            </p>
                        )}
                    </div>

                    {/* Flow card: 5 of 12 */}
                    <div className="lg:col-span-5">
                        <div className="rounded-card bg-[var(--color-text)] p-6 space-y-4">
                            <p className="font-mono text-xs uppercase tracking-widest text-[var(--color-highlight)] opacity-90">
                                The shape of most of what I&apos;ve built so far
                            </p>
                            <PipelineDiagram lanes={[heroLane]} forceVertical />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
