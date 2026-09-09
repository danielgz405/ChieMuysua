import { ArrowLongRightIcon, ArrowUpRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export function OnlineReadingsCare() {
  return (
    <section
      aria-labelledby="online-readings-care-title"
      className="bg-paper-deep text-ink"
    >
      <div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[0.8fr_1.2fr] lg:items-end lg:gap-24 lg:px-12 lg:py-28">
        <div>
          <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-sepia">
            <span>03</span>
            <span className="h-px w-10 bg-sepia/50" aria-hidden="true" />
            <span>Nota de cuidado</span>
          </div>
          <p className="mt-8 max-w-xs font-mono text-[10px] uppercase leading-5 tracking-[0.12em] text-sepia">
            La herramienta invita a observar. No toma decisiones por ti ni
            sustituye la ayuda profesional que puedas necesitar.
          </p>
        </div>
        <div>
          <h2
            id="online-readings-care-title"
            className="max-w-4xl font-display text-[clamp(2.8rem,5vw,5.4rem)] leading-[0.88] tracking-[-0.045em] text-ink"
          >
            Entra con curiosidad. Sal con tu criterio.
          </h2>
          <blockquote className="mt-8 max-w-3xl border-l border-sepia/60 pl-5 font-display text-2xl leading-tight text-ink/80 sm:pl-6 sm:text-3xl">
            “La lectura no cierra el futuro: devuelve una pregunta más precisa al presente.”
          </blockquote>
          <div className="mt-9 flex flex-col items-start gap-5 sm:flex-row sm:items-center">
            <Link
              href="/etica"
              className="group inline-flex items-center gap-3 border-b border-sepia/60 pb-2 font-mono text-[10px] uppercase tracking-[0.16em] text-sepia transition-colors hover:border-ink hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sepia"
            >
              Leer los principios
              <ArrowUpRightIcon
                className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>
            <Link
              href="#lecturas"
              className="group inline-flex items-center gap-4 border border-ink bg-ink px-5 py-3 font-mono text-[10px] uppercase tracking-[0.15em] text-paper transition-colors hover:bg-transparent hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sepia"
            >
              Volver al catálogo
              <ArrowLongRightIcon
                className="h-4 w-4 transition-transform group-hover:translate-x-1"
                aria-hidden="true"
              />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
