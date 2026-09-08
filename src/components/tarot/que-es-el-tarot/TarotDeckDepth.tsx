"use client";

import { type ReactNode } from "react";
import { useAtlasParallax } from "@/hooks/ui/use-atlas-parallax";

type TarotDeckDepthProps = {
  children: ReactNode;
};

export function TarotDeckDepth({ children }: TarotDeckDepthProps) {
  const { handlePointerLeave, handlePointerMove, pointer, reducedMotion } =
    useAtlasParallax();
  const surfaceTransform = reducedMotion
    ? "translateZ(0)"
    : `rotateX(${pointer.y * -2.5}deg) rotateY(${pointer.x * 3.5}deg)`;

  return (
    <div
      className="relative [perspective:1400px]"
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      <div
        className="relative transition-transform duration-500 ease-out [transform-style:preserve-3d]"
        style={{
          transform: surfaceTransform,
          willChange: reducedMotion ? "auto" : "transform",
        }}
      >
        <div
          className="pointer-events-none absolute inset-1 border border-brass/35 bg-night-soft transition-transform duration-500 ease-out"
          style={{ transform: "translate3d(-16px, 15px, -34px) rotate(-4deg)" }}
          aria-hidden="true"
        >
          <div className="absolute inset-3 border border-astral/20" />
        </div>
        <div
          className="pointer-events-none absolute inset-0 border border-astral/25 bg-night transition-transform duration-500 ease-out"
          style={{ transform: "translate3d(11px, 10px, -20px) rotate(2deg)" }}
          aria-hidden="true"
        />
        <div className="relative z-10 [transform:translateZ(0)]">{children}</div>
      </div>
    </div>
  );
}
