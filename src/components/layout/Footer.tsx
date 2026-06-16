import Link from "next/link";
import { Separator } from "@/components/ui/separator";

const columns = [
  {
    heading: "Dispositifs",
    links: [
      { label: "Orthèses",          href: "/ortheses" },
      { label: "Prothèses",         href: "/protheses" },
      { label: "Fauteuils roulants",href: "/fauteuils" },
      { label: "Aides techniques",  href: "/aides-techniques" },
      { label: "Positionnement",    href: "/positionnement" },
    ],
  },
  {
    heading: "Pathologies",
    links: [
      { label: "Amputation",         href: "/pathologie/amputation" },
      { label: "AVC",                href: "/pathologie/avc" },
      { label: "SEP",                href: "/pathologie/sep" },
      { label: "IMC",                href: "/pathologie/imc" },
      { label: "Arthrose",           href: "/pathologie/arthrose" },
      { label: "Lésion médullaire",  href: "/pathologie/lesion-medullaire" },
    ],
  },
  {
    heading: "Guides",
    links: [
      { label: "Comprendre la LPPR",  href: "/guide/lppr" },
      { label: "Remboursement",       href: "/guide/remboursement" },
      { label: "Renouvellement",      href: "/guide/renouvellement" },
      { label: "Choisir son centre",  href: "/guide/choisir-centre" },
      { label: "Vivre avec",          href: "/guide/vivre-avec" },
    ],
  },
  {
    heading: "À propos",
    links: [
      { label: "À propos",          href: "/a-propos" },
      { label: "Notre mission",     href: "/mission" },
      { label: "Partenaires",       href: "/partenaires" },
      { label: "Contact",           href: "/contact" },
      { label: "Mentions légales",  href: "/mentions-legales" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white/70">
      <div className="container-editorial section-padding-sm px-6 sm:px-10 lg:px-16">
        {/* Top row */}
        <div className="grid gap-10 lg:grid-cols-[2fr_1fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div className="lg:col-span-1">
            <p className="font-display text-2xl font-medium text-white mb-3 tracking-tight">
              Appareillage{" "}
              <span className="italic font-normal">Orthopédique</span>
            </p>
            <p className="text-sm leading-relaxed text-white/50 max-w-xs">
              Le guide de référence pour les patients appareillés et leurs
              proches. Contenus rédigés avec des professionnels de santé.
            </p>
            <p className="mt-4 label-mono text-xs text-brand-amber/80">
              appareillageorthopedique.fr
            </p>
          </div>

          {/* Link columns */}
          {columns.map((col) => (
            <div key={col.heading}>
              <h3 className="label-mono text-xs text-white/40 mb-4">
                {col.heading}
              </h3>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-sm text-white/60 hover:text-white
                                 transition-colors duration-200 focus-ring rounded"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <Separator className="my-8 bg-white/10" />

        {/* Bottom row */}
        <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-white/35">
            © {new Date().getFullYear()} Appareillage Orthopédique. Tous droits réservés.
          </p>
          <p className="text-xs text-white/30 max-w-md text-left sm:text-right">
            Ce site contient des liens d&rsquo;affiliation et peut afficher des
            publicités via Google AdSense. Les contenus éditoriaux restent indépendants.
          </p>
        </div>
      </div>
    </footer>
  );
}
