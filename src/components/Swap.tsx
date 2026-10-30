import { site } from "@/lib/site";
import Clip from "./Clip";
import Eyebrow from "./Eyebrow";
import { orDash } from "@/lib/format";

export default function Swap() {
  const s = site.swap;
  return (
    <section id="swap" className="grid items-center gap-[clamp(1.5rem,5vw,5rem)] px-[max(16px,4vw)] py-[clamp(4rem,9vw,7rem)] md:grid-cols-[5fr_6fr]">
      <div className="grid grid-cols-2 gap-4">
        {s.clips.map((c, i) => (
          <Clip key={c.shot} shot={c.shot} label={c.placeholder} video={c.src} poster={c.poster} className={`aspect-square ${i === 1 ? "mt-12" : ""}`} />
        ))}
      </div>
      <div className="grid max-w-[38rem] gap-5">
        <Eyebrow>{s.eyebrow}</Eyebrow>
        <h2 className="text-[clamp(2.2rem,6vw,4.5rem)]">{s.title}</h2>
        <p>{s.text}</p>
        <table className="w-full border-collapse font-mono">
          <thead>
            <tr className="text-xs tracking-widest text-muted uppercase">
              <th scope="col"></th>
              <th scope="col" className="p-2 text-left">Usual</th>
              <th scope="col" className="p-2 text-left text-flame">Gaelcraves</th>
            </tr>
          </thead>
          <tbody>
            {s.rows.map((r) => (
              <tr key={r.part} className="border-b border-dashed border-char">
                <th scope="row" className="p-2 text-left font-semibold">{r.part}</th>
                <td className="p-2 text-muted line-through">{orDash(r.usual)}</td>
                <td className="p-2 text-flame">{orDash(r.ours)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
