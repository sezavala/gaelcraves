// First screen. Short clips play back to back (person, food, person, food);
// the list of clips is hero.playlist in site.json.
import { site, asset } from "@/lib/site";
import Clip from "./Clip";
import Button from "./Button";

export default function Hero() {
  const h = site.hero;
  const b = site.business;
  return (
    <section className="relative isolate grid min-h-[min(88svh,860px)] items-end px-[max(16px,4vw)] pt-24 pb-10 md:pb-12 after:pointer-events-none after:absolute after:inset-0 after:z-[1] after:bg-gradient-to-t after:from-grill after:from-10% after:to-transparent after:to-70%">
      <Clip className="!absolute inset-0">
        <video
          className="absolute inset-0 z-[2] size-full object-cover"
          autoPlay
          muted
          playsInline
          preload="auto"
          poster={asset(`media/${h.playlist[0]}.jpg`)}
          data-hero-playlist={JSON.stringify(h.playlist.map((n) => asset(`media/${n}`)))}
        />
      </Clip>

      {/* The logo badge, stuck on like a sticker (desktop only; phones already show it in the header) */}
      <img
        src={asset("media/logo.png")}
        alt=""
        className="absolute top-12 right-[max(16px,4vw)] z-[2] hidden w-[clamp(110px,14vw,190px)] md:block rotate-[8deg]"
      />

      <div className="relative z-[2] grid max-w-4xl gap-6">
        <h1 className="text-[clamp(3rem,10vw,8.5rem)] leading-[0.88]">
          {h.titleLines.join(" ")} {h.titleHighlight}
        </h1>
        <p className="max-w-lg text-xl">{h.sub}</p>
        <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
          <Button order size="lg">{h.orderButton}</Button>
          <span className="text-muted">
            {b.location}, {b.addressLine1}, Soledad
          </span>
        </div>
      </div>
    </section>
  );
}
