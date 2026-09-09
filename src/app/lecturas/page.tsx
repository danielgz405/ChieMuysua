import type { Metadata } from "next";
import { ReadingsLanding } from "@/components/lecturas/index/ReadingsLanding";

export const metadata: Metadata = {
  title: "Lecturas | Chie Muysua",
  description:
    "Explora métodos y tiradas de tarot para formular preguntas, observar relaciones y encontrar una orientación propia.",
};

export default function ReadingsPage() {
  return <ReadingsLanding />;
}
