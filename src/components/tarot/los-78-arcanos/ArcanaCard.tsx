import { ChevronDownIcon } from "@heroicons/react/24/outline";
import type { Arcana } from "@/utils/tarot/arcana";
import { arcanaSuits } from "@/utils/tarot/arcana";
import styles from "./ArcanaCard.module.css";

type ArcanaCardProps = {
  arcana: Arcana;
};

const majorPalette = {
  card: "border-astral/45 bg-night text-paper",
  frame: "border-astral/30",
  accent: "text-brass",
  muted: "text-astral",
  orbit: "border-astral/35",
  diamond: "border-brass/55",
  line: "bg-astral/30",
  detail: "border-astral/25 text-paper/70",
};

const minorPalette = {
  card: "border-paper-deep bg-paper text-ink",
  frame: "border-sepia/35",
  accent: "text-sepia",
  muted: "text-sepia/75",
  orbit: "border-sepia/30",
  diamond: "border-sepia/55",
  line: "bg-sepia/25",
  detail: "border-paper-deep text-ink/70",
};

export function ArcanaCard({ arcana }: ArcanaCardProps) {
  const palette = arcana.kind === "major" ? majorPalette : minorPalette;
  const suitDefinition = arcana.suit
    ? arcanaSuits.find((suit) => suit.suit === arcana.suit)
    : undefined;
  const cardTitleId = `arcana-card-${arcana.id}`;

  return (
    <article className={styles.perspective} aria-labelledby={cardTitleId}>
      <div className={`${styles.card} relative`}>
        <div
          className={`${styles.edge} pointer-events-none absolute inset-0 border ${palette.card}`}
          aria-hidden="true"
        />
        <div
          className={`relative z-10 flex aspect-[0.68] flex-col overflow-hidden border p-2 sm:p-3 ${palette.card}`}
        >
          <div className={`${styles.face} relative flex h-full flex-col border p-3 sm:p-4 ${palette.frame}`}>
            <div className="flex items-start justify-between border-b border-current/20 pb-3 font-mono text-[8px] uppercase tracking-[0.16em] opacity-70 sm:text-[9px]">
              <span>AT / {String(arcana.catalogIndex).padStart(2, "0")}</span>
              <span>{arcana.kind === "major" ? "Mayor" : "Menor"}</span>
            </div>

            <div className={`${styles.artwork} relative mt-3 flex min-h-0 flex-1 items-center justify-center overflow-hidden border ${palette.frame}`}>
              <div
                className={`absolute h-[72%] aspect-square rounded-full border ${palette.orbit}`}
                aria-hidden="true"
              />
              <div
                className={`absolute h-16 w-16 rotate-45 border ${palette.diamond} sm:h-20 sm:w-20`}
                aria-hidden="true"
              />
              <div className={`absolute h-px w-[82%] ${palette.line}`} aria-hidden="true" />
              <div className={`absolute h-[82%] w-px ${palette.line}`} aria-hidden="true" />
              <span className={`relative font-display text-5xl leading-none ${palette.accent} sm:text-6xl`}>
                {arcana.roman}
              </span>
              <span className={`absolute bottom-3 left-3 font-mono text-[8px] uppercase tracking-[0.14em] ${palette.muted}`}>
                {arcana.kind === "major"
                  ? "escala mayor"
                  : `menor / ${suitDefinition?.label ?? arcana.suit}`}
              </span>
            </div>

            <div className={`${styles.catalogueMeta} pt-3`}>
              <h3
                id={cardTitleId}
                className="min-h-[2.9rem] font-display text-[1.7rem] leading-[0.88] tracking-[-0.025em] sm:text-[1.9rem]"
              >
                {arcana.name}
              </h3>
              <p className={`mt-3 min-h-[2rem] font-mono text-[8px] uppercase leading-4 tracking-[0.1em] ${palette.muted}`}>
                {arcana.keywords.join(" / ")}
              </p>
            </div>
          </div>
        </div>
      </div>

      <details className={`${styles.details} group mt-3`}>
        <summary
          className={`${styles.summary} flex cursor-pointer list-none items-center justify-between gap-3 border-b px-1 pb-2 font-mono text-[9px] uppercase tracking-[0.14em] outline-none transition-colors hover:border-ink focus-visible:border-ink focus-visible:ring-2 focus-visible:ring-sepia focus-visible:ring-offset-2 focus-visible:ring-offset-paper ${palette.detail}`}
        >
          <span>Leer la nota</span>
          <ChevronDownIcon
            className={`${styles.summaryIcon} h-3.5 w-3.5 shrink-0 ${palette.muted}`}
            aria-hidden="true"
          />
        </summary>
        <p className="border-b border-paper-deep py-3 text-sm leading-6 text-ink/70">
          {arcana.description}
        </p>
      </details>
    </article>
  );
}
