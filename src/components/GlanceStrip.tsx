import React from "react";

export default function GlanceStrip() {
    const items = [
        {
            label: "Studying",
            value: "AI Engineering, Tanta University. Expected 2027. CGPA 3.44 / 4.0",
        },
        {
            label: "Worked as",
            value: "ML intern at Route",
        },
        {
            label: "Learning",
            value: "Agentic and Generative AI systems (DEPI track, in progress)",
        },
        {
            label: "Building",
            value: "RAG assistants in Arabic and English",
        },
    ];

    return (
        <div className="border-t border-b border-[rgba(74,77,96,0.18)]">
            <div className="mx-auto max-w-content px-5 md:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-[rgba(74,77,96,0.18)]">
                    {items.map((item) => (
                        <div key={item.label} className="py-5 px-4 first:pl-0 last:pr-0 space-y-1">
                            <p className="font-mono text-xs uppercase tracking-widest text-[var(--color-text)] opacity-60">
                                {item.label}
                            </p>
                            <p className="text-sm md:text-base text-[var(--color-text)] leading-snug">
                                {item.value}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
