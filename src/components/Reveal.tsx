"use client";
import React, { useEffect, useRef, useState } from "react";

interface RevealProps {
    children: React.ReactNode;
    className?: string;
    staggerIndex?: number; // 0-based index for staggered delay
}

export default function Reveal({ children, className = "", staggerIndex = 0 }: RevealProps) {
    const ref = useRef<HTMLDivElement>(null);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const el = ref.current;
        if (!el) return;

        // Respect prefers-reduced-motion: immediately show
        const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
        if (prefersReduced) {
            setVisible(true);
            return;
        }

        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    // stagger: 80ms per index, max 640ms
                    const delay = Math.min(staggerIndex * 80, 640);
                    setTimeout(() => setVisible(true), delay);
                    observer.disconnect();
                }
            },
            { threshold: 0.2 }
        );

        observer.observe(el);
        return () => observer.disconnect();
    }, [staggerIndex]);

    return (
        <div
            ref={ref}
            className={`reveal-item ${visible ? "revealed" : ""} ${className}`}
        >
            {children}
        </div>
    );
}
