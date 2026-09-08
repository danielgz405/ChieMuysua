import { SiteFooter } from "@/components/common/navigation/SiteFooter";
import { SiteHeader } from "@/components/common/navigation/SiteHeader";
import { ArcanaCatalogue } from "@/components/tarot/los-78-arcanos/ArcanaCatalogue";
import { ArcanaHero } from "@/components/tarot/los-78-arcanos/ArcanaHero";
import { ArcanaReadingNote } from "@/components/tarot/los-78-arcanos/ArcanaReadingNote";

export function Los78Arcanos() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-paper text-ink">
      <SiteHeader />
      <main>
        <ArcanaHero />
        <ArcanaCatalogue />
        <ArcanaReadingNote />
      </main>
      <SiteFooter />
    </div>
  );
}
