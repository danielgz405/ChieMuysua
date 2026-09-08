import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export function EthicsNote() {
  return (
    <section className="bg-paper-deep text-ink">
      <div className="mx-auto grid max-w-[1440px] gap-8 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[0.8fr_1.2fr] lg:items-end lg:gap-24 lg:px-12">
        <div>
          <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-sepia">
            <span>03</span>
            <span className="h-px w-10 bg-sepia/50" aria-hidden="true" />
            <span>Nota de uso</span>
          </div>
          <p className="mt-8 max-w-xs font-mono text-[10px] uppercase leading-5 tracking-[0.12em] text-sepia">
            Una lectura no reemplaza el criterio, la conversación ni el cuidado
            profesional.
          </p>
        </div>
        <div>
          <blockquote className="max-w-4xl font-display text-[clamp(2.4rem,5vw,5rem)] leading-[0.9] tracking-[-0.04em] text-ink">
            “Las cartas no dictan el camino. Devuelven la pregunta a quien la
            formula.”
          </blockquote>
          <Link
            href="/etica"
            className="group mt-8 inline-flex items-center gap-3 border-b border-sepia/60 pb-2 font-mono text-[10px] uppercase tracking-[0.16em] text-sepia transition-colors hover:border-ink hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sepia"
          >
            Leer los principios
            <ArrowUpRightIcon
              className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              aria-hidden="true"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
