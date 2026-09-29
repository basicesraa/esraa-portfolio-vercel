// Type definitions for content JSON files

export interface SiteConfig {
    name: string;
    fullName: string;
    siteTitle: string;
    description: string;
    siteUrl: string;
    email: string;
    github: string;
    linkedin: string;
    cvUrl: string;
    availability: string;
    lastUpdated: string;
    heroFlow: string[];
}

export interface Capability {
    title: string;
    text: string;
    projects: string[];
}

export interface PipelineLane {
    name: string;
    steps: string[];
}

export interface InterestingPart {
    title: string;
    text: string;
}

export interface NumberStat {
    value: string;
    label: string;
}

export interface ProjectLinks {
    repo: string;
    demo: string;
}

export type ProjectKind = "lead" | "supporting";

export interface Project {
    slug: string;
    kind: ProjectKind;
    label: string;
    title: string;
    arabicTitle: string;
    tagline: string;
    status: string;
    team: boolean;
    myRole: string;
    screenshot: string;
    links: ProjectLinks;
    disclaimer: string;
    summary: string;
    numbers: NumberStat[];
    numbersNote: string;
    whatItDoes: string[];
    pipeline: PipelineLane[];
    interestingParts: InterestingPart[];
    limits: string[];
    stack: string[];
}

export interface PathStep {
    tag: string;
    title: string;
    text: string;
    exploring: string[];
}

export interface PathData {
    steps: PathStep[];
    alongside: string[];
}

export interface ToolGroup {
    label: string;
    outlined: boolean;
    items: string[];
}

export interface ToolsData {
    groups: ToolGroup[];
}
