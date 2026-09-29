import type { Metadata } from "next";
import {
    getSiteConfig,
    getCapabilities,
    getProjects,
    getPathData,
    getToolsData,
} from "@/lib/content";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import GlanceStrip from "@/components/GlanceStrip";
import InPractice from "@/components/InPractice";
import ProjectsSection from "@/components/ProjectsSection";
import PathTimeline from "@/components/PathTimeline";
import ToolsList from "@/components/ToolsList";
import Contact from "@/components/Contact";

export const metadata: Metadata = {
    title: getSiteConfig().siteTitle,
};

// JSON-LD Person schema
function PersonSchema({ site }: { site: ReturnType<typeof getSiteConfig> }) {
    const sameAs: string[] = [];
    if (site.github) sameAs.push(site.github);
    if (site.linkedin) sameAs.push(site.linkedin);

    const schema = {
        "@context": "https://schema.org",
        "@type": "Person",
        name: site.fullName,
        jobTitle: "AI Engineering student",
        url: site.siteUrl || undefined,
        sameAs: sameAs.length > 0 ? sameAs : undefined,
        knowsAbout: [
            "Retrieval-augmented generation",
            "Large language models",
            "Machine learning",
        ],
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
}

export default function Home() {
    const site = getSiteConfig();
    const capabilities = getCapabilities();
    const projects = getProjects();
    const pathData = getPathData();
    const toolsData = getToolsData();

    return (
        <>
            <PersonSchema site={site} />
            <a href="#main-content" className="skip-link">
                Skip to content
            </a>
            <Header site={site} />
            <main id="main-content">
                <Hero site={site} />
                <GlanceStrip />
                <InPractice capabilities={capabilities} projects={projects} />
                <ProjectsSection projects={projects} />
                <PathTimeline data={pathData} />
                <ToolsList data={toolsData} />
                <Contact site={site} />
            </main>
        </>
    );
}
