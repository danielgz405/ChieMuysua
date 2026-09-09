import {
  ArrowDownIcon,
  ArrowLongRightIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import blackboardImage from "@/assets/images/oc-the-blackboard.png";
import { OnlineReadingScene } from "@/components/lecturas/online/OnlineReadingScene";

export function OnlineReadingsHero() {
  return (
    <section
      aria-labelledby="online-readings-hero-title"
      className="relative isolate overflow-hidden border-b border-astral/25 bg-night text-paper"
    >
      <Image
        src={blackboardImage}
        alt=""
        fill
        priority
        sizes="100vw"
        aria-hidden="true"
        className="object-cover object-center opacity-25 grayscale"
      />
      <div className="absolute inset-0 bg-night/80" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -right-56 -top-40 h-[39rem] w-[39rem] rounded-full border border-astral/15 sm:-right-36 sm:h-[49rem] sm:w-[49rem]"
        aria-hidden="true"
      >
        <div className="absolute inset-12 rounded-full border border-dashed border-astral/15" />
        <div className="absolute left-1/2 top-1/2 h-px w-[125%] -translate-x-1/2 bg-astral/15" />
        <div className="absolute left-1/2 top-1/2 h-[125%] w-px -translate-y-1/2 bg-astral/15" />
      </div>

      <div className="relative mx-auto max-w-[1440px] px-5 pb-8 pt-5 sm:px-8 sm:pb-12 sm:pt-8 lg:px-12 lg:pb-16">
        <div className="flex items-center justify-between border-b border-astral/25 pb-3 font-mono text-[9px] uppercase tracking-[0.2em] text-astral sm:text-[10px]">
          <span>Atlas / Lecturas / Placa 06</span>
          <span className="hidden sm:inline">Mesa de lectura</span>
          <span>Acceso abierto</span>
        </div>

        <div className="grid items-center gap-14 py-16 sm:py-24 lg:min-h-[calc(100svh-7rem)] lg:grid-cols-[minmax(0,1fr)_390px] lg:gap-16 lg:py-24">
          <div className="max-w-4xl">
            <p className="mb-6 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.22em] text-brass">
              <span className="h-px w-10 bg-brass" aria-hidden="true" />
              Preparar una lectura
            </p>
            <h1
              id="online-readings-hero-title"
              className="max-w-4xl font-display text-[clamp(4rem,11vw,10rem)] leading-[0.78] tracking-[-0.06em] text-paper"
            >
              La mesa
              <span className="mt-5 block pl-[0.12em] text-astral italic">
                está abierta.
              </span>
            </h1>
            <p className="mt-10 max-w-2xl text-base leading-7 text-paper/70 sm:text-lg sm:leading-8">
              Elige una lectura y entra en la escena sin pedirle a las cartas
              una certeza cerrada. Cada método propone una distancia distinta
              para mirar lo que está en movimiento.
            </p>
            <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <Link
                href="#lecturas"
                className="group inline-flex items-center gap-5 border border-brass bg-brass px-5 py-3 font-mono text-[10px] uppercase tracking-[0.15em] text-night transition-colors hover:bg-transparent hover:text-brass focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brass"
              >
                Elegir una lectura
                <ArrowDownIcon
                  className="h-4 w-4 transition-transform group-hover:translate-y-1"
                  aria-hidden="true"
                />
              </Link>
              <Link
                href="#lecturas"
                className="group inline-flex items-center gap-3 border-b border-astral/50 py-2 font-mono text-[10px] uppercase tracking-[0.15em] text-paper/75 transition-colors hover:border-paper hover:text-paper focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brass"
              >
                Ver todas las lecturas
                <ArrowLongRightIcon
                  className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </div>

          <div className="mx-auto w-full max-w-[390px]">
            <OnlineReadingScene />
            <p className="mt-4 border-t border-astral/20 pt-4 font-mono text-[9px] uppercase leading-4 tracking-[0.14em] text-astral/75">
              Fig. 06 / Una pregunta entra en relación
            </p>
          </div>
        </div>

        <div className="grid border-t border-astral/25 pt-5 sm:grid-cols-3 sm:divide-x sm:divide-astral/25">
          <div className="flex items-baseline gap-3 pb-4 sm:pb-0 sm:pl-5 first:sm:pl-0">
            <span className="font-display text-4xl leading-none text-brass">12</span>
            <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-astral">
              lecturas
            </span>
          </div>
          <div className="flex items-baseline gap-3 border-t border-astral/25 py-4 sm:border-t-0 sm:pl-5 sm:py-0">
            <span className="font-display text-4xl leading-none text-brass">03</span>
            <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-astral">
              familias
            </span>
          </div>
          <div className="flex items-baseline gap-3 border-t border-astral/25 pt-4 sm:border-t-0 sm:pl-5 sm:pt-0">
            <span className="font-display text-4xl leading-none text-brass">00</span>
            <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-astral">
              cartas extraídas
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
