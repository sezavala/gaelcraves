import { site } from "@/lib/site";
import Clip from "./Clip";
import Eyebrow from "./Eyebrow";
import Button from "./Button";
import { orDash } from "@/lib/format";

export default function Find() {
  const f = site.find;
  const b = site.business;
  return (
    <section id="find" className="relative px-[max(16px,4vw)] pb-[clamp(4rem,9vw,7rem)]">
      <Clip shot="F1" label="Walk in from Main St to the kitchen window" video="media/find-walkin.mp4" poster="media/find-walkin.jpg" className="aspect-video" />
      <div className="relative z-[2] mt-6 grid w-[calc(100%-8px)] max-w-[30rem] gap-4 rounded bg-orange p-6 text-text shadow-[8px_8px_0_var(--color-flame)] md:mx-auto md:-mt-24 md:mr-0 md:w-full md:p-8">
        <Eyebrow className="text-ink">{f.eyebrow}</Eyebrow>
        <h2 className="text-[clamp(1.8rem,4vw,2.6rem)]">{f.title}</h2>
        <address className="font-mono text-lg font-semibold not-italic">{b.addressLine1}<br />{b.addressLine2}</address>
        <dl className="m-0 grid gap-1 font-mono">
          {f.hours.map((h) => (
            <div key={h.days} className="flex justify-between border-b border-dashed border-text/40 pb-1">
              <dt>{h.days}</dt>
              <dd className="m-0">{orDash(h.time)}</dd>
            </div>
          ))}
        </dl>
        <p>{f.note}</p>
        <div className="flex flex-wrap gap-3">
          <Button order variant="dark">Order ahead</Button>
          <Button href={b.mapsUrl} external variant="ghost">Directions</Button>
        </div>
      </div>
    </section>
  );
}
