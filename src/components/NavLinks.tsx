"use client";
// Client component because it reads the current URL to highlight "Our story" on that page.
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { label: "Menu", href: "/#menu" },
  { label: "Photos", href: "/#photos" },
  { label: "The swap", href: "/#swap" },
  { label: "Find us", href: "/#find" },
  { label: "Our story", href: "/story/" },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <nav className="ml-auto hidden gap-5 font-semibold md:flex" aria-label="Sections">
      {links.map((l) => (
        <Link
          key={l.href}
          href={l.href}
          aria-current={l.href === pathname ? "page" : undefined}
          className="no-underline opacity-85 hover:text-flame hover:opacity-100 aria-[current=page]:text-flame aria-[current=page]:opacity-100"
        >
          {l.label}
        </Link>
      ))}
    </nav>
  );
}
