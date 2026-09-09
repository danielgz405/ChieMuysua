import type { Metadata } from "next";
import { OnlineReadingsLanding } from "@/components/lecturas/online/OnlineReadingsLanding";

export const metadata: Metadata = {
  title: "Lectura online | Chie Muysua",
  description:
    "Prepara una lectura online de tarot: elige una escala, formula tu pregunta y abre un campo de observación.",
};

export default function OnlineReadingsPage() {
  return <OnlineReadingsLanding />;
}
