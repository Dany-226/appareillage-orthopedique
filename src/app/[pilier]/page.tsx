import { notFound }      from "next/navigation";
import type { Metadata } from "next";

import Navbar           from "@/components/layout/Navbar";
import Footer           from "@/components/layout/Footer";
import ScrollProgressBar from "@/components/article/ScrollProgressBar";
import Breadcrumb       from "@/components/article/Breadcrumb";
import ArticleHeader    from "@/components/article/ArticleHeader";
import ArticleBody      from "@/components/article/ArticleBody";
import Sidebar          from "@/components/sidebar/Sidebar";
import RelatedArticles  from "@/components/sections/RelatedArticles";
import { ProstheticJourney } from "@/components/prosthesis/ProstheticJourney";
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
    title: data.h1,
    description:
      data.slug === "ortheses"
        ? "Genouillère, corset, orthèse sur mesure : comprendre les 3 familles d'orthèses (traitement, immobilisation, positionnement), le remboursement LPPR à 100% et comment bien choisir."
        : `Guide complet sur les ${data.category.toLowerCase()} — remboursement LPPR, types de dispositifs, questions fréquentes.`,
    alternates: {
      canonical: `/${data.slug}`,
    },
    openGraph: {
      title: data.h1,
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
          <div className="grid gap-12 pb-24 lg:grid-cols-[1fr_340px] lg:items-start">
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

      {data.slug === "protheses" && <ProstheticJourney />}

      <RelatedArticles pilier={data.slug} />

      <Footer />
    </>
  );
}
