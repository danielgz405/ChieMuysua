import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export function OnlineReadingPrinciples() {
  return (
    <section
      aria-labelledby="online-reading-principles-title"
      className="bg-night-soft text-paper"
    >
      <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-36">
        <div className="grid gap-14 lg:grid-cols-[0.82fr_1.18fr] lg:gap-24">
          <div>
            <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-astral">
              <span>02</span>
              <span className="h-px w-10 bg-astral/60" aria-hidden="true" />
              <span>El ritmo</span>
            </div>
            <h2
              id="online-reading-principles-title"
              className="mt-8 max-w-2xl font-display text-[clamp(3.3rem,6vw,6.5rem)] leading-[0.85] tracking-[-0.05em] text-paper"
            >
              La lectura empieza antes de la primera carta.
            </h2>
            <p className="mt-8 max-w-xl text-base leading-7 text-paper/70 sm:text-lg sm:leading-8">
              El espacio online no elimina el ritual. Lo vuelve sencillo: una
              pregunta, una escala y el tiempo suficiente para mirar sin saltar
              directamente a una conclusión.
            </p>
            <Link
              href="#lecturas"
              className="group mt-8 inline-flex items-center gap-3 border-b border-brass/60 pb-2 font-mono text-[10px] uppercase tracking-[0.16em] text-brass transition-colors hover:border-paper hover:text-paper focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brass"
            >
              Volver al catálogo online
              <ArrowUpRightIcon
                className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>
          </div>

          <ol className="border-y border-astral/25">
            <li className="grid grid-cols-[4rem_minmax(0,1fr)] gap-5 border-b border-astral/20 py-7 sm:grid-cols-[5rem_minmax(0,1fr)] sm:gap-8">
              <span className="font-display text-5xl leading-none text-brass sm:text-6xl">01</span>
              <div>
                <h3 className="font-display text-3xl text-paper">Nombra el foco</h3>
                <p className="mt-3 max-w-lg text-sm leading-6 text-paper/60">
                  Una pregunta habitable no exige una predicción. Delimita el
                  campo en el que quieres reconocer algo.
                </p>
              </div>
            </li>
            <li className="grid grid-cols-[4rem_minmax(0,1fr)] gap-5 border-b border-astral/20 py-7 sm:grid-cols-[5rem_minmax(0,1fr)] sm:gap-8">
              <span className="font-display text-5xl leading-none text-brass sm:text-6xl">02</span>
              <div>
                <h3 className="font-display text-3xl text-paper">Respeta la escala</h3>
                <p className="mt-3 max-w-lg text-sm leading-6 text-paper/60">
                  Más cartas no significa más certeza. Elige la cantidad de
                  relación que puedes leer con atención.
                </p>
              </div>
            </li>
            <li className="grid grid-cols-[4rem_minmax(0,1fr)] gap-5 py-7 sm:grid-cols-[5rem_minmax(0,1fr)] sm:gap-8">
              <span className="font-display text-5xl leading-none text-brass sm:text-6xl">03</span>
              <div>
                <h3 className="font-display text-3xl text-paper">Deja que aparezca la relación</h3>
                <p className="mt-3 max-w-lg text-sm leading-6 text-paper/60">
                  La interpretación se abre entre las cartas, sus posiciones y
                  la experiencia concreta de quien pregunta.
                </p>
              </div>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
}
