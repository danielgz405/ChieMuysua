import { SiteFooter } from "@/components/common/navigation/SiteFooter";
import { SiteHeader } from "@/components/common/navigation/SiteHeader";
import { SpreadCatalogue } from "@/components/lecturas/tiradas/SpreadCatalogue";
import { SpreadPrinciples } from "@/components/lecturas/tiradas/SpreadPrinciples";
import { SpreadsCareNote } from "@/components/lecturas/tiradas/SpreadsCareNote";
import { SpreadsHero } from "@/components/lecturas/tiradas/SpreadsHero";

export function SpreadsLanding() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-night text-paper">
      <SiteHeader />
      <main>
        <SpreadsHero />
        <SpreadCatalogue />
        <SpreadPrinciples />
        <SpreadsCareNote />
      </main>
      <SiteFooter />
    </div>
  );
}
