import React from "react";
import type { SiteConfig } from "@/lib/types";
import { IconGithub, IconLinkedin, IconMail, IconExternal } from "./icons";

interface ContactProps {
    site: SiteConfig;
}

export default function Contact({ site }: ContactProps) {
    return (
        <section
            id="contact"
            aria-labelledby="contact-heading"
            className="bg-[var(--color-text)] py-20 md:py-28"
        >
            <div className="mx-auto max-w-content px-5 md:px-8">
                <div className="max-w-reading space-y-6">
                    <h2
                        id="contact-heading"
                        className="font-heading font-medium text-[var(--color-bg)]"
                    >
                        Say hello
                    </h2>
                    <p className="text-base md:text-lg text-[var(--color-bg)] opacity-85 leading-relaxed">
                        If you have documents people keep asking questions about, or an
                        internship where this kind of work fits, I&apos;d like to hear about it.
                    </p>

                    <div className="flex flex-wrap items-center gap-4">
                        {site.email && (
                            <a
                                href={`mailto:${site.email}`}
                                className="inline-flex items-center gap-2 min-h-[44px] px-5 py-2.5 rounded-[12px] bg-[var(--color-secondary)] text-[var(--color-text)] font-medium text-base hover:bg-[#b8a5e0] transition-colors duration-150 no-underline focus-visible:outline focus-visible:outline-3 focus-visible:outline-[var(--color-secondary)] focus-visible:outline-offset-2"
                            >
                                <IconMail />
                                Email me
                            </a>
                        )}
                        {site.github && (
                            <a
                                href={site.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-[var(--color-bg)] opacity-80 hover:opacity-100 underline underline-offset-[3px] decoration-[var(--color-secondary)] decoration-2 hover:text-[var(--color-secondary)] transition-colors duration-150 no-underline font-medium text-sm"
                            >
                                <IconGithub />
                                GitHub
                            </a>
                        )}
                        {site.linkedin && (
                            <a
                                href={site.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-[var(--color-bg)] opacity-80 hover:opacity-100 hover:text-[var(--color-secondary)] transition-colors duration-150 no-underline font-medium text-sm"
                            >
                                <IconLinkedin />
                                LinkedIn
                            </a>
                        )}
                        {site.cvUrl && (
                            <a
                                href={site.cvUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-[var(--color-bg)] opacity-80 hover:opacity-100 hover:text-[var(--color-secondary)] transition-colors duration-150 no-underline font-medium text-sm"
                            >
                                <IconExternal />
                                Download CV
                            </a>
                        )}
                    </div>
                </div>

                {/* Footer inside the dark band */}
                <footer
                    className="mt-16 pt-8 border-t border-[rgba(160,210,235,0.2)]"
                    role="contentinfo"
                >
                    <p className="font-mono text-xs text-[var(--color-highlight)] opacity-70">
                        {site.name} · Built with Next.js and deployed on Vercel · Last
                        updated {site.lastUpdated}
                    </p>
                </footer>
            </div>
        </section>
    );
}
