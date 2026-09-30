import Image from "next/image";
import Link from "next/link";
import { navigation, site, lienWhatsApp } from "@/lib/site";

export function Footer() {
  return (
    <footer className="print:hidden bg-encre text-white/80">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <Image src="/images/logo-mornex.webp" alt="" width={56} height={56} />
            <span className="font-display text-2xl text-white">
              MORNEX <span className="text-jaune">BAKEYTA</span>
            </span>
          </div>
          <p className="font-marker text-2xl text-jaune">{site.slogan}</p>
          <p className="leading-relaxed">
            {site.sloganTraduit}
            <br />
            {site.metier}, à {site.ville}.
          </p>
        </div>

        <nav aria-label="Pied de page" className="flex flex-col gap-3">
          <p className="font-bold text-white">Le site</p>
          {navigation.slice(1).map((item) => (
            <Link key={item.href} href={item.href} className="hover:text-jaune">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-col gap-3">
          <p className="font-bold text-white">Réseaux</p>
          {site.reseaux.map((r) => (
            <a key={r.nom} href={r.url} target="_blank" rel="noopener" className="hover:text-jaune">
              {r.nom}&nbsp;: {r.identifiant}
            </a>
          ))}
        </div>

        <div className="flex flex-col gap-3">
          <p className="font-bold text-white">Contact</p>
          <a href={lienWhatsApp()} target="_blank" rel="noopener" className="hover:text-jaune">
            WhatsApp&nbsp;: {site.telephone}
          </a>
          <a href={`mailto:${site.email}`} className="hover:text-jaune">
            {site.email}
          </a>
          <span>{site.quartier}</span>
          <Link
            href="/contact"
            className="mt-2 self-start rounded-full bg-jaune px-5 py-3 font-bold text-encre transition hover:bg-white"
          >
            Démarrer un projet
          </Link>
        </div>
      </div>
      <div className="mx-auto flex max-w-7xl flex-col gap-2 border-t border-white/10 px-4 py-6 text-sm text-white/60 sm:flex-row sm:justify-between sm:px-6 lg:px-8">
        <span>© {new Date().getFullYear()} Mornex Bakeyta. Tous droits réservés.</span>
        <span>Créateur de l&apos;Orinu, la BD africaine moderne</span>
      </div>
    </footer>
  );
}
