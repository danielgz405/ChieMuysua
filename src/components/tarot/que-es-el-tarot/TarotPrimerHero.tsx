import { ArrowDownIcon, ArrowUpRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { TarotDepthFrame } from "@/components/tarot/que-es-el-tarot/TarotDepthFrame";

export function TarotPrimerHero() {
  return (
    <section className="relative overflow-hidden border-b border-paper-deep bg-paper text-ink">
      <div
        className="pointer-events-none absolute -right-44 -top-36 h-[34rem] w-[34rem] rounded-full border border-sepia/20 sm:-right-24 sm:h-[43rem] sm:w-[43rem]"
        aria-hidden="true"
      >
        <div className="absolute inset-12 rounded-full border border-dashed border-sepia/20" />
        <div className="absolute left-1/2 top-1/2 h-px w-[120%] -translate-x-1/2 bg-sepia/15" />
        <div className="absolute left-1/2 top-1/2 h-[120%] w-px -translate-y-1/2 bg-sepia/15" />
      </div>

      <div className="relative mx-auto max-w-[1440px] px-5 pb-8 pt-5 sm:px-8 sm:pb-12 sm:pt-8 lg:px-12 lg:pb-16">
        <div className="flex items-center justify-between border-b border-paper-deep pb-3 font-mono text-[9px] uppercase tracking-[0.2em] text-sepia sm:text-[10px]">
          <span>Atlas / Tarot / Placa 01</span>
          <span className="hidden sm:inline">Entrada al archivo</span>
          <span>Lectura de base</span>
        </div>

        <div className="grid gap-14 py-16 sm:py-24 lg:grid-cols-[minmax(0,1fr)_360px] lg:items-center lg:gap-20 lg:py-28">
          <div className="relative z-10">
            <p className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.22em] text-sepia">
              <span className="h-px w-10 bg-sepia" aria-hidden="true" />
              Guía de entrada / concepto
            </p>
            <h1 className="mt-8 max-w-5xl font-display text-[clamp(3.8rem,10vw,8.8rem)] leading-[0.8] tracking-[-0.06em] text-ink">
              ¿Qué es
              <span className="mt-4 block pl-[0.13em] text-sepia italic">
                el tarot?
              </span>
            </h1>
            <p className="mt-10 max-w-2xl text-base leading-7 text-ink/75 sm:text-lg sm:leading-8">
              Una baraja de 78 imágenes que sirve para observar una pregunta,
              ordenar una experiencia y abrir asociaciones. No entrega un
              destino cerrado: ofrece un lenguaje para mirar lo que está en
              movimiento.
            </p>
            <div className="mt-10 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
              <Link
                href="#estructura"
                className="group inline-flex items-center gap-4 border border-ink bg-ink px-5 py-3 font-mono text-[10px] uppercase tracking-[0.15em] text-paper transition-colors hover:bg-transparent hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sepia"
              >
                Ver la estructura
                <ArrowDownIcon
                  className="h-4 w-4 transition-transform group-hover:translate-y-1"
                  aria-hidden="true"
                />
              </Link>
              <Link
                href="/tarot"
                className="group inline-flex items-center gap-3 border-b border-sepia/60 py-2 font-mono text-[10px] uppercase tracking-[0.15em] text-sepia transition-colors hover:border-ink hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sepia"
              >
                Volver al origen
                <ArrowUpRightIcon
                  className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </div>

          <TarotDepthFrame />
        </div>

        <div className="flex items-center justify-between border-t border-paper-deep pt-4 font-mono text-[9px] uppercase tracking-[0.2em] text-sepia">
          <span>Entrada / fundamentos</span>
          <span className="hidden sm:inline">Archivo visual y simbólico</span>
          <span className="flex items-center gap-2">
            Continuar
            <ArrowDownIcon className="h-3 w-3" aria-hidden="true" />
          </span>
        </div>
      </div>
    </section>
  );
}
