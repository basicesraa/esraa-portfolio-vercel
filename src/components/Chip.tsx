import React from "react";

interface ChipProps {
    children: React.ReactNode;
    variant?: "default" | "outlined" | "team" | "status";
}

export default function Chip({ children, variant = "default" }: ChipProps) {
    const base =
        "inline-flex items-center px-3 py-0.5 rounded-full font-mono text-xs uppercase tracking-wide whitespace-nowrap select-none";

    const styles: Record<NonNullable<ChipProps["variant"]>, string> = {
        default:
            "bg-[rgba(208,189,244,0.35)] text-[var(--color-text)] border border-[rgba(74,77,96,0.18)]",
        outlined:
            "bg-transparent text-[var(--color-text)] border border-[var(--color-text)]",
        team: "bg-[rgba(160,210,235,0.5)] text-[var(--color-text)] border border-[rgba(74,77,96,0.18)]",
        status:
            "bg-[rgba(208,189,244,0.35)] text-[var(--color-text)] border border-[rgba(74,77,96,0.18)]",
    };

    return <span className={`${base} ${styles[variant]}`}>{children}</span>;
}
