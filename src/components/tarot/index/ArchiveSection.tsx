import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import collageImage from "@/assets/images/carnation-collage.png";

export function ArchiveSection() {
  return (
    <section id="archivo" className="bg-paper text-ink">
      <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-36">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:items-center lg:gap-24">
          <div>
            <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-sepia">
              <span>01</span>
              <span className="h-px w-10 bg-sepia/50" aria-hidden="true" />
              <span>El archivo</span>
            </div>
            <h2 className="mt-8 max-w-xl font-display text-[clamp(3.3rem,6vw,6.8rem)] leading-[0.86] tracking-[-0.045em] text-ink">
              Setenta y ocho formas de mirar.
            </h2>
            <p className="mt-8 max-w-lg text-base leading-7 text-ink/70 sm:text-lg sm:leading-8">
              Antes de ser respuesta, cada arcano es una imagen. Un fragmento
              de historia, un gesto, una pregunta que cambia cuando volvemos a
              observarla.
            </p>
            <Link
              href="/tarot/los-78-arcanos"
              className="group mt-8 inline-flex items-center gap-3 border-b border-sepia/60 pb-2 font-mono text-[10px] uppercase tracking-[0.16em] text-sepia transition-colors hover:border-ink hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sepia"
            >
              Consultar los 78 arcanos
              <ArrowUpRightIcon
                className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                aria-hidden="true"
              />
            </Link>

            <div className="mt-14 grid max-w-lg grid-cols-3 border-y border-paper-deep py-5">
              <div className="pr-4">
                <p className="font-display text-3xl text-ink">22</p>
                <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.14em] text-sepia">
                  Mayores
                </p>
              </div>
              <div className="border-l border-paper-deep px-4">
                <p className="font-display text-3xl text-ink">56</p>
                <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.14em] text-sepia">
                  Menores
                </p>
              </div>
              <div className="border-l border-paper-deep pl-4">
                <p className="font-display text-3xl text-ink">04</p>
                <p className="mt-1 font-mono text-[9px] uppercase tracking-[0.14em] text-sepia">
                  Familias
                </p>
              </div>
            </div>
          </div>

          <figure className="relative">
            <div className="relative aspect-[1.48] overflow-hidden border border-paper-deep bg-paper-deep p-2 sm:p-3">
              <div className="relative h-full overflow-hidden border border-sepia/30">
                <Image
                  src={collageImage}
                  alt="Lámina botánica y astronómica de un archivo histórico"
                  fill
                  sizes="(min-width: 1024px) 58vw, 100vw"
                  className="object-cover object-center mix-blend-multiply"
                />
                <div className="absolute inset-0 bg-paper/10 mix-blend-screen" aria-hidden="true" />
              </div>
              <span className="absolute -right-2 -top-4 bg-paper px-2 font-display text-2xl italic text-sepia sm:-right-5 sm:-top-5">
                Pl. 31
              </span>
            </div>
            <figcaption className="mt-4 flex items-start justify-between gap-6 font-mono text-[9px] uppercase leading-4 tracking-[0.14em] text-sepia">
              <span>Fig. 01 / Botánica, cielo y territorio</span>
              <span className="text-right">Archivo de imágenes</span>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
}
