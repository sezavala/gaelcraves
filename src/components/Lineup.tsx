// The menu: the food lined up side by side (clips play on hover or tap),
// then a printed-style menu board with prices and macros.
import { site } from "@/lib/site";
import SectionHead from "./SectionHead";
import Clip from "./Clip";
import MenuItem from "./MenuItem";
import Button from "./Button";

export default function Lineup() {
  const menu = site.menu;
  return (
    <section id="menu" className="bg-orange px-[max(16px,4vw)] pt-[clamp(4rem,8vw,6rem)] pb-[clamp(3rem,6vw,5rem)] text-ink">
      <SectionHead lines={menu.titleLines} />

      {/* Side by side, like a lineup. Photos are cut-outs (transparent PNG) so they sit right on the orange. */}
      <div className="grid grid-cols-2 gap-x-4 gap-y-6 lg:grid-cols-4">
        {menu.items.map((item) => (
          <a key={item.shot} href={`#item-${item.shot}`} className="group no-underline">
            <Clip
              shot={item.shot}
              photo={item.photo}
              alt={`${item.name}, side view`}
              video={item.clip}
              play="manual"
              data-hover-clip=""
              className="aspect-square !bg-transparent [&_img]:object-contain [&_video]:opacity-0 [&_video]:transition-opacity [&.is-playing_video]:opacity-100"
            />
            <p className="mt-2 font-display text-lg leading-tight uppercase group-hover:underline">{item.name}</p>
          </a>
        ))}
      </div>

      <div className="mt-[clamp(2.5rem,6vw,4rem)] bg-cream px-[clamp(1.25rem,4vw,3.5rem)] py-[clamp(1.5rem,4vw,3rem)]">
        <div className="grid gap-x-16 md:grid-cols-2">
          {menu.items.map((item) => (
            <MenuItem key={item.shot} item={item} />
          ))}
        </div>
        <p className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 border-t-2 border-ink pt-6">
          <Button order variant="dark" size="lg">Order for pickup</Button>
          <span>The full menu, sides and drinks are on the order page.</span>
        </p>
      </div>
    </section>
  );
}
