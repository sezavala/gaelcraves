// One line on the menu board: name, dotted line, price, then what's in it and the macros.
import { orDash } from "@/lib/format";
import type { MenuItem as Item } from "@/lib/site";

export default function MenuItem({ item }: { item: Item }) {
  const m = item.macros;
  const macros = [
    ["protein", m.protein, "g"],
    ["cal", m.calories, ""],
    ["carbs", m.carbs, "g"],
    ["fat", m.fat, "g"],
  ];
  return (
    <article id={`item-${item.shot}`} className="border-b border-dashed border-ink/40 py-5 last:border-0 md:[&:nth-last-child(2)]:border-0">
      <h3 className="flex items-baseline gap-3 text-[clamp(1.3rem,2.2vw,1.7rem)]">
        <span>{item.name}</span>
        <span className="mb-1 flex-1 border-b-3 border-dotted border-ink/50" aria-hidden="true" />
        <span className="tabular-nums">${orDash(item.price)}</span>
      </h3>
      <p className="mt-2 whitespace-pre-line">{item.description}</p>
      <p className="mt-2 text-sm">
        {macros.map(([label, value, unit]) => (
          <span key={label} className="mr-4 inline-block">
            <b className="text-base text-orange">{orDash(value)}{value ? unit : ""}</b> {label}
          </span>
        ))}
        {item.squareUrl && (
          <a href={item.squareUrl} target="_blank" rel="noopener" className="font-semibold underline underline-offset-4">Order this</a>
        )}
      </p>
    </article>
  );
}
