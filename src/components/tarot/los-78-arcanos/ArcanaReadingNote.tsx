import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export function ArcanaReadingNote() {
  return (
    <section
      aria-labelledby="arcana-reading-note-title"
      className="border-t border-astral/25 bg-night text-paper"
    >
      <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-36">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end lg:gap-24">
          <div>
            <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-astral">
              <span>02</span>
              <span className="h-px w-10 bg-astral/60" aria-hidden="true" />
              <span>La lectura</span>
            </div>
            <h2
              id="arcana-reading-note-title"
              className="mt-8 max-w-2xl font-display text-[clamp(3.4rem,6vw,6.8rem)] leading-[0.84] tracking-[-0.05em] text-paper"
            >
              Una carta es una pregunta con forma.
            </h2>
          </div>
          <div className="max-w-xl lg:justify-self-end">
            <p className="text-base leading-7 text-paper/70 sm:text-lg sm:leading-8">
              Este archivo sirve para estudiar imágenes y abrir asociaciones. No
              sustituye la reflexión propia ni ofrece certezas médicas, legales o
              financieras. El sentido aparece en la relación entre la pregunta,
              la posición y el conjunto.
            </p>
            <Link
              href="/tarot/que-es-el-tarot"
              className="group mt-8 inline-flex items-center gap-3 border-b border-brass/60 pb-2 font-mono text-[10px] uppercase tracking-[0.16em] text-brass transition-colors hover:border-paper hover:text-paper focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brass"
            >
              Entender la baraja
              <ArrowUpRightIcon
                className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>
          </div>
        </div>

        <div className="mt-16 grid border-y border-astral/25 lg:mt-24 lg:grid-cols-3 lg:divide-x lg:divide-astral/25">
          <article className="border-b border-astral/25 py-7 lg:border-b-0 lg:pr-10">
            <p className="font-mono text-[10px] text-brass">01 / Mayores</p>
            <h3 className="mt-6 font-display text-3xl text-paper">Los grandes umbrales</h3>
            <p className="mt-4 text-sm leading-6 text-paper/60">
              Imágenes de transformación, crisis, aprendizaje y orientación en
              una escala amplia.
            </p>
          </article>
          <article className="border-b border-astral/25 py-7 lg:border-b-0 lg:px-10">
            <p className="font-mono text-[10px] text-brass">02 / Menores</p>
            <h3 className="mt-6 font-display text-3xl text-paper">Los gestos cotidianos</h3>
            <p className="mt-4 text-sm leading-6 text-paper/60">
              Cuatro familias acercan la lectura a los vínculos, los recursos,
              las ideas y la energía de cada día.
            </p>
          </article>
          <article className="py-7 lg:pl-10">
            <p className="font-mono text-[10px] text-brass">03 / Contexto</p>
            <h3 className="mt-6 font-display text-3xl text-paper">La imagen situada</h3>
            <p className="mt-4 text-sm leading-6 text-paper/60">
              Ningún significado está aislado: la pregunta y la posición le dan
              un borde a lo que vemos.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
