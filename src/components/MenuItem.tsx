// One item in the lineup: side-view photo (clip plays on hover or tap), name, macros, price.
// The card is a subgrid of the lineup, so each of its 6 parts sits on a shared row.
import Clip from "./Clip";
import Button from "./Button";
import { orDash, pad2 } from "@/lib/format";
import type { MenuItem as Item } from "@/lib/site";

export default function MenuItem({ item, index }: { item: Item; index: number }) {
  const m = item.macros;
  return (
    <article className="row-span-6 grid min-w-0 grid-rows-subgrid">
      <Clip
        shot={item.shot}
        label={`${item.name}, straight-on side view`}
        photo={item.photo}
        alt={`${item.name}, side view`}
        video={item.clip}
        play="manual"
        data-hover-clip=""
        className="aspect-square ![background:color-mix(in_srgb,var(--color-ink)_14%,var(--color-orange))] [&_img]:object-contain [&_video]:opacity-0 [&_video]:transition-opacity [&.is-playing_video]:opacity-100"
      />
      <p className="mt-2 self-end font-mono text-xs font-semibold tracking-widest uppercase">#{pad2(index + 1)} · {item.category}</p>
      <h3 className="self-start text-[clamp(1.5rem,2.4vw,2rem)]">{item.name}</h3>
      <p className="text-[0.95rem]">{item.description}</p>
      <dl className="macros mt-1 self-start">
        <div className="macros-big"><dt>Protein</dt><dd>{orDash(m.protein)}<small className="text-[0.7em]">g</small></dd></div>
        <div><dt>Calories</dt><dd>{orDash(m.calories)}</dd></div>
        <div><dt>Carbs</dt><dd>{orDash(m.carbs)}<small className="text-[0.7em]">g</small></dd></div>
        <div><dt>Fat</dt><dd>{orDash(m.fat)}<small className="text-[0.7em]">g</small></dd></div>
      </dl>
      <div className="flex items-center justify-between gap-4 self-start pb-10 lg:pb-0">
        <span className="font-mono text-xl font-semibold">${orDash(item.price)}</span>
        <Button variant="small" order orderItem={item.squareUrl}>Order this</Button>
      </div>
    </article>
  );
}
