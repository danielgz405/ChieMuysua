import { TarotDeckDepth } from "@/components/tarot/que-es-el-tarot/TarotDeckDepth";

export function TarotDeckSection() {
  return (
    <section
      id="estructura"
      aria-labelledby="tarot-deck-title"
      className="bg-night text-paper"
    >
      <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-36">
        <div className="grid gap-14 lg:grid-cols-[0.86fr_1.14fr] lg:items-center lg:gap-24">
          <div>
            <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-astral">
              <span>01</span>
              <span className="h-px w-10 bg-astral/60" aria-hidden="true" />
              <span>La baraja</span>
            </div>
            <h2
              id="tarot-deck-title"
              className="mt-8 max-w-xl font-display text-[clamp(3.2rem,6vw,6.6rem)] leading-[0.85] tracking-[-0.05em] text-paper"
            >
              Una baraja, dos escalas de lectura.
            </h2>
            <p className="mt-8 max-w-lg text-base leading-7 text-paper/70 sm:text-lg sm:leading-8">
              El tarot se organiza en 22 arcanos mayores y 56 arcanos menores.
              Los primeros pueden señalar grandes umbrales o movimientos de una
              historia; los segundos acercan la lectura a los gestos, los
              vínculos y las circunstancias concretas.
            </p>
            <p className="mt-5 max-w-lg text-base leading-7 text-paper/55">
              La palabra <em>arcano</em> alude a algo reservado o por descubrir.
              En una lectura, cada carta conserva esa doble condición: muestra
              una imagen y deja espacio para interpretarla.
            </p>
          </div>

          <TarotDeckDepth>
            <div className="relative overflow-hidden border border-astral/30 bg-night-soft p-5 sm:p-8">
              <div
                className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full border border-astral/20"
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
                    Inventario de la baraja
                  </p>
                  <p className="mt-2 font-display text-4xl leading-none text-paper sm:text-5xl">
                    78 cartas
                  </p>
                </div>
                <span className="font-mono text-[10px] text-brass">AT / 01</span>
              </div>

              <dl className="divide-y divide-astral/20">
                <div className="grid grid-cols-[5rem_minmax(0,1fr)] gap-5 py-7 sm:grid-cols-[7rem_minmax(0,1fr)] sm:gap-8">
                  <dd className="font-display text-6xl leading-none text-brass sm:text-7xl">22</dd>
                  <div>
                    <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-paper">
                      Arcanos mayores
                    </dt>
                    <dd className="mt-3 text-sm leading-6 text-paper/60">
                      Imágenes de paso, crisis, aprendizaje y transformación.
                      No representan una sentencia, sino un campo de lectura
                      amplio.
                    </dd>
                  </div>
                </div>
                <div className="grid grid-cols-[5rem_minmax(0,1fr)] gap-5 py-7 sm:grid-cols-[7rem_minmax(0,1fr)] sm:gap-8">
                  <dd className="font-display text-6xl leading-none text-brass sm:text-7xl">56</dd>
                  <div>
                    <dt className="font-mono text-[10px] uppercase tracking-[0.16em] text-paper">
                      Arcanos menores
                    </dt>
                    <dd className="mt-3 text-sm leading-6 text-paper/60">
                      Cuatro palos y catorce rangos para observar lo cotidiano:
                      acciones, emociones, pensamientos y recursos.
                    </dd>
                  </div>
                </div>
              </dl>

              <div className="grid grid-cols-2 gap-x-6 gap-y-3 border-t border-astral/25 pt-5 font-mono text-[9px] uppercase tracking-[0.14em] text-astral sm:grid-cols-4">
                <span>Bastos / impulso</span>
                <span>Copas / vínculo</span>
                <span>Espadas / mente</span>
                <span>Oros / materia</span>
              </div>
              </div>
            </div>
          </TarotDeckDepth>
        </div>
      </div>
    </section>
  );
}
