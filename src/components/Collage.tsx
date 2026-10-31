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
      <SectionHead lines={[p.title]} />
      <div className="grid grid-flow-dense auto-rows-[150px] grid-cols-2 gap-1.5 md:auto-rows-[clamp(140px,18vw,260px)] md:grid-cols-4">
        {p.items.map((photo) => (
          <Clip key={photo.shot} shot={photo.shot} photo={photo.src} alt={photo.alt} className={sizes[photo.size] ?? ""} />
        ))}
      </div>
      <p className="mt-6">
        <Button href={site.business.instagramUrl} external variant="link">More on Instagram</Button>
      </p>
    </section>
  );
}
