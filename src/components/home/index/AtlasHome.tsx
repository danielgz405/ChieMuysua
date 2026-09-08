import { SiteFooter } from "@/components/common/navigation/SiteFooter";
import { SiteHeader } from "@/components/common/navigation/SiteHeader";
import { AtlasIntroduction } from "@/components/home/index/AtlasIntroduction";
import { AtlasMap } from "@/components/home/index/AtlasMap";

export function AtlasHome() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-night text-paper">
      <SiteHeader />
      <main>
        <AtlasIntroduction />
        <AtlasMap />
      </main>
      <SiteFooter />
    </div>
  );
}
