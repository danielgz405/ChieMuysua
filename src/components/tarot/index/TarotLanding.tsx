import { SiteFooter } from "@/components/common/navigation/SiteFooter";
import { SiteHeader } from "@/components/common/navigation/SiteHeader";
import { ArchiveSection } from "@/components/tarot/index/ArchiveSection";
import { EthicsNote } from "@/components/tarot/index/EthicsNote";
import { ReadingGateway } from "@/components/tarot/index/ReadingGateway";
import { TarotHero } from "@/components/tarot/index/TarotHero";

export function TarotLanding() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-night text-paper">
      <SiteHeader />
      <main>
        <TarotHero />
        <ArchiveSection />
        <ReadingGateway />
        <EthicsNote />
      </main>
      <SiteFooter />
    </div>
  );
}
