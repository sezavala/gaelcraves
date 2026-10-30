import Link from "next/link";
import { site, asset } from "@/lib/site";

export default function Footer() {
  const b = site.business;
  return (
    <>
      <footer className="grid gap-4 border-t-3 border-char px-[max(16px,4vw)] pt-16 pb-16 text-muted">
        <img src={asset("media/logo.png")} alt="" className="h-auto w-[clamp(120px,18vw,180px)]" />
        <p className="font-display text-2xl leading-none text-orange uppercase">{b.tagline}</p>
        <p>
          {b.addressLine1}, Soledad, CA · <Link href="/story/">Our story</Link> ·{" "}
          <a href={b.instagramUrl} target="_blank" rel="noopener">Instagram</a> ·{" "}
          <a href={b.doordashUrl} target="_blank" rel="noopener">DoorDash</a>
        </p>
      </footer>

    </>
  );
}
