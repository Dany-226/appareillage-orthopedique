import { notFound }      from "next/navigation";
import type { Metadata } from "next";
import Link              from "next/link";
import { ArrowRight }    from "lucide-react";

import Navbar           from "@/components/layout/Navbar";
import Footer           from "@/components/layout/Footer";
import ScrollProgressBar from "@/components/article/ScrollProgressBar";
import Breadcrumb       from "@/components/article/Breadcrumb";
import ArticleHeader    from "@/components/article/ArticleHeader";
import ArticleBody      from "@/components/article/ArticleBody";
import Sidebar          from "@/components/sidebar/Sidebar";
import RelatedArticles  from "@/components/sections/RelatedArticles";
import { Reveal }       from "@/components/ui/Reveal";
import { ProstheticJourney } from "@/components/prosthesis/ProstheticJourney";
import { FAMILLES } from "@/lib/lppr-familles";
import {
  getPilierData,
  getAllPilierSlugs,
  extractTocHeadings,
} from "@/lib/piliers";

// ─── Static params (SSG for known piliers) ──────────────
export function generateStaticParams() {
  return getAllPilierSlugs().map((pilier) => ({ pilier }));
}

// ─── Metadata ───────────────────────────────────────────
export async function generateMetadata({
  params,
}: {
  params: { pilier: string };
}): Promise<Metadata> {
  const data = getPilierData(params.pilier);
  if (!data) return { title: "Page introuvable" };

  return {
    title: data.metaTitle,
    description:
      data.slug === "ortheses"
        ? "Genouillère, corset, orthèse sur mesure : comprendre les 3 familles d'orthèses (traitement, immobilisation, positionnement), le remboursement LPPR à 100% et comment bien choisir."
        : `Guide complet sur les ${data.category.toLowerCase()} — remboursement LPPR, types de dispositifs, questions fréquentes.`,
    alternates: {
      canonical: `/${data.slug}`,
    },
    openGraph: {
      title: data.metaTitle,
      type: "article",
      locale: "fr_FR",
    },
  };
}

// ─── Page ───────────────────────────────────────────────
export default function PilierPage({
  params,
}: {
  params: { pilier: string };
}) {
  const data = getPilierData(params.pilier);
  if (!data) notFound();

  const headings = extractTocHeadings(data.content);

  const extraCards =
    data.slug === "protheses"
      ? [
          {
            variant: "stumpr" as const,
            title: "Anticipez vos renouvellements LPPR",
            subtitle: "Stumpr calcule vos échéances et vous alerte 90 jours avant. Accès bêta gratuit.",
            buttonText: "Rejoindre la bêta",
            href: "https://stumpr.app/",
          },
        ]
      : data.slug === "ortheses"
      ? [
          {
            variant: "produit" as const,
            title: "Attelle de poignet",
            subtitle: "Entorse, tendinite, canal carpien : identifier la douleur et choisir la bonne attelle.",
            buttonText: "Voir le guide d'achat",
            href: "/ortheses/guide-achat/attelle-poignet",
            image: "https://i.imgur.com/XQBJNcI.png",
            imageAlt: "Attelle de poignet",
          },
          {
            variant: "produit" as const,
            title: "Orthèse de pouce",
            subtitle: "Rhizarthrose, De Quervain, entorse : reconnaître la cause et choisir la bonne orthèse.",
            buttonText: "Voir le guide d'achat",
            href: "/ortheses/guide-achat/orthese-pouce",
            image: "https://i.imgur.com/baOwTJR.png",
            imageAlt: "Orthèse de pouce",
          },
        ]
      : undefined;

  return (
    <>
      <Navbar />
      <ScrollProgressBar />

      <div className="min-h-screen bg-background pt-16">
        {/* ── Constrained outer wrapper */}
        <div className="mx-auto max-w-[1200px] px-6 sm:px-8 lg:px-10">
          {/* Breadcrumb */}
          <Breadcrumb
            items={[
              { label: "Accueil",        href: "/" },
              { label: data.category,    href: `/${data.slug}` },
            ]}
          />

          {/* Two-column layout */}
          <div className="grid gap-12 pb-24 lg:grid-cols-[1fr_340px] lg:items-stretch">
            {/* ── LEFT — article (65%) */}
            <article>
              <ArticleHeader
                category={data.category}
                readingTime={data.readingTime}
                h1={data.h1}
                author={data.author}
                heroImage={data.heroImage}
              />
              <ArticleBody blocks={data.content} />
            </article>

            {/* ── RIGHT — sticky sidebar (35%) */}
            <Sidebar headings={headings} extraCards={extraCards} />
          </div>
        </div>
      </div>

      {data.slug === "protheses" && (
        <section className="bg-surface py-20">
          <div className="mx-auto max-w-[1200px] px-6 sm:px-8 lg:px-10">
            <Reveal eager className="max-w-2xl">
              <h2
                className="font-heading font-semibold text-on-surface leading-[1.15]
                           tracking-tight mb-4"
                style={{ fontSize: "clamp(1.75rem, 3vw, 2.5rem)" }}
              >
                Codes et tarifs LPPR par famille de produits
              </h2>
              <p
                className="font-sans text-on-surface-variant leading-[1.8] mb-10"
                style={{ fontSize: "16px" }}
              >
                180 références vérifiées de la nomenclature LPPR (chapitre 7),
                classées par famille&nbsp;: genoux, pieds, emboîtures,
                manchons, mains myoélectriques et accessoires.
              </p>
            </Reveal>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {Object.entries(FAMILLES).map(([slug, famille], i) => (
                <Reveal key={slug} delay={i * 0.06}>
                  <Link
                    href={`/protheses/produits/${slug}`}
                    className="group flex h-full flex-col rounded-xl border border-surface-container-high
                               bg-white p-6 shadow-card hover:-translate-y-0.5 hover:shadow-card-hover
                               transition-all duration-200 focus-ring"
                  >
                    <h3
                      className="font-heading font-semibold text-on-surface mb-2
                                 group-hover:text-brand-teal transition-colors leading-snug"
                      style={{ fontSize: "18px" }}
                    >
                      {famille.cardTitle}
                    </h3>
                    <p
                      className="font-sans text-on-surface-variant leading-relaxed mb-4"
                      style={{ fontSize: "14px" }}
                    >
                      {famille.cardDescription}
                    </p>
                    <span
                      className="mt-auto inline-flex items-center gap-1.5 font-sans font-semibold
                                 text-brand-teal"
                      style={{ fontSize: "14px" }}
                    >
                      Voir les codes et tarifs
                      <ArrowRight size={14} aria-hidden />
                    </span>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {data.slug === "protheses" && <ProstheticJourney />}

      <RelatedArticles pilier={data.slug} />

      <Footer />
    </>
  );
}
