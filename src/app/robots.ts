import { MetadataRoute } from "next";
import { getSiteConfig } from "@/lib/content";

export default function robots(): MetadataRoute.Robots {
    const site = getSiteConfig();
    const base = site.siteUrl || "https://example.com";

    return {
        rules: {
            userAgent: "*",
            allow: "/",
        },
        sitemap: `${base}/sitemap.xml`,
    };
}
