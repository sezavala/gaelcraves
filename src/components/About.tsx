import { site } from "@/lib/site";
import Clip from "./Clip";
import Eyebrow from "./Eyebrow";
import Button from "./Button";

export default function About() {
  const a = site.about;
  return (
    <section className="grid items-center gap-[clamp(1.5rem,5vw,5rem)] px-[max(16px,4vw)] py-[clamp(4rem,9vw,7rem)] md:grid-cols-[5fr_6fr]">
      <Clip shot="G1" label="Christian at the griddle, looks up to camera" video="media/gael-portrait.mp4" poster="media/gael-portrait.jpg" className="aspect-[3/4]" />
      <div className="grid max-w-xl gap-5">
        <Eyebrow>{a.eyebrow}</Eyebrow>
        <h2 className="text-[clamp(2.2rem,6vw,4.5rem)]">{a.title}</h2>
        <p>{a.text}</p>
        <p className="font-display text-3xl leading-tight text-flame">“{a.quote}”</p>
        <p><Button href="/story/" variant="ghost">Read his story</Button></p>
      </div>
    </section>
  );
}
