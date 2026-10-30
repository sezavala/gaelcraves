import { site } from "@/lib/site";
import SectionHead from "./SectionHead";
import MenuItem from "./MenuItem";
import Button from "./Button";

export default function Lineup() {
  const menu = site.menu;
  return (
    <section id="menu" className="bg-orange px-[max(16px,4vw)] py-[clamp(4rem,9vw,7rem)] text-ink">
      {/* Each card spans 6 rows of this grid (photo, number, name, description, macros, price),
          so the same part of every card lines up even when a name wraps to two lines. */}
      <SectionHead eyebrow={menu.eyebrow} lines={menu.titleLines} eyebrowClass="text-ink" />
      <div className="grid gap-x-8 gap-y-3 sm:grid-cols-2 lg:grid-cols-4">
        {menu.items.map((item, i) => (
          <MenuItem key={item.shot} item={item} index={i} />
        ))}
      </div>
      <p className="mt-12 text-center"><Button order variant="dark" size="lg">See the full menu and order</Button></p>
    </section>
  );
}
