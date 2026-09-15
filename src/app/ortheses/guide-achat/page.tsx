import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import ScrollProgressBar from '@/components/article/ScrollProgressBar'
import Breadcrumb from '@/components/article/Breadcrumb'
import { Reveal } from '@/components/ui/Reveal'
import { guidesAchat } from '@/lib/guides-achat'

const SITE_URL = 'https://appareillageorthopedique.fr'

export const metadata: Metadata = {
  title: "Orthèses de maintien : nos guides d'achat comparatifs",
  description:
    "Poignet, pouce, genou, cheville... nos guides comparatifs pour choisir la bonne orthèse de soutien selon votre douleur, sans ordonnance.",
  alternates: {
    canonical: '/ortheses/guide-achat',
  },
}

const breadcrumbJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: [
    { '@type': 'ListItem', position: 1, name: 'Accueil', item: `${SITE_URL}/` },
    { '@type': 'ListItem', position: 2, name: 'Orthèses', item: `${SITE_URL}/ortheses` },
    { '@type': 'ListItem', position: 3, name: "Guides d'achat", item: `${SITE_URL}/ortheses/guide-achat` },
  ],
}

export default function GuideAchatHubPage() {
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
              { label: 'Accueil', href: '/' },
              { label: 'Orthèses', href: '/ortheses' },
              { label: "Guides d'achat" },
            ]}
          />

          <Reveal eager className="mt-8 max-w-3xl">
            <h1
              className="font-heading font-semibold text-on-surface leading-[1.12]
                         tracking-tight mb-6"
              style={{ fontSize: 'clamp(2rem, 3.5vw, 3.5rem)' }}
            >
              Orthèses de maintien et de protection articulaire : nos guides d&rsquo;achat
            </h1>
            <p
              className="font-sans text-on-surface-variant leading-[1.8]"
              style={{ fontSize: '18px' }}
            >
              Ces guides vous aident à choisir une orthèse de soutien en vente libre,
              sans ordonnance, selon la douleur ou l&rsquo;usage qui vous concerne. Ils
              sont distincts des orthèses sur mesure prises en charge par la LPPR,
              présentées dans notre{' '}
              <Link
                href="/guides/remboursement-lppr"
                className="text-brand-teal underline underline-offset-2 hover:text-brand-amber transition-colors"
              >
                guide de remboursement
              </Link>
              {' '}: ici, il s&rsquo;agit de produits que vous pouvez commander
              directement, pour un inconfort passager ou un usage préventif.
            </p>
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {guidesAchat.map((guide, i) => (
              <Reveal key={guide.slug} delay={i * 0.08}>
                <Link
                  href={`/ortheses/guide-achat/${guide.slug}`}
                  className="group flex h-full flex-col rounded-xl border border-surface-container-high
                             bg-white p-6 shadow-card hover:-translate-y-0.5 hover:shadow-card-hover
                             transition-all duration-200 focus-ring"
                >
                  <h2
                    className="font-heading font-semibold text-on-surface mb-2
                               group-hover:text-brand-teal transition-colors leading-snug"
                    style={{ fontSize: '20px' }}
                  >
                    {guide.title}
                  </h2>
                  <p
                    className="font-sans text-on-surface-variant leading-relaxed mb-4"
                    style={{ fontSize: '14px' }}
                  >
                    {guide.metaDescription}
                  </p>
                  <span
                    className="mt-auto inline-flex items-center gap-1.5 font-sans font-semibold
                               text-brand-teal"
                    style={{ fontSize: '14px' }}
                  >
                    Lire le guide
                    <ArrowRight size={14} aria-hidden />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>

          <Reveal className="mt-14">
            <Link
              href="/ortheses"
              className="inline-flex items-center gap-2 font-sans font-semibold
                         text-brand-teal hover:text-brand-amber transition-colors"
              style={{ fontSize: '15px' }}
            >
              <ArrowRight size={14} className="rotate-180" aria-hidden />
              Retour au guide orthèses
            </Link>
          </Reveal>
        </div>
      </main>
      <Footer />
    </>
  )
}
