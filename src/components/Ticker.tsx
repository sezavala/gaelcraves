import { site } from "@/lib/site";

export default function Ticker() {
  // The list is written twice so the scroll loops without a gap.
  const words = [...site.ticker, ...site.ticker];
  return (
    <div className="overflow-hidden border-y-3 border-ink bg-cream text-ink" aria-hidden="true">
      <div className="flex w-max animate-ticker">
        {words.map((w, i) => (
          <span key={i} className="ticker-item px-6 py-3 font-display text-2xl leading-none whitespace-nowrap uppercase">{w}</span>
        ))}
      </div>
    </div>
  );
}
