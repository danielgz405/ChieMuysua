"use client";

import { useAtlasParallax } from "@/hooks/ui/use-atlas-parallax";
import styles from "./SpreadsHeroDiagram.module.css";

const spreadCards = [
  {
    index: "01",
    title: "El foco",
    detail: "pregunta",
    symbol: "I",
    tone: "border-astral/60 bg-night-soft text-astral",
  },
  {
    index: "02",
    title: "El contexto",
    detail: "posición",
    symbol: "II",
    tone: "border-brass/80 bg-paper text-ink",
  },
  {
    index: "03",
    title: "La relación",
    detail: "lectura",
    symbol: "III",
    tone: "border-paper-deep bg-paper-deep text-ink",
  },
] as const;

const cardTransforms = [
  "translate3d(-72%, -50%, 0) rotate(-10deg)",
  "translate3d(-50%, -50%, 58px) rotate(0deg)",
  "translate3d(-28%, -50%, 0) rotate(10deg)",
] as const;

export function SpreadsHeroDiagram() {
  const { handlePointerLeave, handlePointerMove, pointer, reducedMotion } =
    useAtlasParallax();
  const sceneTransform = reducedMotion
    ? "translateZ(0)"
    : `rotateX(${pointer.y * -4}deg) rotateY(${pointer.x * 5}deg)`;

  return (
    <figure className="relative mx-auto w-full max-w-[390px] border border-astral/25 bg-night/80 p-5 sm:p-8">
      <div
        className="relative h-[330px] w-full [perspective:1500px] sm:h-[380px]"
        onPointerMove={handlePointerMove}
        onPointerLeave={handlePointerLeave}
        role="img"
        aria-label="Diagrama tridimensional de una tirada con foco, contexto y relación."
      >
        <div
          className={`${styles.scene} relative h-full w-full`}
          style={{
            transform: sceneTransform,
            willChange: reducedMotion ? "auto" : "transform",
          }}
        >
          <div
            className={`${styles.orbit} pointer-events-none absolute left-1/2 top-1/2 h-[18rem] w-[18rem] -translate-x-1/2 -translate-y-1/2 rounded-full border border-astral/20 sm:h-[23rem] sm:w-[23rem]`}
            aria-hidden="true"
          />
          <div
            className={`${styles.orbit} ${styles.orbitReverse} pointer-events-none absolute left-1/2 top-1/2 h-44 w-72 -translate-x-1/2 -translate-y-1/2 rotate-[24deg] rounded-[50%] border border-dashed border-brass/30 sm:h-56 sm:w-96`}
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute left-1/2 top-1/2 h-px w-[92%] -translate-x-1/2 bg-astral/20"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute left-1/2 top-1/2 h-[92%] w-px -translate-y-1/2 bg-astral/20"
            aria-hidden="true"
          />
          <div
            className={`${styles.marker} pointer-events-none absolute left-[17%] top-[16%] h-2 w-2 rounded-full bg-brass`}
            aria-hidden="true"
          />
          <span
            className="absolute left-[5%] top-[13%] font-mono text-[8px] uppercase tracking-[0.16em] text-astral/70"
            aria-hidden="true"
          >
            órbita / 03
          </span>
          <span
            className="absolute bottom-[11%] right-[4%] font-mono text-[8px] uppercase tracking-[0.16em] text-astral/70"
            aria-hidden="true"
          >
            lectura situada
          </span>

          {spreadCards.map((card, index) => (
            <div
              key={card.index}
              className={`${styles.card} absolute left-1/2 top-1/2 h-[254px] w-[164px] border p-2 shadow-2xl shadow-black/25 sm:h-[292px] sm:w-[188px] sm:p-3 ${card.tone}`}
              style={{ transform: cardTransforms[index] }}
            >
              <div
                className={`${styles.cardSurface} relative flex h-full flex-col border border-current/30 p-3 sm:p-4`}
                style={{ animationDelay: `${index * -1.7}s` }}
              >
                <div className="flex items-start justify-between border-b border-current/20 pb-3 font-mono text-[8px] uppercase tracking-[0.16em] opacity-70 sm:text-[9px]">
                  <span>AT / {card.index}</span>
                  <span>tirada</span>
                </div>
                <div className="relative flex flex-1 items-center justify-center">
                  <div className="absolute h-28 w-28 rounded-full border border-current/30 sm:h-36 sm:w-36" />
                  <div className="absolute h-16 w-16 rotate-45 border border-current/50 sm:h-20 sm:w-20" />
                  <div className="absolute h-px w-32 bg-current/25 sm:w-40" />
                  <div className="absolute h-32 w-px bg-current/25 sm:h-40" />
                  <span className="relative font-display text-4xl leading-none sm:text-5xl">
                    {card.symbol}
                  </span>
                </div>
                <div className="border-t border-current/20 pt-3">
                  <p className="font-display text-xl leading-none sm:text-2xl">{card.title}</p>
                  <p className="mt-2 font-mono text-[8px] uppercase tracking-[0.12em] opacity-60 sm:text-[9px]">
                    {card.detail}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <figcaption className="border-t border-astral/20 pt-4 font-mono text-[9px] uppercase leading-4 tracking-[0.14em] text-astral/75">
        Fig. 05 / Tres posiciones en relación
      </figcaption>
    </figure>
  );
}
