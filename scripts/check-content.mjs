// scripts/check-content.mjs
// Plain Node.js script (no extra dependencies).
// Reads JSON files from src/content and prints warnings. Always exits 0.

import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");

function read(rel) {
    return JSON.parse(readFileSync(join(root, rel), "utf8"));
}

const site = read("src/content/site.json");
const projects = read("src/content/projects.json");

const warnings = [];

// Empty personal fields
if (!site.email) warnings.push("site.json: email is empty. The 'Email me' buttons will be hidden.");
if (!site.github) warnings.push("site.json: github is empty. GitHub links will be hidden.");
if (!site.linkedin) warnings.push("site.json: linkedin is empty. LinkedIn link will be hidden.");
if (!site.cvUrl) warnings.push("site.json: cvUrl is empty. 'Download CV' link will be hidden.");

// Full name still placeholder
if (site.fullName === "Esraa") {
    warnings.push("site.json: fullName is still just 'Esraa'. Add your surname before publishing.");
}

// Project-level checks
for (const p of projects) {
    if (p.team && !p.myRole) {
        warnings.push(`projects.json (${p.slug}): team project has empty myRole. 'My part' block will be hidden.`);
    }
    if (!p.links || !p.links.repo) {
        warnings.push(`projects.json (${p.slug}): links.repo is empty. GitHub link will be hidden.`);
    }
    if (!p.screenshot) {
        warnings.push(`projects.json (${p.slug}): screenshot is empty. No image will be shown.`);
    }
}

console.log("Content check (warnings do not stop the build):");
if (warnings.length === 0) {
    console.log("Content check: nothing to fix.");
} else {
    for (const w of warnings) {
        console.warn("  WARNING:", w);
    }
}

process.exit(0);
