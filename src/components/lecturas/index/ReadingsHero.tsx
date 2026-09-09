import {
  ArrowDownIcon,
  ArrowLongRightIcon,
} from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import blackboardImage from "@/assets/images/oc-the-blackboard.png";
import { ReadingsHeroDeck } from "@/components/lecturas/index/ReadingsHeroDeck";

export function ReadingsHero() {
  return (
    <section
      aria-labelledby="readings-hero-title"
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
        className="pointer-events-none absolute -right-56 top-16 h-[37rem] w-[37rem] rounded-full border border-astral/20 sm:-right-32 sm:h-[46rem] sm:w-[46rem]"
        aria-hidden="true"
      >
        <div className="absolute inset-12 rounded-full border border-dashed border-astral/20" />
        <div className="absolute inset-1/2 h-px w-[125%] -translate-x-1/2 bg-astral/20" />
        <div className="absolute inset-1/2 h-[125%] w-px -translate-y-1/2 bg-astral/20" />
        <div className="absolute left-[18%] top-[22%] h-2 w-2 rounded-full bg-brass/80" />
      </div>

      <div className="relative mx-auto max-w-[1440px] px-5 pb-8 pt-5 sm:px-8 sm:pb-12 sm:pt-8 lg:px-12 lg:pb-16">
        <div className="flex items-center justify-between border-b border-astral/25 pb-3 font-mono text-[9px] uppercase tracking-[0.2em] text-astral sm:text-[10px]">
          <span>Atlas / Lecturas / Placa 04</span>
          <span className="hidden sm:inline">Métodos de observación</span>
          <span>Campo abierto</span>
        </div>

        <div className="grid min-h-[calc(100svh-7rem)] items-center gap-14 py-20 lg:grid-cols-[minmax(0,1fr)_260px] lg:gap-20 lg:py-28">
          <div className="max-w-4xl">
            <p className="mb-6 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.22em] text-brass">
              <span className="h-px w-10 bg-brass" aria-hidden="true" />
              Métodos para mirar una pregunta
            </p>
            <h1
              id="readings-hero-title"
              className="max-w-4xl font-display text-[clamp(4rem,11vw,10rem)] leading-[0.78] tracking-[-0.06em] text-paper"
            >
              Una lectura
              <span className="mt-5 block pl-[0.12em] text-astral italic">
                empieza en la pregunta.
              </span>
            </h1>
            <p className="mt-10 max-w-2xl text-base leading-7 text-paper/70 sm:text-lg sm:leading-8">
              Elige una distancia, formula lo que quieres observar y deja que
              las cartas dibujen una escena. Leer no es recibir una sentencia:
              es volver a una experiencia con más matices.
            </p>
            <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <Link
                href="#metodos"
                className="group inline-flex items-center gap-5 border border-brass bg-brass px-5 py-3 font-mono text-[10px] uppercase tracking-[0.15em] text-night transition-colors hover:bg-transparent hover:text-brass focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brass"
              >
                Explorar los métodos
                <ArrowDownIcon
                  className="h-4 w-4 transition-transform group-hover:translate-y-1"
                  aria-hidden="true"
                />
              </Link>
              <Link
                href="/lecturas/online"
                className="group inline-flex items-center gap-3 border-b border-astral/50 py-2 font-mono text-[10px] uppercase tracking-[0.15em] text-paper/75 transition-colors hover:border-paper hover:text-paper focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brass"
              >
                Abrir una lectura
                <ArrowLongRightIcon
                  className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </div>

          <div className="lg:justify-self-end">
            <ReadingsHeroDeck />
            <p className="mx-auto max-w-[430px] border-t border-astral/20 pt-4 font-mono text-[9px] uppercase leading-4 tracking-[0.14em] text-astral/75">
              Fig. 04 / Pregunta, posición y relación en una misma órbita
            </p>
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-astral/25 pt-4 font-mono text-[9px] uppercase tracking-[0.2em] text-astral">
          <span>Fig. 04 / Campo de lectura</span>
          <span className="hidden sm:inline">Pregunta / método / relación</span>
          <span className="flex items-center gap-2">
            Continuar
            <ArrowDownIcon className="h-3 w-3" aria-hidden="true" />
          </span>
        </div>
      </div>
    </section>
  );
}
