import { site } from "@/lib/site";
import Clip from "./Clip";
import Button from "./Button";

export default function About() {
  const a = site.about;
  return (
    <section className="grid items-end gap-[clamp(1.5rem,5vw,5rem)] px-[max(16px,4vw)] py-[clamp(4rem,9vw,7rem)] md:grid-cols-[4fr_6fr]">
      <Clip shot="G1" video="media/gael-portrait.mp4" poster="media/gael-portrait.jpg" className="aspect-[3/4]" />
      <div className="grid max-w-xl gap-5">
        <h2 className="text-[clamp(2.2rem,6vw,4.5rem)]">{a.title}</h2>
        <p className="text-lg">{a.text}</p>
        <blockquote className="m-0 border-l-4 border-orange pl-5 text-2xl font-semibold text-flame">“{a.quote}”</blockquote>
        <p><Button href="/story/" variant="link">Read his story</Button></p>
      </div>
    </section>
  );
}
