import React from "react";
import type { ToolsData } from "@/lib/types";
import SectionHeading from "./SectionHeading";
import Chip from "./Chip";

interface ToolsListProps {
    data: ToolsData;
}

export default function ToolsList({ data }: ToolsListProps) {
    return (
        <section
            id="tools"
            aria-labelledby="tools-heading"
            className="py-16 md:py-24"
        >
            <div className="mx-auto max-w-content px-5 md:px-8">
                <SectionHeading
                    index="04"
                    title="Tools"
                    id="tools-heading"
                    intro="Grouped by how I've actually used them."
                />

                <div className="space-y-8">
                    {data.groups.map((group) => (
                        <div key={group.label} className="space-y-3">
                            <p className="font-mono text-xs uppercase tracking-widest text-[var(--color-text)] opacity-60">
                                {group.label}
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {group.items.map((item) => (
                                    <Chip key={item} variant={group.outlined ? "outlined" : "default"}>
                                        {item}
                                    </Chip>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
