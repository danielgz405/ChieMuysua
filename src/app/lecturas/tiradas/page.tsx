import type { Metadata } from "next";
import { SpreadsLanding } from "@/components/lecturas/tiradas/SpreadsLanding";

export const metadata: Metadata = {
  title: "Tiradas | ChieMuysua",
  description:
    "Consulta el catálogo de tiradas de tarot y encuentra una estructura adecuada para la pregunta que quieres observar.",
};

export default function SpreadsPage() {
  return <SpreadsLanding />;
}
