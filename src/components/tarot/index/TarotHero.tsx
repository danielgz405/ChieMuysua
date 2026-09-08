import { ArrowDownIcon, ArrowLongRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import blackboardImage from "@/assets/images/oc-the-blackboard.png";

export function TarotHero() {
  return (
    <section className="relative isolate overflow-hidden border-b border-astral/25 bg-night">
      <Image
        src={blackboardImage}
        alt=""
        fill
        priority
        sizes="100vw"
        aria-hidden="true"
        className="object-cover object-center opacity-35"
      />
      <div className="absolute inset-0 bg-night/75" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -right-48 top-20 h-[34rem] w-[34rem] rounded-full border border-astral/20 sm:-right-28 sm:h-[42rem] sm:w-[42rem]"
        aria-hidden="true"
      >
        <div className="absolute inset-14 rounded-full border border-dashed border-astral/20" />
        <div className="absolute inset-1/2 h-px w-[115%] -translate-x-1/2 bg-astral/20" />
        <div className="absolute left-1/2 top-1/2 h-[115%] w-px -translate-x-1/2 -translate-y-1/2 bg-astral/20" />
      </div>

      <div className="relative mx-auto max-w-[1440px] px-5 pb-8 pt-5 sm:px-8 sm:pb-12 sm:pt-8 lg:px-12 lg:pb-16">
        <div className="flex items-center justify-between border-b border-astral/25 pb-3 font-mono text-[9px] uppercase tracking-[0.2em] text-astral sm:text-[10px]">
          <span>Atlas / Tarot / Placa 00</span>
          <span className="hidden sm:inline">Lat. simbólica / 45° 12′ 08″</span>
          <span>Observatorio abierto</span>
        </div>

        <div className="grid min-h-[calc(100svh-7rem)] items-center gap-14 py-20 lg:grid-cols-[minmax(0,1fr)_240px] lg:gap-20 lg:py-28">
          <div className="max-w-4xl">
            <p className="mb-6 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.22em] text-brass">
              <span className="h-px w-10 bg-brass" aria-hidden="true" />
              Un archivo para mirar despacio
            </p>
            <h1 className="max-w-4xl font-display text-[clamp(4rem,11vw,10rem)] leading-[0.78] tracking-[-0.055em] text-paper">
              El tarot,
              <span className="mt-5 block pl-[0.12em] text-astral italic">
                leído como un mapa.
              </span>
            </h1>
            <p className="mt-10 max-w-xl text-base leading-7 text-paper/70 sm:text-lg sm:leading-8">
              Una cartografía de imágenes, símbolos y preguntas para entrar en
              la lectura sin prisa y encontrar una orientación propia.
            </p>
            <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <Link
                href="/lecturas/online"
                className="group inline-flex items-center gap-5 border border-brass bg-brass px-5 py-3 font-mono text-[10px] uppercase tracking-[0.15em] text-night transition-colors hover:bg-transparent hover:text-brass focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brass"
              >
                Abrir una lectura
                <ArrowLongRightIcon
                  className="h-4 w-4 transition-transform group-hover:translate-x-1"
                  aria-hidden="true"
                />
              </Link>
              <Link
                href="/tarot/que-es-el-tarot"
                className="group inline-flex items-center gap-3 border-b border-astral/50 py-2 font-mono text-[10px] uppercase tracking-[0.15em] text-paper/75 transition-colors hover:border-paper hover:text-paper focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brass"
              >
                Entrar al archivo
                <ArrowDownIcon
                  className="h-3.5 w-3.5 -rotate-45 transition-transform group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </div>

          <aside className="hidden border-l border-astral/25 pl-6 lg:block">
            <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-astral">
              Coordenadas de la placa
            </p>
            <dl className="mt-8 space-y-6">
              <div>
                <dt className="font-mono text-[9px] uppercase tracking-[0.16em] text-astral/70">
                  Sistema
                </dt>
                <dd className="mt-1 font-display text-2xl text-paper">78 arcanos</dd>
              </div>
              <div>
                <dt className="font-mono text-[9px] uppercase tracking-[0.16em] text-astral/70">
                  Materia
                </dt>
                <dd className="mt-1 font-display text-2xl text-paper">Imagen / signo</dd>
              </div>
              <div>
                <dt className="font-mono text-[9px] uppercase tracking-[0.16em] text-astral/70">
                  Método
                </dt>
                <dd className="mt-1 font-display text-2xl text-paper">Lectura atenta</dd>
              </div>
            </dl>
            <div className="mt-12 h-px w-full bg-astral/25" />
            <p className="mt-4 font-mono text-[9px] leading-5 text-astral/70">
              Las cartas no dictan. Abren un campo de observación.
            </p>
          </aside>
        </div>

        <div className="flex items-center justify-between border-t border-astral/25 pt-4 font-mono text-[9px] uppercase tracking-[0.2em] text-astral">
          <span>Fig. 00 / Campo nocturno</span>
          <span className="hidden sm:inline">Líneas de tránsito / Archivo visual</span>
          <span className="flex items-center gap-2">
            Desplazar
            <ArrowDownIcon className="h-3 w-3" aria-hidden="true" />
          </span>
        </div>
      </div>
    </section>
  );
}
