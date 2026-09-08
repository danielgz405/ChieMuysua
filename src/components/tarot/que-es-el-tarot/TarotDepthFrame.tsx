"use client";

import Image from "next/image";
import collageImage from "@/assets/images/carnation-collage.png";
import { useAtlasParallax } from "@/hooks/ui/use-atlas-parallax";

export function TarotDepthFrame() {
  const { handlePointerLeave, handlePointerMove, pointer, reducedMotion } =
    useAtlasParallax();
  const frameTransform = reducedMotion
    ? "translateZ(0)"
    : `rotateX(${pointer.y * -2.5}deg) rotateY(${pointer.x * 3.2}deg)`;
  const imageTransform = reducedMotion
    ? "scale(1.01) translateZ(0)"
    : `scale(1.03) translate3d(${pointer.x * -4}px, ${pointer.y * -4}px, 8px)`;
  const labelTransform = reducedMotion
    ? "translateZ(16px)"
    : `translate3d(${pointer.x * 4}px, ${pointer.y * 4}px, 18px)`;

  return (
    <figure
      className="relative z-0 w-full max-w-[360px] justify-self-center [perspective:1400px] lg:justify-self-end"
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      <div
        className="relative aspect-[1.38] transition-transform duration-500 ease-out [transform-style:preserve-3d]"
        style={{ transform: frameTransform, willChange: reducedMotion ? "auto" : "transform" }}
      >
        <div
          className="pointer-events-none absolute inset-2 border border-sepia/30 bg-paper-deep/70 transition-transform duration-500 ease-out sm:inset-3"
          style={{ transform: "translate3d(10px, 11px, -28px) rotate(2.5deg)" }}
          aria-hidden="true"
        >
          <div className="absolute inset-3 border border-sepia/20" />
        </div>
        <div
          className="pointer-events-none absolute inset-1 border border-ink/20 bg-paper/70 transition-transform duration-500 ease-out"
          style={{ transform: "translate3d(-7px, 8px, -16px) rotate(-1.5deg)" }}
          aria-hidden="true"
        />

        <div className="relative h-full overflow-hidden border border-paper-deep bg-paper-deep p-2 sm:p-3 [transform:translateZ(0)]">
          <div className="relative h-full overflow-hidden border border-sepia/40 [transform-style:preserve-3d]">
            <Image
              src={collageImage}
              alt="Collage de una lámina botánica y un mapa astronómico de archivo"
              fill
              priority
              sizes="(min-width: 1024px) 360px, 92vw"
              className="object-cover object-center mix-blend-multiply transition-transform duration-500 ease-out"
              style={{ transform: imageTransform }}
            />
            <div className="absolute inset-0 bg-paper/10 mix-blend-screen" aria-hidden="true" />
            <div
              className="absolute inset-x-3 bottom-3 border-t border-sepia/60 bg-paper/70 pt-2 font-mono text-[8px] uppercase tracking-[0.12em] text-sepia transition-transform duration-500 ease-out sm:inset-x-4 sm:bottom-4 sm:text-[9px] sm:tracking-[0.16em]"
              style={{ transform: labelTransform }}
            >
              Imagen / signo / relación
            </div>
          </div>
          <span
            className="absolute right-2 top-2 bg-paper px-2 font-display text-xl italic text-sepia transition-transform duration-500 ease-out sm:right-3 sm:top-3 sm:text-2xl"
            style={{ transform: labelTransform }}
          >
            Pl. 01
          </span>
        </div>
      </div>
      <figcaption className="mt-4 flex items-start justify-between gap-5 font-mono text-[9px] uppercase leading-4 tracking-[0.14em] text-sepia">
        <span>Fig. 01 / Una imagen nunca está sola</span>
        <span className="text-right">Lámina de estudio</span>
      </figcaption>
    </figure>
  );
}
