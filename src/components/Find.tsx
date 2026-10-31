// Where and when, printed like the hours sign on a door.
import { site } from "@/lib/site";
import Clip from "./Clip";
import Button from "./Button";
import { orDash } from "@/lib/format";

export default function Find() {
  const f = site.find;
  const b = site.business;
  return (
    <section id="find" className="relative px-[max(16px,4vw)] pb-[clamp(4rem,9vw,7rem)]">
      <Clip shot="F1" video="media/find-walkin.mp4" poster="media/find-walkin.jpg" className="aspect-video" />
      <div className="relative z-[2] mt-6 grid max-w-[28rem] gap-4 bg-cream p-6 text-ink md:mr-[6%] md:ml-auto md:-mt-32 md:-rotate-1 md:p-8">
        <h2 className="text-[clamp(1.8rem,4vw,2.6rem)]">{f.title}</h2>
        <address className="text-lg font-semibold not-italic">{b.addressLine1}<br />{b.addressLine2}</address>
        <dl className="m-0 grid gap-1 tabular-nums">
          {f.hours.map((h) => (
            <div key={h.days} className="flex justify-between border-b border-ink/25 pb-1">
              <dt className="font-semibold">{h.days}</dt>
              <dd className="m-0">{orDash(h.time)}</dd>
            </div>
          ))}
        </dl>
        <p>{f.note}</p>
        <div className="flex flex-wrap items-center gap-x-6 gap-y-3">
          <Button order>Order ahead</Button>
          <Button href={b.mapsUrl} external variant="link">Directions</Button>
        </div>
      </div>
    </section>
  );
}
