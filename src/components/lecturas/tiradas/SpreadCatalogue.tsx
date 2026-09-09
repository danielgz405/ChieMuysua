import { ArrowLongRightIcon, ArrowUpRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { tarotSpreads } from "@/utils/readings/spreads";

export function SpreadCatalogue() {
  return (
    <section
      id="catalogo"
      aria-labelledby="spread-catalogue-title"
      className="bg-paper text-ink"
    >
      <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-36">
        <div className="grid gap-12 lg:grid-cols-[0.78fr_1.22fr] lg:gap-24">
          <div>
            <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-sepia">
              <span>01</span>
              <span className="h-px w-10 bg-sepia/50" aria-hidden="true" />
              <span>El catálogo</span>
            </div>
            <h2
              id="spread-catalogue-title"
              className="mt-8 max-w-xl font-display text-[clamp(3.4rem,6vw,6.8rem)] leading-[0.84] tracking-[-0.05em] text-ink"
            >
              Doce formas de abrir un campo.
            </h2>
          </div>
          <div className="max-w-2xl lg:justify-self-end">
            <p className="text-base leading-7 text-ink/75 sm:text-lg sm:leading-8">
              La cantidad de cartas no mide la profundidad de una lectura. Lo
              importante es que la estructura ayude a formular mejor la
              pregunta y deje espacio para relacionar las imágenes.
            </p>
            <div className="mt-8 grid grid-cols-3 border-y border-paper-deep">
              <div className="py-4 pr-4">
                <p className="font-display text-3xl leading-none">05</p>
                <p className="mt-2 font-mono text-[9px] uppercase tracking-[0.14em] text-sepia">
                  básicas
                </p>
              </div>
              <div className="border-l border-paper-deep px-4 py-4">
                <p className="font-display text-3xl leading-none">04</p>
                <p className="mt-2 font-mono text-[9px] uppercase tracking-[0.14em] text-sepia">
                  temáticas
                </p>
              </div>
              <div className="border-l border-paper-deep pl-4 py-4">
                <p className="font-display text-3xl leading-none">03</p>
                <p className="mt-2 font-mono text-[9px] uppercase tracking-[0.14em] text-sepia">
                  prácticas
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 lg:mt-24">
          <div className="hidden grid-cols-[4.5rem_minmax(0,1fr)_10rem_15rem_7rem] gap-5 border-y border-paper-deep py-4 font-mono text-[9px] uppercase tracking-[0.16em] text-sepia lg:grid">
            <span>Placa</span>
            <span>Nombre</span>
            <span>Escala</span>
            <span>Posiciones</span>
            <span className="text-right">Acceso</span>
          </div>
          <ol aria-label="Catálogo de tiradas" className="border-y border-paper-deep">
            {tarotSpreads.map((spread) => {
              const visiblePositions = spread.positions.slice(0, 3);
              const remainingPositions = spread.positions.length - visiblePositions.length;
              const cardLabel = spread.cardCount
                ? `${String(spread.cardCount).padStart(2, "0")} ${spread.cardCount === 1 ? "carta" : "cartas"}`
                : "antes de extraer";

              return (
                <li key={spread.slug} className="border-b border-paper-deep last:border-b-0">
                  <Link
                    href={`/lecturas/online/${spread.slug}`}
                    className="group grid gap-5 py-6 transition-colors hover:bg-paper-deep/25 focus-visible:relative focus-visible:z-10 focus-visible:outline-2 focus-visible:outline-offset-[-2px] focus-visible:outline-sepia sm:px-3 lg:grid-cols-[4.5rem_minmax(0,1fr)_10rem_15rem_7rem] lg:items-center lg:gap-5 lg:py-5"
                  >
                    <span className="font-mono text-[10px] tracking-[0.18em] text-sepia">
                      {spread.index}
                    </span>
                    <div>
                      <div className="flex items-start justify-between gap-4">
                        <h3 className="font-display text-3xl leading-none text-ink sm:text-4xl">
                          {spread.name}
                        </h3>
                        <ArrowUpRightIcon
                          className="h-4 w-4 shrink-0 text-sepia transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 lg:hidden"
                          aria-hidden="true"
                        />
                      </div>
                      <p className="mt-3 max-w-xl text-sm leading-6 text-ink/65">
                        {spread.summary}
                      </p>
                    </div>
                    <div className="flex items-center justify-between gap-4 border-t border-paper-deep pt-4 font-mono text-[9px] uppercase tracking-[0.14em] text-sepia lg:block lg:border-t-0 lg:pt-0">
                      <span>{cardLabel}</span>
                      <span className="lg:mt-2 lg:block">{spread.category}</span>
                    </div>
                    <p className="font-mono text-[9px] uppercase leading-5 tracking-[0.13em] text-sepia/80">
                      {visiblePositions.join(" / ")}
                      {remainingPositions > 0 ? ` / +${remainingPositions}` : ""}
                    </p>
                    <span className="hidden items-center justify-end gap-2 font-mono text-[9px] uppercase tracking-[0.14em] text-sepia lg:flex">
                      Abrir ficha
                      <ArrowLongRightIcon
                        className="h-4 w-4 transition-transform group-hover:translate-x-1"
                        aria-hidden="true"
                      />
                    </span>
                  </Link>
                </li>
              );
            })}
          </ol>
        </div>

        <div className="mt-14 flex flex-col gap-5 border-t border-paper-deep pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xl font-mono text-[10px] uppercase leading-5 tracking-[0.14em] text-sepia">
            Elige la estructura que puedas habitar con atención. Una pregunta
            clara vale más que una tirada extensa.
          </p>
          <Link
            href="/lecturas/online/formular-preguntas"
            className="group inline-flex items-center gap-3 self-start border-b border-sepia/60 pb-2 font-mono text-[10px] uppercase tracking-[0.16em] text-sepia transition-colors hover:border-ink hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sepia"
          >
            Formular una pregunta
            <ArrowUpRightIcon
              className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
