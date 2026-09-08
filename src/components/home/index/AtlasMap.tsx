"use client";

import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useAtlasParallax } from "@/hooks/ui/use-atlas-parallax";
import { siteNavigation } from "@/utils/navigation/site-map";

export function AtlasMap() {
  const { handlePointerLeave, handlePointerMove, pointer, reducedMotion } =
    useAtlasParallax();

  return (
    <section
      id="mapa"
      aria-labelledby="atlas-map-title"
      className="bg-night-soft text-paper"
    >
      <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-36">
        <div className="flex flex-col gap-6 border-b border-astral/25 pb-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-astral">
              <span>Cartografía del sitio</span>
              <span className="h-px w-10 bg-astral/60" aria-hidden="true" />
              <span>08 coordenadas</span>
            </p>
            <h2
              id="atlas-map-title"
              className="mt-6 max-w-3xl font-display text-[clamp(3rem,6vw,6rem)] leading-[0.85] tracking-[-0.045em] text-paper"
            >
              Elige una órbita para comenzar.
            </h2>
          </div>
          <p className="max-w-xs font-mono text-[10px] uppercase leading-5 tracking-[0.14em] text-astral/75">
            Mueve el puntero sobre el mapa para inclinar el archivo. En móvil,
            explora cada coordenada directamente.
          </p>
        </div>

        <div
          className="relative mt-10 overflow-hidden border border-astral/25 bg-night px-4 py-5 sm:px-8 sm:py-8 lg:mt-14 lg:min-h-[720px] lg:px-10 lg:py-10"
          onPointerMove={handlePointerMove}
          onPointerLeave={handlePointerLeave}
        >
          <div className="pointer-events-none absolute inset-0 opacity-70" aria-hidden="true">
            <div className="absolute left-1/2 top-1/2 h-[22rem] w-[22rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-astral/20 sm:h-[34rem] sm:w-[34rem]" />
            <div className="absolute left-1/2 top-1/2 h-[15rem] w-[15rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-dashed border-astral/20 sm:h-[25rem] sm:w-[25rem]" />
            <div className="absolute left-1/2 top-1/2 h-px w-[120%] -translate-x-1/2 -translate-y-1/2 bg-astral/15" />
            <div className="absolute left-1/2 top-1/2 h-[120%] w-px -translate-x-1/2 -translate-y-1/2 bg-astral/15" />
            <div className="absolute left-1/2 top-1/2 h-[1px] w-[70%] -translate-x-1/2 rotate-[28deg] bg-astral/10" />
          </div>

          <div
            className="relative z-10 min-h-[620px] transition-transform duration-700 ease-out lg:min-h-[640px]"
            style={
              reducedMotion
                ? undefined
                : {
                    transform: `perspective(1600px) rotateX(${pointer.y * -2.8}deg) rotateY(${pointer.x * 4.5}deg)`,
                  }
            }
          >
            <div className="relative z-20 flex min-h-[260px] items-center justify-center lg:absolute lg:inset-0">
              <div className="relative flex h-52 w-52 items-center justify-center rounded-full border border-brass/70 bg-night-soft/95 text-center shadow-lg shadow-black/20 sm:h-64 sm:w-64">
                <div className="absolute inset-4 rounded-full border border-astral/35" aria-hidden="true" />
                <div className="absolute inset-1/2 h-px w-[72%] -translate-x-1/2 bg-astral/35" aria-hidden="true" />
                <div className="absolute inset-1/2 h-[72%] w-px -translate-y-1/2 bg-astral/35" aria-hidden="true" />
                <div className="relative flex flex-col items-center">
                  <span className="font-mono text-[9px] uppercase tracking-[0.22em] text-brass">
                    Índice / general
                  </span>
                  <span className="mt-3 font-display text-6xl leading-none tracking-[-0.06em] text-paper sm:text-7xl">
                    Atlas
                  </span>
                  <span className="mt-4 font-mono text-[9px] uppercase tracking-[0.16em] text-astral">
                    08 secciones / 01 origen
                  </span>
                </div>
              </div>
            </div>

            <div className="relative z-30 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:absolute lg:inset-0 lg:block">
              {siteNavigation.map((section) => (
                <div
                  key={section.href}
                  className={`lg:absolute lg:w-52 ${section.positionClass}`}
                  style={
                    reducedMotion
                      ? undefined
                      : {
                          transform: `translate3d(${pointer.x * section.depth}px, ${pointer.y * section.depth}px, 0)`,
                        }
                  }
                >
                  <Link
                    href={section.href}
                    className="group block border border-astral/35 bg-night/95 p-4 transition-colors duration-300 hover:border-brass focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brass"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <span className="font-mono text-[9px] tracking-[0.2em] text-brass">
                        {section.index}
                      </span>
                      <ArrowUpRightIcon
                        className="h-4 w-4 text-astral transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-brass"
                        aria-hidden="true"
                      />
                    </div>
                    <h3 className="mt-5 font-display text-3xl leading-none text-paper">
                      {section.label}
                    </h3>
                    <p className="mt-3 text-sm leading-5 text-paper/60">
                      {section.summary}
                    </p>
                    <div className="mt-5 flex items-center justify-between border-t border-astral/20 pt-3 font-mono text-[8px] uppercase tracking-[0.13em] text-astral">
                      <span>Explorar</span>
                      <span>{section.coordinate}</span>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>

          <div className="relative z-40 mt-5 flex items-center justify-between border-t border-astral/20 pt-4 font-mono text-[9px] uppercase tracking-[0.16em] text-astral lg:absolute lg:bottom-6 lg:left-10 lg:right-10 lg:mt-0">
            <span>Interacción / perspectiva orbital</span>
            <span className="hidden sm:inline">
              {reducedMotion ? "Movimiento reducido" : "Movimiento activo"}
            </span>
            <span>Atlas 00</span>
          </div>
        </div>
      </div>
    </section>
  );
}
