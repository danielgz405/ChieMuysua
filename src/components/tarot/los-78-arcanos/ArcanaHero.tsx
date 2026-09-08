import { ArrowDownIcon, ArrowUpRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import blackboardImage from "@/assets/images/oc-the-blackboard.png";
import { ArcanaHeroDeck } from "@/components/tarot/los-78-arcanos/ArcanaHeroDeck";

export function ArcanaHero() {
  return (
    <section
      aria-labelledby="arcana-hero-title"
      className="relative isolate overflow-hidden border-b border-astral/25 bg-night text-paper"
    >
      <Image
        src={blackboardImage}
        alt=""
        fill
        priority
        sizes="100vw"
        aria-hidden="true"
        className="object-cover object-center opacity-30"
      />
      <div className="absolute inset-0 bg-night/80" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -right-56 top-10 h-[38rem] w-[38rem] rounded-full border border-astral/15 sm:-right-40 sm:h-[48rem] sm:w-[48rem]"
        aria-hidden="true"
      >
        <div className="absolute inset-12 rounded-full border border-dashed border-astral/15" />
        <div className="absolute left-1/2 top-1/2 h-px w-[125%] -translate-x-1/2 bg-astral/15" />
        <div className="absolute left-1/2 top-1/2 h-[125%] w-px -translate-y-1/2 bg-astral/15" />
      </div>

      <div className="relative mx-auto max-w-[1440px] px-5 pb-8 pt-5 sm:px-8 sm:pb-12 sm:pt-8 lg:px-12 lg:pb-16">
        <div className="flex items-center justify-between border-b border-astral/25 pb-3 font-mono text-[9px] uppercase tracking-[0.2em] text-astral sm:text-[10px]">
          <span>Atlas / Tarot / Placa 03</span>
          <span className="hidden sm:inline">Índice visual / 78 piezas</span>
          <span>Observatorio abierto</span>
        </div>

        <div className="grid items-center gap-10 py-16 sm:py-20 lg:min-h-[calc(100svh-7rem)] lg:grid-cols-[minmax(0,1fr)_minmax(360px,0.82fr)] lg:gap-8 lg:py-24">
          <div className="max-w-3xl">
            <p className="mb-6 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.22em] text-brass">
              <span className="h-px w-10 bg-brass" aria-hidden="true" />
              Inventario de imágenes
            </p>
            <h1
              id="arcana-hero-title"
              className="max-w-3xl font-display text-[clamp(4rem,11vw,9.5rem)] leading-[0.78] tracking-[-0.06em] text-paper"
            >
              Los 78
              <span className="mt-5 block pl-[0.12em] text-astral italic">
                arcanos.
              </span>
            </h1>
            <p className="mt-10 max-w-xl text-base leading-7 text-paper/70 sm:text-lg sm:leading-8">
              Un índice para recorrer la baraja sin convertirla en un diccionario
              cerrado. Cada carta conserva una imagen, un campo de preguntas y
              una forma particular de entrar en relación.
            </p>
            <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <Link
                href="#catalogo"
                className="group inline-flex items-center gap-5 border border-brass bg-brass px-5 py-3 font-mono text-[10px] uppercase tracking-[0.15em] text-night transition-colors hover:bg-transparent hover:text-brass focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brass"
              >
                Abrir el índice
                <ArrowDownIcon
                  className="h-4 w-4 transition-transform group-hover:translate-y-1"
                  aria-hidden="true"
                />
              </Link>
              <Link
                href="/tarot/que-es-el-tarot"
                className="group inline-flex items-center gap-3 border-b border-astral/50 py-2 font-mono text-[10px] uppercase tracking-[0.15em] text-paper/75 transition-colors hover:border-paper hover:text-paper focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brass"
              >
                Leer la estructura
                <ArrowUpRightIcon
                  className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </div>

          <div className="lg:pl-8">
            <ArcanaHeroDeck />
            <p className="mx-auto mt-3 max-w-[450px] font-mono text-[9px] uppercase leading-4 tracking-[0.15em] text-astral/75">
              Fig. 03 / Tres puntos de entrada a una baraja completa
            </p>
          </div>
        </div>

        <div className="grid border-t border-astral/25 pt-5 sm:grid-cols-3 sm:divide-x sm:divide-astral/25">
          <div className="flex items-baseline gap-3 pb-4 sm:pb-0 sm:pl-5 first:sm:pl-0">
            <span className="font-display text-4xl leading-none text-brass">22</span>
            <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-astral">
              arcanos mayores
            </span>
          </div>
          <div className="flex items-baseline gap-3 border-t border-astral/25 py-4 sm:border-t-0 sm:pl-5 sm:py-0">
            <span className="font-display text-4xl leading-none text-brass">56</span>
            <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-astral">
              arcanos menores
            </span>
          </div>
          <div className="flex items-baseline gap-3 border-t border-astral/25 pt-4 sm:border-t-0 sm:pl-5 sm:pt-0">
            <span className="font-display text-4xl leading-none text-brass">04</span>
            <span className="font-mono text-[9px] uppercase tracking-[0.16em] text-astral">
              familias menores
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
