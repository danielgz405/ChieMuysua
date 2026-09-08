import { SiteFooter } from "@/components/common/navigation/SiteFooter";
import { SiteHeader } from "@/components/common/navigation/SiteHeader";
import { TarotBoundariesSection } from "@/components/tarot/que-es-el-tarot/TarotBoundariesSection";
import { TarotDeckSection } from "@/components/tarot/que-es-el-tarot/TarotDeckSection";
import { TarotPrimerHero } from "@/components/tarot/que-es-el-tarot/TarotPrimerHero";
import { TarotPrimerNextStep } from "@/components/tarot/que-es-el-tarot/TarotPrimerNextStep";
import { TarotReadingSection } from "@/components/tarot/que-es-el-tarot/TarotReadingSection";

export function TarotPrimer() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-paper text-ink">
      <SiteHeader />
      <main>
        <TarotPrimerHero />
        <TarotDeckSection />
        <TarotReadingSection />
        <TarotBoundariesSection />
        <TarotPrimerNextStep />
      </main>
      <SiteFooter />
    </div>
  );
}
