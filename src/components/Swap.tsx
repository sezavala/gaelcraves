import { site } from "@/lib/site";
import Clip from "./Clip";
import { orDash } from "@/lib/format";

export default function Swap() {
  const s = site.swap;
  return (
    <section id="swap" className="grid items-center gap-[clamp(1.5rem,5vw,5rem)] px-[max(16px,4vw)] py-[clamp(4rem,9vw,7rem)] md:grid-cols-[5fr_6fr]">
      <div className="grid grid-cols-2 gap-1.5">
        {s.clips.map((c) => (
          <Clip key={c.shot} shot={c.shot} video={c.src} poster={c.poster} className="aspect-[3/4]" />
        ))}
      </div>
      <div className="grid max-w-[38rem] gap-5">
        <h2 className="text-[clamp(2.2rem,6vw,4.5rem)]">{s.title}</h2>
        <p className="text-lg">{s.text}</p>
        <table className="w-full border-collapse">
          <thead>
            <tr className="border-b-2 border-text text-left">
              <th scope="col"></th>
              <th scope="col" className="p-2 font-semibold text-muted">Usually</th>
              <th scope="col" className="p-2 font-semibold text-flame">At Gaelcraves</th>
            </tr>
          </thead>
          <tbody>
            {s.rows.map((r) => (
              <tr key={r.part} className="border-b border-char">
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
