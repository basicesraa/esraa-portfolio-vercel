import React from "react";
import Reveal from "./Reveal";
import { IconArrow, IconArrowDown } from "./icons";

interface PipelineLane {
    name: string;
    steps: string[];
}

interface PipelineDiagramProps {
    lanes: PipelineLane[];
    /** Force vertical layout (used in hero) */
    forceVertical?: boolean;
    /** Caption above the diagram */
    caption?: string;
}

function DiagramStep({
    label,
    isFinal,
    index,
}: {
    label: string;
    isFinal: boolean;
    index: number;
}) {
    return (
        <Reveal staggerIndex={index}>
            <div
                className={`
          flex items-center justify-center text-center px-3 py-2 rounded-lg border
          font-mono text-xs leading-tight min-w-[80px] max-w-[180px]
          ${isFinal
                        ? "bg-[var(--color-accent)] text-white border-[var(--color-accent)]"
                        : "bg-transparent text-[var(--color-bg)] border-[rgba(160,210,235,0.5)]"
                    }
        `}
            >
                {label}
            </div>
        </Reveal>
    );
}

export default function PipelineDiagram({
    lanes,
    forceVertical = false,
    caption,
}: PipelineDiagramProps) {
    return (
        <div className="space-y-6">
            {caption && (
                <p className="font-mono text-xs uppercase tracking-widest text-[var(--color-highlight)] opacity-90">
                    {caption}
                </p>
            )}
            {lanes.map((lane) => (
                <div key={lane.name}>
                    {lanes.length > 1 && (
                        <p className="font-mono text-xs uppercase tracking-widest text-[var(--color-highlight)] mb-3 opacity-80">
                            {lane.name}
                        </p>
                    )}
                    {/* Accessible ordered list for screen readers */}
                    <ol
                        aria-label={lane.name}
                        className={`
              list-none m-0 p-0
              ${forceVertical
                                ? "flex flex-col items-start gap-2"
                                : "flex flex-col items-start gap-2 lg:flex-row lg:flex-wrap lg:items-center lg:gap-2"
                            }
            `}
                    >
                        {lane.steps.map((step, i) => {
                            const isFinal = i === lane.steps.length - 1;
                            return (
                                <li
                                    key={i}
                                    className={`
                    flex items-center gap-2
                    ${forceVertical ? "flex-col items-start" : "flex-col items-start lg:flex-row lg:items-center"}
                  `}
                                >
                                    <DiagramStep label={step} isFinal={isFinal} index={i} />
                                    {!isFinal && (
                                        <>
                                            {/* Mobile: always show down arrow; desktop (non-forced vertical): show right arrow */}
                                            <span
                                                aria-hidden="true"
                                                className={`text-[var(--color-secondary)] ${forceVertical ? "block" : "block lg:hidden"}`}
                                            >
                                                <IconArrowDown />
                                            </span>
                                            {!forceVertical && (
                                                <span
                                                    aria-hidden="true"
                                                    className="hidden lg:block text-[var(--color-secondary)]"
                                                >
                                                    <IconArrow />
                                                </span>
                                            )}
                                        </>
                                    )}
                                </li>
                            );
                        })}
                    </ol>
                </div>
            ))}
        </div>
    );
}
