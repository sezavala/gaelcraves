import Link from "next/link";
import Button from "./Button";
import NavLinks from "./NavLinks";
import { asset } from "@/lib/site";

export default function Header() {
  return (
    <header className="sticky top-0 z-20 flex items-center gap-6 bg-grill/85 px-[max(16px,4vw)] py-3 backdrop-blur-md">
      <Link href="/" className="flex items-center no-underline" aria-label="Gaelcraves home">
        <img src={asset("media/logo.png")} alt="Gaelcraves" className="h-13 w-auto" />
      </Link>
      <NavLinks />
      <Button order className="ml-auto md:ml-0">Order now</Button>
    </header>
  );
}
