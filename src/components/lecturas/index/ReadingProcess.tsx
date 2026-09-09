import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export function ReadingProcess() {
  return (
    <section
      id="proceso"
      aria-labelledby="reading-process-title"
      className="bg-night-soft text-paper"
    >
      <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-36">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-24">
          <div>
            <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-astral">
              <span>02</span>
              <span className="h-px w-10 bg-astral/60" aria-hidden="true" />
              <span>El gesto de leer</span>
            </div>
            <h2
              id="reading-process-title"
              className="mt-8 max-w-2xl font-display text-[clamp(3.3rem,6vw,6.5rem)] leading-[0.85] tracking-[-0.05em] text-paper"
            >
              La carta nunca llega sola.
            </h2>
            <p className="mt-8 max-w-xl text-base leading-7 text-paper/70 sm:text-lg sm:leading-8">
              Su sentido nace del encuentro entre lo que preguntas, el lugar
              que ocupa y las imágenes que la rodean. La orientación derecha o
              invertida añade un matiz; no reemplaza la lectura del conjunto.
            </p>
            <Link
              href="/lecturas/interpretacion"
              className="group mt-8 inline-flex items-center gap-3 border-b border-brass/60 pb-2 font-mono text-[10px] uppercase tracking-[0.16em] text-brass transition-colors hover:border-paper hover:text-paper focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brass"
            >
              Explorar la interpretación
              <ArrowUpRightIcon
                className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>
          </div>

          <figure className="relative border border-astral/25 bg-night p-5 sm:p-8">
            <div
              className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full border border-astral/20 sm:-right-24 sm:-top-24 sm:h-72 sm:w-72"
              aria-hidden="true"
            >
              <div className="absolute inset-8 rounded-full border border-dashed border-astral/20" />
              <div className="absolute left-1/2 top-1/2 h-px w-full -translate-y-1/2 bg-astral/15" />
              <div className="absolute left-1/2 top-1/2 h-full w-px -translate-x-1/2 bg-astral/15" />
            </div>
            <div className="relative">
              <div className="flex items-end justify-between border-b border-astral/25 pb-5">
                <div>
                  <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-astral">
                    Mapa de una extracción
                  </p>
                  <p className="mt-2 font-display text-4xl leading-none text-paper sm:text-5xl">
                    Tres posiciones
                  </p>
                </div>
                <span className="font-mono text-[10px] text-brass">AT / 04</span>
              </div>

              <ol className="divide-y divide-astral/20">
                <li className="grid grid-cols-[3.5rem_minmax(0,1fr)_auto] items-center gap-4 py-7 sm:grid-cols-[5rem_minmax(0,1fr)_auto] sm:gap-6">
                  <span className="font-display text-5xl leading-none text-brass sm:text-6xl">01</span>
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-paper">
                      La pregunta
                    </p>
                    <p className="mt-2 text-sm leading-6 text-paper/55">
                      El foco que delimita la escena.
                    </p>
                  </div>
                  <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-astral">
                    origen
                  </span>
                </li>
                <li className="grid grid-cols-[3.5rem_minmax(0,1fr)_auto] items-center gap-4 py-7 sm:grid-cols-[5rem_minmax(0,1fr)_auto] sm:gap-6">
                  <span className="font-display text-5xl leading-none text-brass sm:text-6xl">02</span>
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-paper">
                      La posición
                    </p>
                    <p className="mt-2 text-sm leading-6 text-paper/55">
                      El lugar desde el que se observa.
                    </p>
                  </div>
                  <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-astral">
                    contexto
                  </span>
                </li>
                <li className="grid grid-cols-[3.5rem_minmax(0,1fr)_auto] items-center gap-4 py-7 sm:grid-cols-[5rem_minmax(0,1fr)_auto] sm:gap-6">
                  <span className="font-display text-5xl leading-none text-brass sm:text-6xl">03</span>
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.16em] text-paper">
                      La relación
                    </p>
                    <p className="mt-2 text-sm leading-6 text-paper/55">
                      Lo que cambia al mirar el conjunto.
                    </p>
                  </div>
                  <span className="font-mono text-[9px] uppercase tracking-[0.12em] text-astral">
                    lectura
                  </span>
                </li>
              </ol>

              <div className="flex items-center justify-between border-t border-astral/25 pt-5 font-mono text-[9px] uppercase tracking-[0.14em] text-astral">
                <span>Derecha / invertida</span>
                <span>Sin cartas repetidas</span>
              </div>
            </div>
            <figcaption className="mt-5 border-t border-astral/20 pt-4 font-mono text-[9px] uppercase leading-4 tracking-[0.14em] text-astral/75">
              Fig. 05 / Una tirada es una composición situada
            </figcaption>
          </figure>
        </div>

        <div className="mt-16 grid border-y border-astral/25 lg:mt-24 lg:grid-cols-3 lg:divide-x lg:divide-astral/25">
          <article className="border-b border-astral/25 py-7 lg:border-b-0 lg:pr-10">
            <p className="font-mono text-[10px] text-brass">01 / Formular</p>
            <h3 className="mt-6 font-display text-3xl text-paper">Dar un borde</h3>
            <p className="mt-4 text-sm leading-6 text-paper/60">
              Una pregunta abierta pero concreta permite que aparezcan matices
              sin forzar una respuesta única.
            </p>
          </article>
          <article className="border-b border-astral/25 py-7 lg:border-b-0 lg:px-10">
            <p className="font-mono text-[10px] text-brass">02 / Extraer</p>
            <h3 className="mt-6 font-display text-3xl text-paper">Dejar espacio</h3>
            <p className="mt-4 text-sm leading-6 text-paper/60">
              Las cartas se revelan una a una para que cada posición conserve
              su tiempo y su peso dentro de la escena.
            </p>
          </article>
          <article className="py-7 lg:pl-10">
            <p className="font-mono text-[10px] text-brass">03 / Relacionar</p>
            <h3 className="mt-6 font-display text-3xl text-paper">Volver al conjunto</h3>
            <p className="mt-4 text-sm leading-6 text-paper/60">
              La interpretación se completa al escuchar los contrastes,
              repeticiones y silencios entre las imágenes.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
