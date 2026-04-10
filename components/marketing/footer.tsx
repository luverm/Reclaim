import Link from "next/link";

import { siteContent } from "@/data/site-content";
import { Logo } from "@/components/marketing/logo";
import { SectionShell } from "@/components/marketing/section-shell";

export function Footer() {
  const { footer } = siteContent;

  return (
    <footer className="bg-soft-black text-white">
      <SectionShell className="py-12 lg:py-14">
        <div className="flex flex-col gap-10 border-t border-white/8 pt-10 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <Logo darkSurface imageClassName="text-[1.6rem] sm:text-[1.85rem]" />
            <p className="mt-4 max-w-sm text-sm leading-6 text-white/62">{footer.description}</p>
          </div>
          <div className="flex flex-wrap gap-6 text-sm text-white/72">
            {footer.links.map((link) => (
              <Link key={link.label} href={link.href} className="transition-colors hover:text-white">
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </SectionShell>
    </footer>
  );
}
