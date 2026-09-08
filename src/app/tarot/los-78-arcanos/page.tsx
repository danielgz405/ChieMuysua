import type { Metadata } from "next";
import { Los78Arcanos } from "@/components/tarot/los-78-arcanos/Los78Arcanos";

export const metadata: Metadata = {
  title: "Los 78 arcanos | El Atlas del Tarot",
  description:
    "Explora el índice completo de los 22 arcanos mayores y los 56 arcanos menores del tarot.",
};

export default function Los78ArcanosPage() {
  return <Los78Arcanos />;
}
