import { Fragment } from "react";

export default function SectionHead({ lines, className = "" }: { lines: string[]; className?: string }) {
  return (
    <h2 className={`mb-10 text-[clamp(2.2rem,6vw,4.5rem)] ${className}`}>
      {lines.map((l, i) => (
        <Fragment key={i}>{i > 0 && <br />}{l}</Fragment>
      ))}
    </h2>
  );
}
