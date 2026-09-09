"use client";

import { useAtlasParallax } from "@/hooks/ui/use-atlas-parallax";
import styles from "./ReadingsHeroDeck.module.css";

const readingCards = [
  {
    index: "01",
    title: "La pregunta",
    detail: "origen",
    symbol: "I",
    tone: "border-paper-deep bg-paper text-ink",
  },
  {
    index: "02",
    title: "La posición",
    detail: "contexto",
    symbol: "II",
    tone: "border-astral/50 bg-night-soft text-paper",
  },
  {
    index: "03",
    title: "La relación",
    detail: "lectura",
    symbol: "III",
    tone: "border-brass/70 bg-paper-deep text-ink",
  },
] as const;

const cardTransforms = [
  "translate3d(-72%, -50%, 0) rotate(-10deg)",
  "translate3d(-50%, -50%, 54px) rotate(0deg)",
  "translate3d(-28%, -50%, 0) rotate(10deg)",
] as const;

export function ReadingsHeroDeck() {
  const { handlePointerLeave, handlePointerMove, pointer, reducedMotion } =
    useAtlasParallax();
  const sceneTransform = reducedMotion
    ? "translateZ(0)"
    : `rotateX(${pointer.y * -4}deg) rotateY(${pointer.x * 5}deg)`;

  return (
    <div
      className="relative mx-auto h-[370px] w-full max-w-[430px] [perspective:1500px] sm:h-[450px]"
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      role="img"
      aria-label="Diagrama tridimensional de una lectura con tres posiciones: pregunta, contexto y relación."
    >
      <div
        className={`${styles.scene} relative h-full w-full`}
        style={{
          transform: sceneTransform,
          willChange: reducedMotion ? "auto" : "transform",
        }}
      >
        <div
          className={`${styles.orbit} pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full border border-astral/25 sm:h-80 sm:w-80`}
          aria-hidden="true"
        />
        <div
          className={`${styles.orbit} ${styles.orbitReverse} pointer-events-none absolute left-1/2 top-1/2 h-44 w-72 -translate-x-1/2 -translate-y-1/2 rotate-[24deg] rounded-[50%] border border-dashed border-brass/35 sm:h-56 sm:w-96`}
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 h-px w-[92%] -translate-x-1/2 bg-astral/25"
          aria-hidden="true"
        />
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 h-[92%] w-px -translate-y-1/2 bg-astral/25"
          aria-hidden="true"
        />
        <div
          className={`${styles.marker} pointer-events-none absolute left-[17%] top-[20%] h-2 w-2 rounded-full bg-brass`}
          aria-hidden="true"
        />
        <div
          className="absolute left-0 top-1/2 -translate-y-1/2 font-mono text-[8px] uppercase tracking-[0.16em] text-astral/70"
          aria-hidden="true"
        >
          Pregunta
        </div>
        <div
          className="absolute bottom-[13%] right-0 font-mono text-[8px] uppercase tracking-[0.16em] text-astral/70"
          aria-hidden="true"
        >
          03 / relación
        </div>

        {readingCards.map((card, index) => (
          <div
            key={card.index}
            className={`${styles.card} absolute left-1/2 top-1/2 h-[286px] w-[184px] border p-2 shadow-2xl shadow-black/25 sm:h-[350px] sm:w-[224px] sm:p-3 ${card.tone}`}
            style={{ transform: cardTransforms[index] }}
          >
            <div
              className={`${styles.cardSurface} relative flex h-full flex-col border border-current/30 p-3 sm:p-4`}
              style={{ animationDelay: `${index * -1.8}s` }}
            >
              <div className="flex items-start justify-between border-b border-current/20 pb-3 font-mono text-[8px] uppercase tracking-[0.16em] opacity-70 sm:text-[9px]">
                <span>AT / {card.index}</span>
                <span>Posición</span>
              </div>
              <div className="relative flex flex-1 items-center justify-center">
                <div className="absolute h-32 w-32 rounded-full border border-current/30 sm:h-40 sm:w-40" />
                <div className="absolute h-20 w-20 rotate-45 border border-current/50 sm:h-24 sm:w-24" />
                <div className="absolute h-px w-40 bg-current/25 sm:w-48" />
                <div className="absolute h-40 w-px bg-current/25 sm:h-48" />
                <span className="relative font-display text-5xl leading-none sm:text-6xl">
                  {card.symbol}
                </span>
              </div>
              <div className="border-t border-current/20 pt-3">
                <p className="font-display text-2xl leading-none sm:text-3xl">{card.title}</p>
                <p className="mt-2 font-mono text-[8px] uppercase tracking-[0.12em] opacity-60 sm:text-[9px]">
                  {card.detail}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
