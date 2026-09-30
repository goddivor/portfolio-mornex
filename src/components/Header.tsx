import Image from "next/image";
import Link from "next/link";
import { navigation, lienWhatsApp } from "@/lib/site";
import { IconeMenu, IconeWhatsApp } from "./Icones";

export function Header() {
  return (
    <header className="print:hidden sticky top-0 z-50 border-b border-white/10 bg-encre/90 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:h-20 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-3" aria-label="Mornex Bakeyta, accueil">
          <Image src="/images/logo-mornex.webp" alt="" width={48} height={48} className="size-10 sm:size-12" />
          <span className="font-display text-xl tracking-wide sm:text-2xl">
            MORNEX <span className="text-jaune">BAKEYTA</span>
          </span>
        </Link>

        <nav aria-label="Navigation principale" className="hidden lg:block">
          <ul className="flex items-center gap-7 text-[15px] font-medium">
            {navigation.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="text-white/85 transition hover:text-jaune">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={lienWhatsApp()}
            target="_blank"
            rel="noopener"
            className="hidden items-center gap-2 rounded-full bg-jaune px-5 py-3 text-sm font-bold text-encre transition hover:bg-white sm:flex"
          >
            <IconeWhatsApp />
            Appelle-moi
          </a>

          <details className="group relative lg:hidden">
            <summary
              className="flex size-11 cursor-pointer list-none items-center justify-center rounded-xl bg-white/10 [&::-webkit-details-marker]:hidden"
              aria-label="Ouvrir le menu"
            >
              <IconeMenu />
            </summary>
            <nav
              aria-label="Menu mobile"
              className="absolute right-0 top-14 w-64 rounded-2xl border border-white/10 bg-prune p-3 shadow-2xl"
            >
              <ul className="flex flex-col">
                {navigation.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="block rounded-xl px-4 py-3 font-medium hover:bg-white/10">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </details>
        </div>
      </div>
    </header>
  );
}
