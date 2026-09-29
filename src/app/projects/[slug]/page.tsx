import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { getProjects, getProjectBySlug } from "@/lib/content";
import type { Project } from "@/lib/types";
import Chip from "@/components/Chip";
import PipelineDiagram from "@/components/PipelineDiagram";
import { IconGithub, IconExternal } from "@/components/icons";

export async function generateStaticParams() {
    const projects = getProjects();
    return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> {
    const { slug } = await params;
    const project = getProjectBySlug(slug);
    if (!project) return {};
    return {
        title: project.title,
        description: project.tagline,
    };
}

function nextProject(projects: Project[], currentSlug: string): Project | null {
    const idx = projects.findIndex((p) => p.slug === currentSlug);
    if (idx === -1) return null;
    return projects[(idx + 1) % projects.length];
}

export default async function ProjectPage({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const { slug } = await params;
    const projectOrNull = getProjectBySlug(slug);
    if (!projectOrNull) notFound();
    const project = projectOrNull!;

    const allProjects = getProjects();
    const next = nextProject(allProjects, slug);

    const hasRepo = Boolean(project.links.repo);
    const hasDemo = Boolean(project.links.demo);

    return (
        <div className="min-h-screen bg-[var(--color-bg)]">
            {/* Back link */}
            <div className="mx-auto max-w-content px-5 md:px-8 pt-10">
                <Link
                    href="/#projects"
                    className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-text)] underline underline-offset-[3px] decoration-[var(--color-accent)] decoration-2 hover:text-[var(--color-accent-dark)] transition-colors duration-150"
                >
                    ← Back to projects
                </Link>
            </div>

            <main className="mx-auto max-w-content px-5 md:px-8 py-12 space-y-12">
                {/* Header block */}
                <header className="space-y-4">
                    <p className="font-mono text-xs uppercase tracking-widest text-[var(--color-text)] opacity-60">
                        {project.label}
                    </p>
                    <h1 className="font-heading font-medium text-[var(--color-text)]">
                        {project.title}
                    </h1>
                    {project.arabicTitle && (
                        <p
                            lang="ar"
                            dir="rtl"
                            className="font-arabic text-2xl text-[var(--color-text)] opacity-80"
                        >
                            {project.arabicTitle}
                        </p>
                    )}
                    <p className="text-lg md:text-xl text-[var(--color-text)] opacity-80 leading-relaxed max-w-reading">
                        {project.tagline}
                    </p>
                    <div className="flex flex-wrap gap-2">
                        <Chip variant="status">{project.status}</Chip>
                        {project.team && <Chip variant="team">Team project</Chip>}
                    </div>
                </header>

                {/* Links */}
                {(hasRepo || hasDemo) && (
                    <div className="flex flex-wrap gap-4">
                        {hasRepo && (
                            <a
                                href={project.links.repo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 min-h-[44px] px-5 py-2.5 rounded-[12px] border border-[var(--color-text)] text-[var(--color-text)] font-medium text-base hover:bg-[rgba(208,189,244,0.35)] transition-colors duration-150 no-underline"
                            >
                                <IconGithub />
                                View on GitHub
                            </a>
                        )}
                        {hasDemo && (
                            <a
                                href={project.links.demo}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 min-h-[44px] px-5 py-2.5 rounded-[12px] border border-[var(--color-text)] text-[var(--color-text)] font-medium text-base hover:bg-[rgba(208,189,244,0.35)] transition-colors duration-150 no-underline"
                            >
                                <IconExternal />
                                Live demo
                            </a>
                        )}
                    </div>
                )}

                {/* Disclaimer */}
                {project.disclaimer && (
                    <div className="border-l-4 border-[var(--color-accent)] pl-4 py-2 bg-[var(--color-surface)] rounded-r-card">
                        <p className="font-mono text-xs uppercase tracking-widest text-[var(--color-text)] opacity-60 mb-1">
                            Note
                        </p>
                        <p className="text-base text-[var(--color-text)] leading-relaxed">
                            {project.disclaimer}
                        </p>
                    </div>
                )}

                {/* Summary */}
                <p className="text-base md:text-lg text-[var(--color-text)] opacity-85 leading-relaxed max-w-reading">
                    {project.summary}
                </p>

                {/* Screenshot */}
                {project.screenshot && (
                    <div className="rounded-card overflow-hidden border border-[rgba(74,77,96,0.18)]">
                        <Image
                            src={project.screenshot}
                            alt={`${project.title} interface`}
                            width={1200}
                            height={675}
                            className="w-full h-auto"
                        />
                    </div>
                )}

                {/* Numbers strip */}
                {project.numbers.length > 0 && (
                    <div className="border-t border-b border-[rgba(74,77,96,0.18)] py-8 space-y-4">
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {project.numbers.map((n) => (
                                <div key={n.label} className="space-y-1">
                                    <p className="font-heading font-medium text-4xl text-[var(--color-text)]">
                                        {n.value}
                                    </p>
                                    <p className="font-mono text-xs uppercase tracking-widest text-[var(--color-text)] opacity-60">
                                        {n.label}
                                    </p>
                                </div>
                            ))}
                        </div>
                        {project.numbersNote && (
                            <p className="text-sm text-[var(--color-text)] opacity-60 italic">
                                {project.numbersNote}
                            </p>
                        )}
                    </div>
                )}

                {/* What it does */}
                {project.whatItDoes.length > 0 && (
                    <section aria-labelledby="what-it-does-heading" className="space-y-4">
                        <h2
                            id="what-it-does-heading"
                            className="font-heading font-medium text-[var(--color-text)]"
                        >
                            What it does
                        </h2>
                        <ul className="space-y-2 max-w-reading">
                            {project.whatItDoes.map((item) => (
                                <li key={item} className="flex gap-2 text-base text-[var(--color-text)] opacity-85 leading-relaxed">
                                    <span aria-hidden="true" className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-[var(--color-accent)] inline-block" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </section>
                )}

                {/* Pipeline diagram */}
                {project.pipeline.length > 0 && (
                    <section aria-labelledby="how-it-works-heading" className="space-y-4">
                        <h2
                            id="how-it-works-heading"
                            className="font-heading font-medium text-[var(--color-text)]"
                        >
                            How it works
                        </h2>
                        <div className="bg-[var(--color-text)] rounded-card p-6 md:p-8 space-y-8">
                            <PipelineDiagram lanes={project.pipeline} />
                        </div>
                    </section>
                )}

                {/* Interesting parts */}
                {project.interestingParts.length > 0 && (
                    <section aria-labelledby="interesting-heading" className="space-y-6">
                        <h2
                            id="interesting-heading"
                            className="font-heading font-medium text-[var(--color-text)]"
                        >
                            The interesting parts
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {project.interestingParts.map((part) => (
                                <div key={part.title} className="space-y-2">
                                    <h3 className="font-body font-semibold text-xl text-[var(--color-text)]">
                                        {part.title}
                                    </h3>
                                    <p className="text-base text-[var(--color-text)] opacity-85 leading-relaxed">
                                        {part.text}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {/* My part */}
                {project.myRole && (
                    <section aria-labelledby="my-part-heading" className="space-y-3">
                        <h2
                            id="my-part-heading"
                            className="font-heading font-medium text-[var(--color-text)]"
                        >
                            My part
                        </h2>
                        <p className="text-base text-[var(--color-text)] opacity-85 leading-relaxed max-w-reading">
                            {project.myRole}
                        </p>
                        {project.team && (
                            <p className="text-sm text-[var(--color-text)] opacity-60 italic">
                                This was built with others.
                            </p>
                        )}
                    </section>
                )}

                {/* Limits */}
                {project.limits.length > 0 && (
                    <section aria-labelledby="limits-heading" className="space-y-4">
                        <h2
                            id="limits-heading"
                            className="font-heading font-medium text-[var(--color-text)]"
                        >
                            Where it falls short
                        </h2>
                        <ul className="space-y-2 max-w-reading">
                            {project.limits.map((item) => (
                                <li key={item} className="flex gap-2 text-base text-[var(--color-text)] opacity-85 leading-relaxed">
                                    <span aria-hidden="true" className="mt-1.5 shrink-0 w-1.5 h-1.5 rounded-full bg-[rgba(74,77,96,0.4)] inline-block" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </section>
                )}

                {/* Stack */}
                {project.stack.length > 0 && (
                    <div className="flex flex-wrap gap-2">
                        {project.stack.map((tech) => (
                            <Chip key={tech}>{tech}</Chip>
                        ))}
                    </div>
                )}

                {/* Next project */}
                {next && (
                    <div className="border-t border-[rgba(74,77,96,0.18)] pt-8">
                        <p className="font-mono text-xs uppercase tracking-widest text-[var(--color-text)] opacity-60 mb-2">
                            Next project
                        </p>
                        <Link
                            href={`/projects/${next.slug}`}
                            className="text-lg font-medium text-[var(--color-text)] underline underline-offset-[3px] decoration-[var(--color-accent)] decoration-2 hover:text-[var(--color-accent-dark)] transition-colors duration-150"
                        >
                            {next.title}
                        </Link>
                    </div>
                )}
            </main>
        </div>
    );
}
