import React from "react";
import type { PathData } from "@/lib/types";
import SectionHeading from "./SectionHeading";

interface PathTimelineProps {
    data: PathData;
}

export default function PathTimeline({ data }: PathTimelineProps) {
    return (
        <section
            id="path"
            aria-labelledby="path-heading"
            className="py-16 md:py-24"
        >
            <div className="mx-auto max-w-content px-5 md:px-8">
                <SectionHeading
                    index="03"
                    title="How I got here"
                    id="path-heading"
                    intro="Foundation first, then a steady move toward building with LLMs."
                />

                {/* Timeline */}
                <div className="relative">
                    {/* Vertical line */}
                    <div
                        className="absolute left-[7px] top-2 bottom-2 w-px bg-[rgba(74,77,96,0.25)]"
                        aria-hidden="true"
                    />

                    <ol className="list-none m-0 p-0 space-y-10">
                        {data.steps.map((step, i) => {
                            const isLast = i === data.steps.length - 1;
                            return (
                                <li key={step.tag} className="pl-8 relative">
                                    {/* Circle marker */}
                                    <div
                                        className={`absolute left-0 top-1.5 w-4 h-4 rounded-full border-2 border-[var(--color-bg)] ${isLast
                                                ? "bg-[var(--color-accent)]"
                                                : "bg-[var(--color-text)]"
                                            }`}
                                        aria-hidden="true"
                                    />

                                    <p className="font-mono text-xs uppercase tracking-widest text-[var(--color-text)] opacity-60 mb-1">
                                        {step.tag}
                                    </p>
                                    <h3 className="font-body font-semibold text-xl text-[var(--color-text)] mb-2">
                                        {step.title}
                                    </h3>
                                    <p className="text-base text-[var(--color-text)] opacity-85 leading-relaxed max-w-reading">
                                        {step.text}
                                    </p>

                                    {/* Exploring items (last step only if non-empty) */}
                                    {isLast && step.exploring.length > 0 && (
                                        <div className="mt-4">
                                            <p className="font-mono text-xs uppercase tracking-widest text-[var(--color-text)] opacity-60 mb-2">
                                                Things I&apos;m working through right now
                                            </p>
                                            <ul className="list-disc list-inside space-y-1">
                                                {step.exploring.map((item) => (
                                                    <li
                                                        key={item}
                                                        className="text-sm text-[var(--color-text)] opacity-80 leading-relaxed"
                                                    >
                                                        {item}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    )}
                                </li>
                            );
                        })}
                    </ol>
                </div>

                {/* Alongside section */}
                {data.alongside.length > 0 && (
                    <div className="mt-12 pt-8 border-t border-[rgba(74,77,96,0.18)]">
                        <p className="font-mono text-xs uppercase tracking-widest text-[var(--color-text)] opacity-60 mb-4">
                            Alongside
                        </p>
                        <ul className="space-y-3 max-w-reading">
                            {data.alongside.map((item) => (
                                <li
                                    key={item}
                                    className="text-base text-[var(--color-text)] opacity-80 leading-relaxed"
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </section>
    );
}
