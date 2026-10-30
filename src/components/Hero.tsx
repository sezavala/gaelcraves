// First screen. Short clips play back to back (person, food, person, food);
// the list of clips is hero.playlist in site.json.
import { Fragment } from "react";
import { site, asset } from "@/lib/site";
import Clip from "./Clip";
import Button from "./Button";
import Eyebrow from "./Eyebrow";

export default function Hero() {
  const h = site.hero;
  return (
    <section className="relative isolate grid min-h-[min(92svh,900px)] items-end px-[max(16px,4vw)] pt-24 pb-14 after:pointer-events-none after:absolute after:inset-0 after:z-[1] after:bg-gradient-to-t after:from-grill after:to-transparent after:to-60%">
      <Clip className="!absolute inset-0 !rounded-none [&>figcaption]:top-24 [&>figcaption]:right-[max(16px,4vw)] [&>figcaption]:bottom-auto [&>figcaption]:left-auto [&>figcaption]:max-w-[60%]">
        <video
          className="absolute inset-0 z-[2] size-full object-cover"
          autoPlay
          muted
          playsInline
          preload="auto"
          poster={asset(`media/${h.playlist[0]}.jpg`)}
          data-hero-playlist={JSON.stringify(
            h.playlist.map((n) => asset(`media/${n}`)),
          )}
        />
      </Clip>
      <div className="relative z-[2] grid max-w-5xl gap-5">
        <Eyebrow>{h.eyebrow}</Eyebrow>
        <h1 className="text-[clamp(2.8rem,9vw,8rem)] [text-shadow:6px_6px_0_var(--color-orange)]">
          {h.titleLines.map((line, i) => (
            <Fragment key={i}>
              {line}
              <br />
            </Fragment>
          ))}
          <span className="text-flame">{h.titleHighlight}</span>
        </h1>
        <p className="max-w-xl text-xl">{h.sub}</p>
        <div className="mt-2 flex flex-wrap gap-4">
          <Button order size="lg">
            {h.orderButton}
          </Button>
          <Button href="#menu" variant="ghost" size="lg">
            See the macros
          </Button>
        </div>
      </div>
    </section>
  );
}
