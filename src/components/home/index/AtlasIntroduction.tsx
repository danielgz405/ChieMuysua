export function AtlasIntroduction() {
  return (
    <section className="relative overflow-hidden border-b border-astral/25 bg-night">
      <div className="pointer-events-none absolute -left-32 -top-40 h-[34rem] w-[34rem] rounded-full border border-astral/15" aria-hidden="true" />
      <div className="pointer-events-none absolute -left-20 -top-28 h-[25rem] w-[25rem] rounded-full border border-dashed border-astral/15" aria-hidden="true" />
      <div className="mx-auto grid max-w-[1440px] gap-12 px-5 py-20 sm:px-8 sm:py-28 lg:grid-cols-[minmax(0,1fr)_260px] lg:items-end lg:gap-24 lg:px-12 lg:py-36">
        <div>
          <p className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.22em] text-brass">
            <span className="h-px w-10 bg-brass" aria-hidden="true" />
            Índice general / Placa 00
          </p>
          <h1 className="mt-8 max-w-5xl font-display text-[clamp(4rem,10vw,9.5rem)] leading-[0.78] tracking-[-0.06em] text-paper">
            Todo el atlas,
            <span className="mt-4 block pl-[0.14em] text-astral italic">
              en una sola órbita.
            </span>
          </h1>
          <p className="mt-10 max-w-2xl text-base leading-7 text-paper/70 sm:text-lg sm:leading-8">
            Un mapa de entrada para recorrer el tarot desde todos sus bordes:
            la historia, las cartas, las lecturas, los símbolos, las voces y
            los límites que sostienen una práctica responsable.
          </p>
        </div>

        <aside className="border-l border-astral/25 pl-6">
          <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-astral">
            Coordenadas del sitio
          </p>
          <dl className="mt-8 space-y-5">
            <div>
              <dt className="font-mono text-[9px] uppercase tracking-[0.16em] text-astral/70">
                Secciones
              </dt>
              <dd className="mt-1 font-display text-3xl text-paper">08 rutas</dd>
            </div>
            <div>
              <dt className="font-mono text-[9px] uppercase tracking-[0.16em] text-astral/70">
                Estado
              </dt>
              <dd className="mt-1 font-display text-3xl text-paper">Archivo vivo</dd>
            </div>
            <div>
              <dt className="font-mono text-[9px] uppercase tracking-[0.16em] text-astral/70">
                Acceso
              </dt>
              <dd className="mt-1 font-display text-3xl text-paper">Abierto</dd>
            </div>
          </dl>
        </aside>
      </div>
    </section>
  );
}
