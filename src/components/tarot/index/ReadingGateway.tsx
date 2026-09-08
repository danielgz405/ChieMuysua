import { ArrowLongRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export function ReadingGateway() {
  return (
    <section className="relative overflow-hidden bg-night-soft text-paper">
      <div className="mx-auto grid max-w-[1440px] gap-16 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-24 lg:px-12 lg:py-36">
        <div>
          <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-astral">
            <span>02</span>
            <span className="h-px w-10 bg-astral/60" aria-hidden="true" />
            <span>Lecturas online</span>
          </div>
          <h2 className="mt-8 max-w-xl font-display text-[clamp(3.4rem,6vw,6.5rem)] leading-[0.84] tracking-[-0.045em] text-paper">
            Una pregunta abre el cielo.
          </h2>
          <p className="mt-8 max-w-lg text-base leading-7 text-paper/65 sm:text-lg sm:leading-8">
            Elige un método, formula tu pregunta y deja que las cartas dibujen
            una constelación temporal. Una carta cada vez, sin prisa.
          </p>
          <Link
            href="/lecturas/online"
            className="group mt-9 inline-flex items-center gap-5 border border-brass px-5 py-3 font-mono text-[10px] uppercase tracking-[0.16em] text-brass transition-colors hover:bg-brass hover:text-night focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brass"
          >
            Elegir una tirada
            <ArrowLongRightIcon
              className="h-4 w-4 transition-transform group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
        </div>

        <div className="relative flex min-h-[22rem] items-center justify-center border border-astral/20 bg-night px-6 py-12 sm:min-h-[28rem] sm:px-12">
          <div
            className="pointer-events-none absolute left-1/2 top-1/2 h-[24rem] w-[24rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-astral/20 sm:h-[32rem] sm:w-[32rem]"
            aria-hidden="true"
          >
            <div className="absolute inset-12 rounded-full border border-dashed border-astral/20" />
            <div className="absolute inset-1/2 h-px w-full -translate-y-1/2 bg-astral/20" />
            <div className="absolute inset-1/2 h-full w-px -translate-x-1/2 bg-astral/20" />
          </div>
          <div className="relative flex w-full max-w-md items-end justify-center">
            <div className="relative z-10 -mr-5 aspect-[0.64] w-[28%] rotate-[-9deg] border border-astral/60 bg-night-soft p-2 shadow-lg shadow-black/20 sm:-mr-8 sm:p-3">
              <div className="flex h-full flex-col justify-between border border-astral/25 p-2 sm:p-3">
                <span className="font-mono text-[8px] text-astral">I</span>
                <span className="text-center font-display text-2xl text-astral sm:text-4xl">✶</span>
                <span className="font-mono text-[7px] uppercase tracking-[0.12em] text-astral">
                  Comienzo
                </span>
              </div>
            </div>
            <div className="relative z-20 aspect-[0.64] w-[32%] border border-brass/80 bg-paper p-2 text-ink shadow-lg shadow-black/30 sm:p-3">
              <div className="flex h-full flex-col justify-between border border-sepia/40 p-2 sm:p-3">
                <span className="font-mono text-[8px] text-sepia">XVII</span>
                <span className="text-center font-display text-3xl italic text-sepia sm:text-5xl">✦</span>
                <span className="font-mono text-[7px] uppercase tracking-[0.12em] text-sepia">
                  La estrella
                </span>
              </div>
            </div>
            <div className="relative z-10 -ml-5 aspect-[0.64] w-[28%] rotate-[9deg] border border-astral/60 bg-night-soft p-2 shadow-lg shadow-black/20 sm:-ml-8 sm:p-3">
              <div className="flex h-full flex-col justify-between border border-astral/25 p-2 sm:p-3">
                <span className="font-mono text-[8px] text-astral">II</span>
                <span className="text-center font-display text-2xl text-astral sm:text-4xl">◌</span>
                <span className="font-mono text-[7px] uppercase tracking-[0.12em] text-astral">
                  Umbral
                </span>
              </div>
            </div>
          </div>
          <p className="absolute bottom-4 left-5 font-mono text-[9px] uppercase tracking-[0.16em] text-astral sm:left-8">
            Campo de lectura / 03 posiciones
          </p>
        </div>
      </div>
    </section>
  );
}
