import { site } from "@/lib/site";
import SectionHead from "./SectionHead";
import Clip from "./Clip";
import Button from "./Button";

// "wide" photos take two columns, "tall" photos take two rows.
const sizes: Record<string, string> = { wide: "col-span-2", tall: "row-span-2" };

export default function Collage() {
  const p = site.photos;
  return (
    <section id="photos" className="px-[max(16px,4vw)] py-[clamp(4rem,9vw,7rem)]">
      <SectionHead eyebrow={p.eyebrow} lines={[p.title]} />
      <div className="grid grid-flow-dense auto-rows-[150px] grid-cols-2 gap-3 md:auto-rows-[clamp(140px,18vw,260px)] md:grid-cols-4">
        {p.items.map((photo) => (
          <Clip
            key={photo.shot}
            shot={photo.shot}
            label={photo.alt}
            photo={photo.src}
            alt={photo.alt}
            className={`${sizes[photo.size] ?? ""} [&_img]:transition-transform [&_img]:duration-500 hover:[&_img]:scale-[1.04]`}
          />
        ))}
      </div>
      <p className="mt-8 text-center"><Button href={site.business.instagramUrl} external variant="ghost">More on Instagram</Button></p>
    </section>
  );
}
