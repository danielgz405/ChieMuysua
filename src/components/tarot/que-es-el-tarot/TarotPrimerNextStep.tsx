import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export function TarotPrimerNextStep() {
  return (
    <section className="bg-paper-deep text-ink">
      <div className="mx-auto grid max-w-[1440px] gap-10 px-5 py-16 sm:px-8 sm:py-20 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-24 lg:px-12 lg:py-28">
        <div>
          <p className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-sepia">
            <span className="h-px w-10 bg-sepia/60" aria-hidden="true" />
            Siguiente coordenada
          </p>
          <h2 className="mt-7 max-w-xl font-display text-[clamp(2.8rem,5vw,5.4rem)] leading-[0.88] tracking-[-0.045em] text-ink">
            Ya tienes el mapa. Ahora elige dónde mirar.
          </h2>
        </div>
        <div className="flex flex-col items-start gap-5 sm:flex-row sm:items-center sm:justify-end">
          <Link
            href="/tarot"
            className="inline-flex items-center gap-4 border border-sepia/70 px-5 py-3 font-mono text-[10px] uppercase tracking-[0.15em] text-sepia transition-colors hover:bg-sepia hover:text-paper focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sepia"
          >
            Explorar el archivo
          </Link>
          <Link
            href="/lecturas/online"
            className="group inline-flex items-center gap-4 border border-ink bg-ink px-5 py-3 font-mono text-[10px] uppercase tracking-[0.15em] text-paper transition-colors hover:bg-transparent hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sepia"
          >
            Abrir una lectura
            <ArrowLongRightIcon
              className="h-4 w-4 transition-transform group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
