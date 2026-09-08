import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

export function TarotBoundariesSection() {
  return (
    <section
      aria-labelledby="tarot-boundaries-title"
      className="bg-night-soft text-paper"
    >
      <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-36">
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
          <div>
            <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-astral">
              <span>03</span>
              <span className="h-px w-10 bg-astral/60" aria-hidden="true" />
              <span>Los límites</span>
            </div>
            <h2
              id="tarot-boundaries-title"
              className="mt-8 max-w-xl font-display text-[clamp(3.2rem,6vw,6rem)] leading-[0.86] tracking-[-0.05em] text-paper"
            >
              Una práctica de interpretación, no una sentencia.
            </h2>
            <p className="mt-8 max-w-md text-base leading-7 text-paper/65">
              El valor del tarot está en la conversación que abre. Su lenguaje
              puede acompañar una reflexión, pero no sustituye la información,
              el consentimiento ni el cuidado profesional.
            </p>
          </div>

          <div className="grid gap-px border border-astral/25 bg-astral/25 sm:grid-cols-2">
            <div className="bg-night p-6 sm:p-8">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-brass">
                Lo que puede ofrecer
              </p>
              <ul className="mt-7 divide-y divide-astral/20">
                <li className="py-4 text-sm leading-6 text-paper/70 first:pt-0">
                  Un vocabulario visual para reconocer patrones y matices.
                </li>
                <li className="py-4 text-sm leading-6 text-paper/70">
                  Un tiempo de pausa para formular mejor una pregunta.
                </li>
                <li className="py-4 text-sm leading-6 text-paper/70 last:pb-0">
                  Una perspectiva alternativa sobre una experiencia presente.
                </li>
              </ul>
            </div>
            <div className="bg-night p-6 sm:p-8">
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-brass">
                Lo que no puede prometer
              </p>
              <ul className="mt-7 divide-y divide-astral/20">
                <li className="py-4 text-sm leading-6 text-paper/70 first:pt-0">
                  Certezas sobre el futuro ni control sobre las decisiones ajenas.
                </li>
                <li className="py-4 text-sm leading-6 text-paper/70">
                  Diagnósticos médicos, legales, financieros o de seguridad.
                </li>
                <li className="py-4 text-sm leading-6 text-paper/70 last:pb-0">
                  Una respuesta que deba obedecerse por encima del propio criterio.
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-6 border-t border-astral/25 pt-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="max-w-xl font-mono text-[10px] uppercase leading-5 tracking-[0.14em] text-astral">
            Nota de cuidado / Una lectura responsable devuelve la pregunta a
            quien la formula.
          </p>
          <Link
            href="/etica"
            className="group inline-flex items-center gap-3 self-start border-b border-brass/60 pb-2 font-mono text-[10px] uppercase tracking-[0.16em] text-brass transition-colors hover:border-paper hover:text-paper focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brass"
          >
            Leer los principios
            <ArrowUpRightIcon
              className="h-3.5 w-3.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              aria-hidden="true"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
