"use client";

import { useDeferredValue, useState } from "react";
import { ArcanaCard } from "@/components/tarot/los-78-arcanos/ArcanaCard";
import { ArcanaFilters } from "@/components/tarot/los-78-arcanos/ArcanaFilters";
import {
  arcana,
  arcanaSuits,
  type ArcanaKindFilter,
  type ArcanaSuitFilter,
} from "@/utils/tarot/arcana";

export function ArcanaCatalogue() {
  const [kind, setKind] = useState<ArcanaKindFilter>("all");
  const [suit, setSuit] = useState<ArcanaSuitFilter>("all");
  const [search, setSearch] = useState("");
  const deferredSearch = useDeferredValue(search);
  const normalizedSearch = deferredSearch.trim().toLowerCase();
  const visibleArcana = arcana.filter((card) => {
    const matchesKind = kind === "all" || card.kind === kind;
    const matchesSuit = suit === "all" || card.suit === suit;
    const searchableText = [
      card.name,
      card.description,
      card.suit ?? "",
      ...card.keywords,
    ]
      .join(" ")
      .toLowerCase();
    const matchesSearch =
      normalizedSearch.length === 0 || searchableText.includes(normalizedSearch);

    return matchesKind && matchesSuit && matchesSearch;
  });
  const isUpdating = search !== deferredSearch;

  return (
    <section
      id="catalogo"
      aria-labelledby="arcana-catalogue-title"
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
              id="arcana-catalogue-title"
              className="mt-8 max-w-xl font-display text-[clamp(3.4rem,6vw,6.8rem)] leading-[0.84] tracking-[-0.05em] text-ink"
            >
              Una baraja, cuatro familias, muchas entradas.
            </h2>
          </div>
          <div className="max-w-2xl lg:justify-self-end">
            <p className="text-base leading-7 text-ink/75 sm:text-lg sm:leading-8">
              El índice sigue la organización más extendida del tarot occidental:
              22 mayores y 56 menores. La numeración de los mayores toma como
              referencia el orden Rider-Waite-Smith; otras tradiciones pueden
              intercambiar la posición de La Fuerza y La Justicia.
            </p>
            <div className="mt-8 grid grid-cols-2 border-y border-paper-deep sm:grid-cols-4">
              <div className="py-4 pr-4">
                <p className="font-display text-3xl leading-none">22</p>
                <p className="mt-2 font-mono text-[9px] uppercase tracking-[0.14em] text-sepia">
                  mayores
                </p>
              </div>
              <div className="border-l border-paper-deep px-4 py-4">
                <p className="font-display text-3xl leading-none">56</p>
                <p className="mt-2 font-mono text-[9px] uppercase tracking-[0.14em] text-sepia">
                  menores
                </p>
              </div>
              <div className="border-t border-paper-deep py-4 pr-4 sm:border-l sm:border-t-0 sm:px-4">
                <p className="font-display text-3xl leading-none">04</p>
                <p className="mt-2 font-mono text-[9px] uppercase tracking-[0.14em] text-sepia">
                  palos
                </p>
              </div>
              <div className="border-l border-t border-paper-deep px-4 py-4 sm:border-t-0">
                <p className="font-display text-3xl leading-none">14</p>
                <p className="mt-2 font-mono text-[9px] uppercase tracking-[0.14em] text-sepia">
                  rangos
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 lg:mt-24">
          <ArcanaFilters
            kind={kind}
            suit={suit}
            search={search}
            onKindChange={(nextKind) => {
              setKind(nextKind);

              if (nextKind === "major") {
                setSuit("all");
              }
            }}
            onSuitChange={setSuit}
            onSearchChange={setSearch}
          />
          <div className="flex flex-col gap-2 border-b border-paper-deep py-4 font-mono text-[9px] uppercase tracking-[0.14em] text-sepia sm:flex-row sm:items-center sm:justify-between">
            <p aria-live="polite">
              {isUpdating ? "Actualizando el índice" : `${visibleArcana.length} piezas visibles`}
            </p>
            <p>Orden de archivo / mayores primero</p>
          </div>

          {visibleArcana.length > 0 ? (
            <div
              id="arcana-grid"
              className="mt-8 grid grid-cols-1 gap-x-5 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5"
            >
              {visibleArcana.map((card) => (
                <ArcanaCard key={card.id} arcana={card} />
              ))}
            </div>
          ) : (
            <div className="mt-8 border border-paper-deep px-5 py-12 text-center sm:px-8">
              <p className="font-display text-3xl text-ink">No hay cartas en esta coordenada.</p>
              <p className="mx-auto mt-3 max-w-md text-sm leading-6 text-ink/65">
                Prueba con otro nombre, palabra clave o familia para volver a abrir el
                campo de búsqueda.
              </p>
              <button
                type="button"
                onClick={() => {
                  setKind("all");
                  setSuit("all");
                  setSearch("");
                }}
                className="mt-6 border border-sepia px-4 py-2 font-mono text-[10px] uppercase tracking-[0.15em] text-sepia transition-colors hover:bg-sepia hover:text-paper focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sepia"
              >
                Restablecer filtros
              </button>
            </div>
          )}
        </div>

        <div className="mt-16 grid border-t border-paper-deep pt-6 sm:grid-cols-4 sm:gap-5 lg:mt-24">
          {arcanaSuits.map((arcanaSuit, index) => (
            <div
              key={arcanaSuit.suit}
              className="flex gap-4 border-b border-paper-deep py-5 last:border-b-0 sm:border-b-0 sm:border-r sm:py-0 sm:pr-5 sm:last:border-r-0"
            >
              <span className="font-mono text-[10px] text-sepia">0{index + 1}</span>
              <div>
                <h3 className="font-display text-2xl leading-none">{arcanaSuit.label}</h3>
                <p className="mt-2 text-sm leading-6 text-ink/60">{arcanaSuit.focus}.</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
