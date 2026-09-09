import { SiteFooter } from "@/components/common/navigation/SiteFooter";
import { SiteHeader } from "@/components/common/navigation/SiteHeader";
import { ReadingMethods } from "@/components/lecturas/index/ReadingMethods";
import { ReadingProcess } from "@/components/lecturas/index/ReadingProcess";
import { ReadingsEthics } from "@/components/lecturas/index/ReadingsEthics";
import { ReadingsHero } from "@/components/lecturas/index/ReadingsHero";

export function ReadingsLanding() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-night text-paper">
      <SiteHeader />
      <main>
        <ReadingsHero />
        <ReadingMethods />
        <ReadingProcess />
        <ReadingsEthics />
      </main>
      <SiteFooter />
    </div>
  );
}
