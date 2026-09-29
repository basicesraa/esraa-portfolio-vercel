import React from "react";
import Link from "next/link";
import type { Project } from "@/lib/types";
import Chip from "./Chip";
import { IconGithub } from "./icons";

interface ProjectCardProps {
    project: Project;
    slim?: boolean;
}

export default function ProjectCard({ project, slim = false }: ProjectCardProps) {
    const hasRepo = Boolean(project.links.repo);

    return (
        <article className="stretched-link-card bg-[var(--color-surface)] rounded-card border border-[rgba(74,77,96,0.18)] hover:shadow-sm transition-shadow duration-150 focus-within:outline focus-within:outline-3 focus-within:outline-[var(--color-accent)] focus-within:outline-offset-2">
            <div className={slim ? "flex flex-col md:flex-row gap-6 p-6" : "flex flex-col p-6 space-y-4"}>
                {/* Label */}
                <div className={slim ? "md:min-w-[180px]" : ""}>
                    <p className="font-mono text-xs uppercase tracking-widest text-[var(--color-text)] opacity-60">
                        {project.label}
                    </p>
                </div>

                <div className="flex-1 space-y-3">
                    {/* Title line */}
                    <div>
                        <h3 className="font-body font-semibold text-xl text-[var(--color-text)] leading-snug">
                            {/* Stretched link anchor covers the card */}
                            <Link
                                href={`/projects/${project.slug}`}
                                className="stretch-anchor text-[var(--color-text)] no-underline hover:text-[var(--color-accent-dark)] transition-colors duration-150"
                            >
                                {project.title}
                            </Link>
                        </h3>
                        {project.arabicTitle && (
                            <p
                                lang="ar"
                                dir="rtl"
                                className="font-arabic text-base text-[var(--color-text)] opacity-80 mt-0.5"
                            >
                                {project.arabicTitle}
                            </p>
                        )}
                    </div>

                    {/* Tagline */}
                    <p className="text-base text-[var(--color-text)] opacity-80 leading-relaxed max-w-reading">
                        {project.tagline}
                    </p>

                    {/* Stack chips (up to 4) */}
                    {!slim && (
                        <div className="flex flex-wrap gap-2">
                            {project.stack.slice(0, 4).map((tech) => (
                                <Chip key={tech}>{tech}</Chip>
                            ))}
                        </div>
                    )}

                    {/* Status and team chips + links */}
                    <div className="flex flex-wrap items-center gap-3">
                        <Chip variant="status">{project.status}</Chip>
                        {project.team && <Chip variant="team">Team project</Chip>}

                        {/* Read more link is inside the stretched area so it's just visual */}
                        <span className="text-sm font-medium text-[var(--color-text)] underline underline-offset-[3px] decoration-[var(--color-accent)] decoration-2 opacity-80">
                            Read the case study
                        </span>

                        {/* GitHub link sits above the stretched link (z-index 2) */}
                        {hasRepo && (
                            <a
                                href={project.links.repo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="above-stretch inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-text)] no-underline hover:text-[var(--color-accent-dark)] transition-colors duration-150"
                                aria-label={`View ${project.title} on GitHub`}
                            >
                                <IconGithub />
                                GitHub
                            </a>
                        )}
                    </div>
                </div>
            </div>
        </article>
    );
}
