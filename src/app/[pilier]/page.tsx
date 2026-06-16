import { notFound }      from "next/navigation";
import type { Metadata } from "next";

import Navbar           from "@/components/layout/Navbar";
import Footer           from "@/components/layout/Footer";
import ScrollProgressBar from "@/components/article/ScrollProgressBar";
import Breadcrumb       from "@/components/article/Breadcrumb";
import ArticleHeader    from "@/components/article/ArticleHeader";
import ArticleBody      from "@/components/article/ArticleBody";
import Sidebar          from "@/components/sidebar/Sidebar";
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
    description: `Guide complet sur les ${data.category.toLowerCase()} — remboursement LPPR, types de dispositifs, questions fréquentes.`,
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
              />
              <ArticleBody blocks={data.content} />
            </article>

            {/* ── RIGHT — sticky sidebar (35%) */}
            <Sidebar headings={headings} />
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
}
