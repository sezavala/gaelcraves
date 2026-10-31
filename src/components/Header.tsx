import Link from "next/link";
import Button from "./Button";
import NavLinks from "./NavLinks";
import { asset } from "@/lib/site";

// On phones the links drop to a second row under the logo and Order button.
export default function Header() {
  return (
    <header className="sticky top-0 z-20 flex flex-wrap items-center gap-x-6 border-b border-char bg-grill px-[max(16px,4vw)] py-2">
      <Link href="/" className="flex items-center no-underline" aria-label="Gaelcraves home">
        <img src={asset("media/logo.png")} alt="Gaelcraves" className="h-11 w-auto md:h-12" />
      </Link>
      <Button order className="order-2 ml-auto md:order-3 md:ml-0">Order</Button>
      <NavLinks />
    </header>
  );
}
