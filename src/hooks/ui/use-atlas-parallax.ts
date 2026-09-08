"use client";

import { useEffect, useState, type PointerEvent as ReactPointerEvent } from "react";

type AtlasPointer = {
  x: number;
  y: number;
};

const initialPointer: AtlasPointer = { x: 0, y: 0 };

export function useAtlasParallax() {
  const [pointer, setPointer] = useState<AtlasPointer>(initialPointer);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotionPreference = () => setReducedMotion(mediaQuery.matches);

    updateMotionPreference();
    mediaQuery.addEventListener("change", updateMotionPreference);

    return () => mediaQuery.removeEventListener("change", updateMotionPreference);
  }, []);

  function handlePointerMove(event: ReactPointerEvent<HTMLElement>) {
    if (reducedMotion || event.pointerType !== "mouse") {
      return;
    }

    const bounds = event.currentTarget.getBoundingClientRect();
    const x = ((event.clientX - bounds.left) / bounds.width) * 2 - 1;
    const y = ((event.clientY - bounds.top) / bounds.height) * 2 - 1;

    setPointer({ x, y });
  }

  function handlePointerLeave() {
    setPointer(initialPointer);
  }

  return {
    handlePointerLeave,
    handlePointerMove,
    pointer,
    reducedMotion,
  };
}
