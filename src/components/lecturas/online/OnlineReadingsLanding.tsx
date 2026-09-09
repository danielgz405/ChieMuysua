import { SiteFooter } from "@/components/common/navigation/SiteFooter";
import { SiteHeader } from "@/components/common/navigation/SiteHeader";
import { OnlineReadingPrinciples } from "@/components/lecturas/online/OnlineReadingPrinciples";
import { OnlineReadingCatalogue } from "@/components/lecturas/online/OnlineReadingCatalogue";
import { OnlineReadingsCare } from "@/components/lecturas/online/OnlineReadingsCare";
import { OnlineReadingsHero } from "@/components/lecturas/online/OnlineReadingsHero";

export function OnlineReadingsLanding() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-night text-paper">
      <SiteHeader />
      <main>
        <OnlineReadingsHero />
        <OnlineReadingCatalogue />
        <OnlineReadingPrinciples />
        <OnlineReadingsCare />
      </main>
      <SiteFooter />
    </div>
  );
}
