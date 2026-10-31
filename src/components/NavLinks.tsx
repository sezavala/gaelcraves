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
    <nav className="order-3 -mx-1 flex w-full justify-between overflow-x-auto pt-1 pb-1 text-[0.95rem] font-semibold md:justify-start md:gap-5 md:text-base whitespace-nowrap md:order-2 md:mx-0 md:ml-auto md:w-auto md:p-0" aria-label="Sections">
      {links.map((l) => (
        <Link
          key={l.href}
          href={l.href}
          aria-current={l.href === pathname ? "page" : undefined}
          className="px-1 py-1 no-underline opacity-85 md:px-0 hover:text-flame hover:opacity-100 aria-[current=page]:text-flame aria-[current=page]:opacity-100"
        >
          {l.label}
        </Link>
      ))}
    </nav>
  );
}
