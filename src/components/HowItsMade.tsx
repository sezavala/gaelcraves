// A sticky clip on the left swaps as each step scrolls through the middle of the screen
// (see setUpHowItsMade in SiteEffects.tsx).
import { site } from "@/lib/site";
import SectionHead from "./SectionHead";
import Clip from "./Clip";
import { pad2 } from "@/lib/format";

export default function HowItsMade() {
  const h = site.howItsMade;
  return (
    <section id="how" className="bg-grill-2 px-[max(16px,4vw)] py-[clamp(4rem,9vw,7rem)]">
      <SectionHead eyebrow={h.eyebrow} lines={[h.title]} />
      <div className="grid items-start gap-[clamp(1.5rem,5vw,4rem)] md:grid-cols-2">
        <div className="sticky top-[76px] z-[2] aspect-video md:top-[90px] md:aspect-square">
          {h.steps.map((s, i) => (
            <Clip
              key={s.shot}
              shot={s.shot}
              label={s.placeholder}
              video={s.clip}
              poster={s.poster}
              play="manual"
              data-step={String(i + 1)}
              className={`!absolute inset-0 opacity-0 transition-opacity duration-400 [&.is-active]:opacity-100 ${i === 0 ? "is-active" : ""}`}
            />
          ))}
        </div>
        <ol className="m-0 list-none p-0">
          {h.steps.map((s, i) => (
            <li key={s.shot} data-step={String(i + 1)} className="grid min-h-[40vh] content-center gap-2.5 opacity-35 transition-opacity md:min-h-[60vh] [&.is-active]:opacity-100">
              <span className="font-mono font-semibold text-orange">{pad2(i + 1)}</span>
              <h3 className="text-[clamp(2.5rem,6vw,4.5rem)]">{s.title}</h3>
              <p className="max-w-md text-lg text-muted">{s.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
