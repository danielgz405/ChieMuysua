"use client";

import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { Tab, TabGroup, TabList } from "@headlessui/react";
import type {
  ArcanaKindFilter,
  ArcanaSuitFilter,
} from "@/utils/tarot/arcana";
import { arcanaSuits } from "@/utils/tarot/arcana";

type ArcanaFiltersProps = {
  kind: ArcanaKindFilter;
  suit: ArcanaSuitFilter;
  search: string;
  onKindChange: (kind: ArcanaKindFilter) => void;
  onSuitChange: (suit: ArcanaSuitFilter) => void;
  onSearchChange: (search: string) => void;
};

const kindFilters: ReadonlyArray<{
  value: ArcanaKindFilter;
  label: string;
  count: string;
}> = [
  { value: "all", label: "Todos", count: "78" },
  { value: "major", label: "Mayores", count: "22" },
  { value: "minor", label: "Menores", count: "56" },
];

export function ArcanaFilters({
  kind,
  suit,
  search,
  onKindChange,
  onSuitChange,
  onSearchChange,
}: ArcanaFiltersProps) {
  const selectedKindIndex = Math.max(
    0,
    kindFilters.findIndex((filter) => filter.value === kind),
  );

  return (
    <div className="border-y border-paper-deep py-5">
      <div className="flex flex-col gap-6 xl:flex-row xl:items-end xl:justify-between">
        <div>
          <p className="mb-3 font-mono text-[9px] uppercase tracking-[0.18em] text-sepia">
            Escala del archivo
          </p>
          <TabGroup
            selectedIndex={selectedKindIndex}
            onChange={(index) => {
              const nextKind = kindFilters[index];

              if (nextKind) {
                onKindChange(nextKind.value);
              }
            }}
          >
            <TabList className="flex flex-wrap gap-2" aria-label="Escala de arcanos">
              {kindFilters.map((filter) => (
                <Tab
                  key={filter.value}
                  className={({ selected }) =>
                    `border px-3 py-2 font-mono text-[10px] uppercase tracking-[0.14em] outline-none transition-colors focus-visible:ring-2 focus-visible:ring-sepia focus-visible:ring-offset-2 focus-visible:ring-offset-paper ${
                      selected
                        ? "border-ink bg-ink text-paper"
                        : "border-paper-deep text-sepia hover:border-sepia hover:text-ink"
                    }`
                  }
                >
                  {filter.label} / {filter.count}
                </Tab>
              ))}
            </TabList>
          </TabGroup>
        </div>

        <div className="grid gap-4 sm:grid-cols-[minmax(0,1fr)_minmax(170px,0.45fr)] xl:min-w-[540px]">
          <label className="block">
            <span className="mb-2 block font-mono text-[9px] uppercase tracking-[0.18em] text-sepia">
              Buscar en el índice
            </span>
            <span className="flex items-center border border-paper-deep bg-paper px-3 transition-colors focus-within:border-ink">
              <MagnifyingGlassIcon className="mr-2 h-4 w-4 shrink-0 text-sepia" aria-hidden="true" />
              <input
                type="search"
                value={search}
                onChange={(event) => onSearchChange(event.target.value)}
                placeholder="Nombre o palabra clave"
                className="min-w-0 flex-1 bg-transparent py-2 font-mono text-[11px] text-ink outline-none placeholder:text-sepia/60"
              />
            </span>
          </label>

          <label className="block">
            <span className="mb-2 block font-mono text-[9px] uppercase tracking-[0.18em] text-sepia">
              Familia menor
            </span>
            <select
              value={suit}
              disabled={kind === "major"}
              onChange={(event) =>
                onSuitChange(event.target.value as ArcanaSuitFilter)
              }
              className="w-full border border-paper-deep bg-paper px-3 py-2.5 font-mono text-[11px] text-ink outline-none transition-colors focus:border-ink focus:ring-2 focus:ring-sepia focus:ring-offset-2 focus:ring-offset-paper disabled:cursor-not-allowed disabled:bg-paper-deep/40 disabled:text-sepia/60"
            >
              <option value="all">Todos los palos</option>
              {arcanaSuits.map((arcanaSuit) => (
                <option key={arcanaSuit.suit} value={arcanaSuit.suit}>
                  {arcanaSuit.label}
                </option>
              ))}
            </select>
          </label>
        </div>
      </div>
    </div>
  );
}
