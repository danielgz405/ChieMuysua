import type { Metadata } from "next";
import { TarotPrimer } from "@/components/tarot/que-es-el-tarot/TarotPrimer";

export const metadata: Metadata = {
  title: "¿Qué es el tarot? | Chie Muysua",
  description:
    "Una introducción al tarot: su estructura, sus imágenes y la lectura como práctica simbólica y reflexiva.",
};

export default function WhatIsTarotPage() {
  return <TarotPrimer />;
}
