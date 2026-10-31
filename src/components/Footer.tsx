import Link from "next/link";
import { site, asset } from "@/lib/site";

export default function Footer() {
  const b = site.business;
  return (
    <footer className="flex flex-wrap items-end gap-x-12 gap-y-6 border-t border-char px-[max(16px,4vw)] py-12 text-muted">
      <img src={asset("media/logo.png")} alt="" className="h-auto w-[clamp(110px,14vw,150px)]" />
      <address className="not-italic">
        {b.location}
        <br />
        {b.addressLine1}, {b.addressLine2}
      </address>
      <ul className="m-0 grid list-none gap-3 p-0">
        <li><Link href="/story/">Our story</Link></li>
        <li><a href={b.instagramUrl} target="_blank" rel="noopener">Instagram</a></li>
        <li><a href={b.doordashUrl} target="_blank" rel="noopener">DoorDash</a></li>
      </ul>
    </footer>
  );
}
