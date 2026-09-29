import { MetadataRoute } from "next";
import { getSiteConfig, getProjects } from "@/lib/content";

export default function sitemap(): MetadataRoute.Sitemap {
    const site = getSiteConfig();
    const projects = getProjects();
    const base = site.siteUrl || "https://example.com";

    return [
        {
            url: base,
            lastModified: new Date(),
            changeFrequency: "monthly",
            priority: 1,
        },
        ...projects.map((p) => ({
            url: `${base}/projects/${p.slug}`,
            lastModified: new Date(),
            changeFrequency: "monthly" as const,
            priority: 0.8,
        })),
    ];
}
