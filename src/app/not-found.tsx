import Link from "next/link";

export default function NotFound() {
    return (
        <div className="min-h-screen bg-[var(--color-bg)] flex items-center justify-center px-5">
            <div className="text-center space-y-6">
                <p className="font-mono text-xs uppercase tracking-widest text-[var(--color-text)] opacity-60">
                    404
                </p>
                <h1 className="font-heading font-medium text-[var(--color-text)] text-4xl">
                    That page doesn&apos;t exist.
                </h1>
                <Link
                    href="/"
                    className="inline-flex items-center min-h-[44px] px-5 py-2.5 rounded-[12px] bg-[var(--color-accent)] text-white font-medium text-base hover:bg-[var(--color-accent-dark)] transition-colors duration-150 no-underline focus-visible:outline focus-visible:outline-3 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent)]"
                >
                    Back to home
                </Link>
            </div>
        </div>
    );
}
