import Link from "next/link";
import { GithubIcon } from "@/components/common/navigation/GithubIcon";

export function SiteFooter() {
  return (
    <footer className="border-t border-astral/25 bg-night px-5 py-10 text-paper sm:px-8 lg:px-12">
      <div className="mx-auto flex max-w-[1440px] flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-astral">
            Chie Muysua / Archivo vivo
          </p>
          <p className="mt-3 max-w-sm font-display text-2xl leading-tight text-paper">
            Una lectura atenta de las imágenes, los símbolos y las preguntas.
          </p>
        </div>
        <nav aria-label="Enlaces de pie de página" className="flex flex-wrap gap-5">
          <Link
            href="/etica"
            className="font-mono text-[10px] uppercase tracking-[0.15em] text-astral transition-colors hover:text-paper focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brass"
          >
            Ética
          </Link>
          <Link
            href="/blog"
            className="font-mono text-[10px] uppercase tracking-[0.15em] text-astral transition-colors hover:text-paper focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brass"
          >
            Blog
          </Link>
          <a
            href="https://github.com/danielgz405/ChieMuysua"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.15em] text-astral transition-colors hover:text-paper focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brass"
          >
            <GithubIcon className="h-4 w-4" />
            <span>GitHub</span>
          </a>
          <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-astral/60">
            2026
          </span>
        </nav>
      </div>
    </footer>
  );
}
