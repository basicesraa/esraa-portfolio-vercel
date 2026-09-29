// Typed loaders for content JSON files
import type { SiteConfig, Capability, Project, PathData, ToolsData } from "./types";

import siteRaw from "@/content/site.json";
import capabilitiesRaw from "@/content/capabilities.json";
import projectsRaw from "@/content/projects.json";
import pathRaw from "@/content/path.json";
import toolsRaw from "@/content/tools.json";

export const getSiteConfig = (): SiteConfig => siteRaw as SiteConfig;

export const getCapabilities = (): Capability[] => capabilitiesRaw as Capability[];

export const getProjects = (): Project[] => projectsRaw as Project[];

export const getProjectBySlug = (slug: string): Project | undefined =>
    (projectsRaw as Project[]).find((p) => p.slug === slug);

export const getPathData = (): PathData => pathRaw as PathData;

export const getToolsData = (): ToolsData => toolsRaw as ToolsData;
