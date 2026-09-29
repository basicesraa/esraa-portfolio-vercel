import type { Metadata } from "next";
import { Fraunces, DM_Sans, JetBrains_Mono, IBM_Plex_Sans_Arabic } from "next/font/google";
import "./globals.css";
import { getSiteConfig } from "@/lib/content";

const fraunces = Fraunces({
    subsets: ["latin"],
    variable: "--font-fraunces",
    display: "swap",
    weight: ["400", "500", "600"],
});

const dmSans = DM_Sans({
    subsets: ["latin"],
    variable: "--font-dm-sans",
    display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
    subsets: ["latin"],
    variable: "--font-jetbrains-mono",
    display: "swap",
    weight: ["400", "500"],
});

const ibmPlexArabic = IBM_Plex_Sans_Arabic({
    subsets: ["arabic"],
    variable: "--font-ibm-plex-arabic",
    display: "swap",
    weight: ["400", "500"],
});

const site = getSiteConfig();

const metadataBase =
    process.env.NEXT_PUBLIC_SITE_URL
        ? new URL(process.env.NEXT_PUBLIC_SITE_URL)
        : process.env.VERCEL_PROJECT_PRODUCTION_URL
            ? new URL(`https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`)
            : new URL("http://localhost:3000");

export const metadata: Metadata = {
    metadataBase,
    title: {
        template: `%s | ${site.name}`,
        default: site.siteTitle,
    },
    description: site.description,
    openGraph: {
        type: "website",
        title: site.siteTitle,
        description: site.description,
        siteName: site.name,
    },
    twitter: {
        card: "summary_large_image",
        title: site.siteTitle,
        description: site.description,
    },
    robots: {
        index: true,
        follow: true,
    },
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html
            lang="en"
            className={`${fraunces.variable} ${dmSans.variable} ${jetbrainsMono.variable} ${ibmPlexArabic.variable}`}
        >
            <body>{children}</body>
        </html>
    );
}
