"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

import { siteContent } from "@/data/site-content";
import { Logo } from "@/components/marketing/logo";
import { Button } from "@/components/ui/button";

export function Navbar() {
  const { nav } = siteContent;
  const [mobileOpen, setMobileOpen] = useState(false);

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
        <div className="flex items-center gap-3 md:hidden">
          <Button asChild size="default">
            <Link href={nav.primaryCta.href}>Demo</Link>
          </Button>
          <button
            onClick={() => setMobileOpen((prev) => !prev)}
            className="flex size-10 items-center justify-center rounded-full border border-white/10 text-white/72 transition-colors hover:text-white"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
          >
            {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </div>
        <Button asChild className="hidden md:inline-flex">
          <Link href={nav.primaryCta.href}>{nav.primaryCta.label}</Link>
        </Button>
      </div>

      {mobileOpen && (
        <nav className="border-t border-white/8 bg-soft-black/95 backdrop-blur-xl md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1 px-6 py-4">
            {nav.links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-medium text-white/72 transition-colors hover:bg-white/6 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-2 border-t border-white/8 pt-3">
              <Button asChild className="w-full">
                <Link href={nav.primaryCta.href} onClick={() => setMobileOpen(false)}>
                  {nav.primaryCta.label}
                </Link>
              </Button>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
}
