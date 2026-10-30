import { Fragment } from "react";
import Eyebrow from "./Eyebrow";

export default function SectionHead({ eyebrow, lines, eyebrowClass }: { eyebrow: string; lines: string[]; eyebrowClass?: string }) {
  return (
    <header className="mb-10 grid gap-3">
      <Eyebrow className={eyebrowClass}>{eyebrow}</Eyebrow>
      <h2 className="text-[clamp(2.2rem,6vw,4.5rem)]">
        {lines.map((l, i) => (
          <Fragment key={i}>{i > 0 && <br />}{l}</Fragment>
        ))}
      </h2>
    </header>
  );
}
