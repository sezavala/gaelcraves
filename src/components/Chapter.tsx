// The Our Story block: one photo with the story text next to it.
// Everything shown here comes from "story" in src/data/site.json.
import Clip from "./Clip";
import Eyebrow from "./Eyebrow";
import type { Story } from "@/lib/site";

export default function Chapter({ story, children }: { story: Story; children?: React.ReactNode }) {
  return (
    <section className="grid items-center gap-[clamp(1.5rem,5vw,4rem)] px-[max(16px,4vw)] py-[clamp(3rem,7vw,6rem)] md:grid-cols-[5fr_6fr]">
      <Clip
        photo={story.photo.src}
        alt={story.photo.alt}
        className="aspect-[4/5]"
      />
      <div className="grid max-w-[38rem] gap-5">
        <Eyebrow>{story.eyebrow}</Eyebrow>
        <h1 className="text-[clamp(2.4rem,6vw,4.5rem)]">{story.title}</h1>
        {story.paragraphs.map((p, i) => (
          <p key={i} className="text-lg text-muted">
            {p}
          </p>
        ))}
        {children}
      </div>
    </section>
  );
}
