import React from "react";

interface SectionHeadingProps {
    index: string; // e.g. "01"
    title: string;
    id?: string;
    intro?: string;
    dark?: boolean;
}

export default function SectionHeading({
    index,
    title,
    id,
    intro,
    dark = false,
}: SectionHeadingProps) {
    const textColor = dark ? "text-[var(--color-bg)]" : "text-[var(--color-text)]";
    const numColor = dark ? "text-[var(--color-highlight)]" : "text-[var(--color-text)]";

    return (
        <div className="mb-10 md:mb-14">
            <h2 id={id} className={`${textColor} flex items-baseline gap-3`}>
                <span
                    className={`font-mono text-sm uppercase tracking-widest opacity-60 ${numColor}`}
                    aria-hidden="true"
                >
                    {index}
                </span>
                {title}
            </h2>
            {intro && (
                <p className={`mt-4 text-lg ${textColor} opacity-80`}>{intro}</p>
            )}
        </div>
    );
}
