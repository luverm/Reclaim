import Link from "next/link";

import { siteContent } from "@/data/site-content";
import { Logo } from "@/components/marketing/logo";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const { nav } = siteContent;

  return (
    <header className="sticky top-0 z-50 border-b border-white/8 bg-soft-black/72 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-8 lg:px-10">
        <Logo priority />
        <nav className="hidden items-center gap-8 md:flex">
          {nav.links.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="text-sm font-medium text-white/66 transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Button asChild className="hidden md:inline-flex">
          <Link href={nav.primaryCta.href}>{nav.primaryCta.label}</Link>
        </Button>
        <Button asChild className="md:hidden">
          <Link href={nav.primaryCta.href}>Demo</Link>
        </Button>
      </div>
    </header>
  );
}
