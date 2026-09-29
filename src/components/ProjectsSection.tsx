import React from "react";
import type { Project } from "@/lib/types";
import SectionHeading from "./SectionHeading";
import ProjectCard from "./ProjectCard";

interface ProjectsSectionProps {
    projects: Project[];
}

export default function ProjectsSection({ projects }: ProjectsSectionProps) {
    const leadProjects = projects.filter((p) => p.kind === "lead");
    const supportingProjects = projects.filter((p) => p.kind === "supporting");

    return (
        <section
            id="projects"
            aria-labelledby="projects-heading"
            className="py-16 md:py-24 bg-[var(--color-bg)]"
        >
            <div className="mx-auto max-w-content px-5 md:px-8">
                <SectionHeading
                    index="02"
                    title="Projects"
                    id="projects-heading"
                    intro="Two RAG assistants and one LLM service. Each has a case study with how it works and where it falls short."
                />

                {/* Lead projects: side by side on desktop */}
                {leadProjects.length > 0 && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        {leadProjects.map((project) => (
                            <ProjectCard key={project.slug} project={project} />
                        ))}
                    </div>
                )}

                {/* Supporting projects: full-width slim row */}
                {supportingProjects.map((project) => (
                    <ProjectCard key={project.slug} project={project} slim />
                ))}
            </div>
        </section>
    );
}
