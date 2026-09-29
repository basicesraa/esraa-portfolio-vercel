import React from "react";
import Link from "next/link";
import type { SiteConfig } from "@/lib/types";

interface HeaderProps {
    site: SiteConfig;
}

export default function Header({ site }: HeaderProps) {
    return (
        <header
            className="sticky top-0 z-50 bg-[var(--color-bg)] border-b border-[rgba(74,77,96,0.18)]"
            role="banner"
        >
            <div className="mx-auto max-w-content px-5 md:px-8 flex items-center justify-between h-14">
                <Link
                    href="/#top"
                    className="font-heading font-medium text-xl text-[var(--color-text)] no-underline hover:text-[var(--color-accent-dark)] transition-colors duration-150"
                    aria-label="Esraa, go to top of page"
                >
                    {site.name}
                </Link>
                <nav aria-label="Main navigation">
                    <ul className="flex items-center gap-6 list-none m-0 p-0">
                        <li>
                            <a
                                href="#projects"
                                className="font-body text-base text-[var(--color-text)] no-underline border-b-2 border-transparent hover:border-[var(--color-accent)] hover:text-[var(--color-accent-dark)] transition-colors duration-150 pb-0.5"
                            >
                                Projects
                            </a>
                        </li>
                        <li>
                            <a
                                href="#path"
                                className="font-body text-base text-[var(--color-text)] no-underline border-b-2 border-transparent hover:border-[var(--color-accent)] hover:text-[var(--color-accent-dark)] transition-colors duration-150 pb-0.5"
                            >
                                Path
                            </a>
                        </li>
                        <li>
                            <a
                                href="#contact"
                                className="font-body text-base text-[var(--color-text)] no-underline border-b-2 border-transparent hover:border-[var(--color-accent)] hover:text-[var(--color-accent-dark)] transition-colors duration-150 pb-0.5"
                            >
                                Contact
                            </a>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
}
