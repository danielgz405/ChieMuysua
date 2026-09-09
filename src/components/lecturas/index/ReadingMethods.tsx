import { ArrowLongRightIcon, ArrowUpRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

const readingMethods = [
  {
    index: "01",
    count: "01 carta",
    name: "Una señal",
    summary:
      "Una orientación breve para detenerse en el presente y nombrar aquello que pide atención.",
    detail: "foco / claridad",
    href: "/lecturas/online/una-carta",
  },
  {
    index: "02",
    count: "03 cartas",
    name: "Una secuencia",
    summary:
      "Tres posiciones para observar el origen de una situación, su tensión actual y un movimiento posible.",
    detail: "tiempo / relación",
    href: "/lecturas/online/tres-cartas",
  },
  {
    index: "03",
    count: "05 cartas",
    name: "Un campo amplio",
    summary:
      "Más contexto para preguntas que necesitan poner en relación recursos, obstáculos, deseo y dirección.",
    detail: "capas / contexto",
    href: "/lecturas/online/cinco-cartas",
  },
] as const;

const readingPaths = [
  { index: "04", name: "Relaciones", href: "/lecturas/online/relaciones" },
  { index: "05", name: "Decisiones", href: "/lecturas/online/decisiones" },
  {
    index: "06",
    name: "Autoconocimiento",
    href: "/lecturas/online/autoconocimiento",
  },
  { index: "07", name: "Temporales", href: "/lecturas/online/temporales" },
] as const;

export function ReadingMethods() {
  return (
    <section
      id="metodos"
      aria-labelledby="reading-methods-title"
      className="bg-paper text-ink"
    >
      <div className="mx-auto max-w-[1440px] px-5 py-20 sm:px-8 sm:py-28 lg:px-12 lg:py-36">
        <div className="grid gap-12 lg:grid-cols-[0.82fr_1.18fr] lg:gap-24">
          <div>
            <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.2em] text-sepia">
              <span>01</span>
              <span className="h-px w-10 bg-sepia/50" aria-hidden="true" />
              <span>El método</span>
            </div>
            <h2
              id="reading-methods-title"
              className="mt-8 max-w-xl font-display text-[clamp(3.4rem,6vw,6.8rem)] leading-[0.84] tracking-[-0.05em] text-ink"
            >
              Cada pregunta pide una distancia.
            </h2>
          </div>
          <div className="max-w-2xl lg:justify-self-end">
            <p className="text-base leading-7 text-ink/75 sm:text-lg sm:leading-8">
              Una tirada no es una cantidad de cartas elegida al azar. Es un
              marco que ordena la conversación: cuanto más amplia la escala,
              más relaciones aparecen y más despacio conviene leer.
            </p>
            <div className="mt-8 grid grid-cols-3 border-y border-paper-deep">
              <div className="py-4 pr-4">
                <p className="font-display text-3xl leading-none">01</p>
                <p className="mt-2 font-mono text-[9px] uppercase tracking-[0.14em] text-sepia">
                  foco
                </p>
              </div>
              <div className="border-l border-paper-deep px-4 py-4">
                <p className="font-display text-3xl leading-none">03</p>
                <p className="mt-2 font-mono text-[9px] uppercase tracking-[0.14em] text-sepia">
                  relación
                </p>
              </div>
              <div className="border-l border-paper-deep pl-4 py-4">
                <p className="font-display text-3xl leading-none">05</p>
                <p className="mt-2 font-mono text-[9px] uppercase tracking-[0.14em] text-sepia">
                  contexto
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid gap-px border border-paper-deep bg-paper-deep lg:grid-cols-3 lg:gap-0">
          {readingMethods.map((method) => (
            <article key={method.index} className="group bg-paper p-6 sm:p-8 lg:p-9">
              <div className="flex items-start justify-between gap-4 border-b border-paper-deep pb-5">
                <span className="font-mono text-[10px] tracking-[0.18em] text-sepia">
                  {method.index} / {method.count}
                </span>
                <ArrowUpRightIcon
                  className="h-4 w-4 text-sepia transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </div>
              <h3 className="mt-10 font-display text-4xl leading-none text-ink">
                {method.name}
              </h3>
              <p className="mt-5 min-h-24 text-sm leading-6 text-ink/65">
                {method.summary}
              </p>
              <div className="mt-8 flex items-center justify-between border-t border-paper-deep pt-4 font-mono text-[9px] uppercase tracking-[0.14em] text-sepia">
                <span>{method.detail}</span>
                <Link
                  href={method.href}
                  className="border-b border-sepia/50 pb-1 transition-colors hover:border-ink hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sepia"
                >
                  Ver tirada
                </Link>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-16 border-t border-paper-deep pt-6 lg:mt-24">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-sepia">
                Otras coordenadas
              </p>
              <p className="mt-3 max-w-md text-sm leading-6 text-ink/65">
                Entra por el tema que necesitas observar, no por la tirada más
                grande.
              </p>
            </div>
            <div className="grid border-y border-paper-deep sm:min-w-[540px] sm:grid-cols-2 sm:border-y-0">
              {readingPaths.map((path) => (
                <Link
                  key={path.index}
                  href={path.href}
                  className="group flex items-center justify-between border-b border-paper-deep py-4 font-display text-2xl text-ink transition-colors hover:text-sepia focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sepia sm:border-t sm:py-5 sm:first:border-t sm:nth-[2]:border-t sm:nth-[3]:border-t-0 sm:nth-[4]:border-t-0"
                >
                  <span>
                    <span className="mr-4 font-mono text-[9px] text-sepia">{path.index}</span>
                    {path.name}
                  </span>
                  <ArrowLongRightIcon
                    className="h-4 w-4 text-sepia transition-transform group-hover:translate-x-1"
                    aria-hidden="true"
                  />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <Link
          href="/lecturas/online"
          className="group mt-14 inline-flex items-center gap-4 border border-ink bg-ink px-5 py-3 font-mono text-[10px] uppercase tracking-[0.15em] text-paper transition-colors hover:bg-transparent hover:text-ink focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-sepia"
        >
          Ver todas las lecturas online
          <ArrowLongRightIcon
            className="h-4 w-4 transition-transform group-hover:translate-x-1"
            aria-hidden="true"
          />
        </Link>
      </div>
    </section>
  );
}
