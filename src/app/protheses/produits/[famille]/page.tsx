import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ScrollProgressBar from "@/components/article/ScrollProgressBar";
import Breadcrumb from "@/components/article/Breadcrumb";
import { Reveal } from "@/components/ui/Reveal";
import LPPRTable from "@/components/article/blocks/LPPRTable";
import AnchorPills from "@/components/article/blocks/AnchorPills";
import { lpprProtheseItems } from "@/lib/lppr-protheses";
import { FAMILLES } from "@/lib/lppr-familles";

const SITE_URL = "https://appareillageorthopedique.fr";

export function generateStaticParams() {
  return Object.keys(FAMILLES).map((famille) => ({ famille }));
}

export async function generateMetadata({
  params,
}: {
  params: { famille: string };
}): Promise<Metadata> {
  const config = FAMILLES[params.famille];
  if (!config) return {};
  return {
    title: config.metaTitle,
    description: config.metaDescription,
    alternates: {
      canonical: `/protheses/produits/${params.famille}`,
    },
  };
}

export default function FamilleProduitPage({
  params,
}: {
  params: { famille: string };
}) {
  const config = FAMILLES[params.famille];
  if (!config) notFound();

  const items = lpprProtheseItems.filter(config.filter);
  const sections = config.sections
    .map((section) => ({ ...section, items: items.filter(section.filter) }))
    .filter((section) => section.items.length > 0);

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Accueil", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "Prothèses", item: `${SITE_URL}/protheses` },
      {
        "@type": "ListItem",
        position: 3,
        name: config.cardTitle,
        item: `${SITE_URL}/protheses/produits/${params.famille}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <Navbar />
      <ScrollProgressBar />
      <main className="pt-24 pb-32 bg-surface">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-10">
          <Breadcrumb
            items={[
              { label: "Accueil", href: "/" },
              { label: "Prothèses", href: "/protheses" },
              { label: config.cardTitle },
            ]}
          />

          <Reveal eager className="mt-8 max-w-3xl">
            <h1
              className="font-heading font-semibold text-on-surface leading-[1.12]
                         tracking-tight mb-6"
              style={{ fontSize: "clamp(2rem, 3.5vw, 3.5rem)" }}
            >
              {config.h1}
            </h1>
            <p
              className="font-sans text-on-surface-variant leading-[1.8]"
              style={{ fontSize: "18px" }}
            >
              {config.intro}
            </p>
          </Reveal>

          {sections.length > 1 && (
            <Reveal>
              <AnchorPills sections={sections.map(({ id, title }) => ({ id, title }))} />
            </Reveal>
          )}

          <div className="mt-12 max-w-[1000px]">
            {sections.map((section) => (
              <Reveal key={section.id} className="mb-4">
                <h2
                  id={section.id}
                  className="mt-12 mb-4 pl-4 font-heading font-semibold border-l-4 border-brand-amber leading-tight scroll-mt-24"
                  style={{ fontSize: "28px", color: "#00374e" }}
                >
                  {section.title}
                </h2>
                <LPPRTable items={section.items} />
              </Reveal>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
