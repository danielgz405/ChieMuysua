import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export function SpreadPrinciples() {
  return (
    <section
      id="principios"
      aria-labelledby="spread-principles-title"
      className="bg-night-soft text-paper"
    >
      <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-36">
        <div className="grid gap-14 lg:grid-cols-[0.86fr_1.14fr] lg:items-center lg:gap-24">
          <div>
            <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-astral">
              <span>02</span>
              <span className="h-px w-10 bg-astral/60" aria-hidden="true" />
              <span>La estructura</span>
            </div>
            <h2
              id="spread-principles-title"
              className="mt-8 max-w-2xl font-display text-[clamp(3.3rem,6vw,6.5rem)] leading-[0.85] tracking-[-0.05em] text-paper"
            >
              Una tirada es un marco, no una respuesta.
            </h2>
            <p className="mt-8 max-w-xl text-base leading-7 text-paper/70 sm:text-lg sm:leading-8">
              Las posiciones ordenan la mirada, pero no fijan el significado de
              las cartas. El contexto, la orientación y la relación entre las
              imágenes mantienen abierta la interpretación.
            </p>
            <Link
              href="/lecturas/interpretacion"
              className="group mt-8 inline-flex items-center gap-3 border-b border-brass/60 pb-2 font-mono text-[10px] uppercase tracking-[0.16em] text-brass transition-colors hover:border-paper hover:text-paper focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brass"
            >
              Estudiar la interpretación
              <ArrowUpRightIcon
                className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>
          </div>

          <div className="border border-astral/25 bg-night p-5 sm:p-8">
            <div className="flex items-end justify-between border-b border-astral/25 pb-5">
              <div>
                <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-astral">
                  Secuencia de lectura
                </p>
                <p className="mt-2 font-display text-4xl leading-none text-paper sm:text-5xl">
                  Tres cuidados
                </p>
              </div>
              <span className="font-mono text-[10px] text-brass">AT / 05</span>
            </div>

            <ol className="divide-y divide-astral/20">
              <li className="grid grid-cols-[3.5rem_minmax(0,1fr)] gap-4 py-7 sm:grid-cols-[5rem_minmax(0,1fr)] sm:gap-6">
                <span className="font-display text-5xl leading-none text-brass sm:text-6xl">01</span>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-paper">
                    Formular
                  </p>
                  <p className="mt-2 text-sm leading-6 text-paper/55">
                    Dar un borde a la inquietud sin convertirla en una orden para la baraja.
                  </p>
                </div>
              </li>
              <li className="grid grid-cols-[3.5rem_minmax(0,1fr)] gap-4 py-7 sm:grid-cols-[5rem_minmax(0,1fr)] sm:gap-6">
                <span className="font-display text-5xl leading-none text-brass sm:text-6xl">02</span>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-paper">
                    Situar
                  </p>
                  <p className="mt-2 text-sm leading-6 text-paper/55">
                    Leer cada carta desde el lugar que ocupa y la orientación que presenta.
                  </p>
                </div>
              </li>
              <li className="grid grid-cols-[3.5rem_minmax(0,1fr)] gap-4 py-7 sm:grid-cols-[5rem_minmax(0,1fr)] sm:gap-6">
                <span className="font-display text-5xl leading-none text-brass sm:text-6xl">03</span>
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-paper">
                    Relacionar
                  </p>
                  <p className="mt-2 text-sm leading-6 text-paper/55">
                    Volver al conjunto antes de convertir una imagen en una conclusión.
                  </p>
                </div>
              </li>
            </ol>

            <div className="flex items-center justify-between border-t border-astral/25 pt-5 font-mono text-[9px] uppercase tracking-[0.14em] text-astral">
              <span>Pregunta / posición / relación</span>
              <span>Lectura situada</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
