import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import Link from "next/link";
import blackboardImage from "@/assets/images/oc-the-blackboard.png";

export function TarotReadingSection() {
  return (
    <section
      id="lectura"
      aria-labelledby="tarot-reading-title"
      className="bg-paper text-ink"
    >
      <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-36">
        <div className="grid gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:gap-24">
          <div>
            <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-sepia">
              <span>02</span>
              <span className="h-px w-10 bg-sepia/50" aria-hidden="true" />
              <span>La lectura</span>
            </div>
            <h2
              id="tarot-reading-title"
              className="mt-8 max-w-2xl font-display text-[clamp(3.2rem,6vw,6.4rem)] leading-[0.86] tracking-[-0.05em] text-ink"
            >
              Leer es poner una imagen en relación.
            </h2>
            <p className="mt-8 max-w-xl text-base leading-7 text-ink/75 sm:text-lg sm:leading-8">
              Una carta no significa lo mismo en cualquier momento. La pregunta,
              la posición que ocupa y las cartas que la acompañan modifican el
              sentido. Por eso una lectura se parece menos a consultar un
              diccionario y más a observar una escena.
            </p>
            <Link
              href="/lecturas/online"
              className="group mt-8 inline-flex items-center gap-3 border-b border-sepia/60 pb-2 font-mono text-[10px] uppercase tracking-[0.16em] text-sepia transition-colors hover:border-ink hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sepia"
            >
              Explorar las lecturas
              <ArrowUpRightIcon
                className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                aria-hidden="true"
              />
            </Link>
          </div>

          <figure className="relative">
            <div className="relative aspect-[1.18] overflow-hidden border border-paper-deep bg-paper-deep p-2 sm:p-3">
              <div className="relative h-full overflow-hidden border border-sepia/30">
                <Image
                  src={blackboardImage}
                  alt="Diagrama astronómico dibujado sobre una pizarra oscura"
                  fill
                  sizes="(min-width: 1024px) 45vw, 100vw"
                  className="object-cover object-center grayscale mix-blend-multiply"
                />
                <div className="absolute inset-0 bg-paper/20 mix-blend-screen" aria-hidden="true" />
                <div className="absolute left-4 top-4 border border-paper/70 bg-ink/80 px-2 py-1 font-mono text-[9px] uppercase tracking-[0.16em] text-paper sm:left-6 sm:top-6">
                  Pregunta / posición / contexto
                </div>
              </div>
            </div>
            <figcaption className="mt-4 flex items-start justify-between gap-5 font-mono text-[9px] uppercase leading-4 tracking-[0.14em] text-sepia">
              <span>Fig. 02 / El sentido se mueve</span>
              <span className="text-right">Observación situada</span>
            </figcaption>
          </figure>
        </div>

        <div className="mt-16 grid border-y border-paper-deep lg:mt-24 lg:grid-cols-3">
          <article className="border-b border-paper-deep py-7 lg:border-b-0 lg:border-r lg:pr-10">
            <p className="font-mono text-[10px] text-sepia">01 / La pregunta</p>
            <h3 className="mt-6 font-display text-3xl text-ink">Nombrar el foco</h3>
            <p className="mt-4 text-sm leading-6 text-ink/65">
              Una pregunta clara no obliga a la carta a responder. Le da un
              borde a la experiencia que vamos a mirar.
            </p>
          </article>
          <article className="border-b border-paper-deep py-7 lg:border-b-0 lg:border-r lg:px-10">
            <p className="font-mono text-[10px] text-sepia">02 / La posición</p>
            <h3 className="mt-6 font-display text-3xl text-ink">Leer el lugar</h3>
            <p className="mt-4 text-sm leading-6 text-ink/65">
              El pasado, el obstáculo o el consejo son marcos distintos. La
              posición orienta la conversación con la imagen.
            </p>
          </article>
          <article className="py-7 lg:pl-10">
            <p className="font-mono text-[10px] text-sepia">03 / La relación</p>
            <h3 className="mt-6 font-display text-3xl text-ink">Escuchar el conjunto</h3>
            <p className="mt-4 text-sm leading-6 text-ink/65">
              Una tirada es una composición. Los contrastes, repeticiones y
              silencios importan tanto como cada carta aislada.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
}
