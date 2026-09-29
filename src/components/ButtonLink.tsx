import React from "react";
import Link from "next/link";

interface ButtonLinkProps {
    href: string;
    variant?: "primary" | "secondary" | "text" | "dark-primary";
    children: React.ReactNode;
    target?: "_blank";
    rel?: string;
    className?: string;
}

export default function ButtonLink({
    href,
    variant = "primary",
    children,
    target,
    rel,
    className = "",
}: ButtonLinkProps) {
    const base =
        "inline-flex items-center gap-2 font-body font-medium rounded-[12px] transition-colors duration-150 focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)] min-h-[44px] px-5 py-2.5 text-base no-underline";

    const variants: Record<NonNullable<ButtonLinkProps["variant"]>, string> = {
        primary:
            "bg-[var(--color-accent)] text-white hover:bg-[var(--color-accent-dark)]",
        secondary:
            "border border-[var(--color-text)] text-[var(--color-text)] bg-transparent hover:bg-[rgba(208,189,244,0.35)]",
        text: "bg-transparent text-[var(--color-text)] underline underline-offset-[3px] decoration-[var(--color-accent)] decoration-2 hover:text-[var(--color-accent-dark)] rounded-none min-h-0 px-0 py-0",
        "dark-primary":
            "bg-[var(--color-secondary)] text-[var(--color-text)] hover:bg-[#b8a5e0] focus-visible:outline-[var(--color-secondary)]",
    };

    const isExternal =
        href.startsWith("http") || href.startsWith("mailto") || target === "_blank";

    if (isExternal) {
        return (
            <a
                href={href}
                target={target}
                rel={rel}
                className={`${base} ${variants[variant]} ${className}`}
            >
                {children}
            </a>
        );
    }

    return (
        <Link href={href} className={`${base} ${variants[variant]} ${className}`}>
            {children}
        </Link>
    );
}
