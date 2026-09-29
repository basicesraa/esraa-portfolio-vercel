import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                // Palette defined via CSS variables in globals.css
                bg: "var(--color-bg)",
                text: "var(--color-text)",
                accent: "var(--color-accent)",
                "accent-dark": "var(--color-accent-dark)",
                secondary: "var(--color-secondary)",
                highlight: "var(--color-highlight)",
                surface: "var(--color-surface)",
            },
            fontFamily: {
                heading: ["var(--font-fraunces)", "serif"],
                body: ["var(--font-dm-sans)", "sans-serif"],
                mono: ["var(--font-jetbrains-mono)", "monospace"],
                arabic: ["var(--font-ibm-plex-arabic)", "sans-serif"],
            },
            maxWidth: {
                content: "1120px",
                reading: "65ch",
            },
            borderRadius: {
                card: "12px",
            },
        },
    },
    plugins: [],
};

export default config;
