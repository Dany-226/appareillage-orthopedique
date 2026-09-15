import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { Clock } from 'lucide-react'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import ScrollProgressBar from '@/components/article/ScrollProgressBar'
import Breadcrumb from '@/components/article/Breadcrumb'
import { Badge } from '@/components/ui/badge'
import Sidebar from '@/components/sidebar/Sidebar'
import InfoBox from '@/components/article/blocks/InfoBox'
import GuideAchatBody from '@/components/guide-achat/GuideAchatBody'
import GuideAchatRelated from '@/components/guide-achat/GuideAchatRelated'
import { getGuideAchat, getAllGuideAchatSlugs } from '@/lib/guides-achat'
import type { TocHeading } from '@/lib/piliers'

const SITE_URL = 'https://appareillageorthopedique.fr'

export function generateStaticParams() {
  return getAllGuideAchatSlugs().map(slug => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const guide = getGuideAchat(params.slug)
  if (!guide) return {}
  return {
    title: guide.metaTitle,
    description: guide.metaDescription,
    alternates: {
      canonical: `/ortheses/guide-achat/${guide.slug}`,
    },
  }
}

export default function GuideAchatPage({
  params,
}: {
  params: { slug: string }
}) {
  const guide = getGuideAchat(params.slug)
  if (!guide) notFound()

  const headings: TocHeading[] = guide.blocks
    .filter((b): b is Extract<typeof guide.blocks[number], { type: 'h2' }> => b.type === 'h2')
    .map(b => ({ id: b.id, text: b.text }))

  const faqBlock = guide.blocks.find((b): b is Extract<typeof guide.blocks[number], { type: 'faq' }> => b.type === 'faq')

  const faqJsonLd = faqBlock
    ? {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqBlock.items.map(item => ({
          '@type': 'Question',
          name: item.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: item.answer,
          },
        })),
      }
    : null

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      { '@type': 'ListItem', position: 1, name: 'Accueil', item: `${SITE_URL}/` },
      { '@type': 'ListItem', position: 2, name: 'Orthèses', item: `${SITE_URL}/ortheses` },
      {
        '@type': 'ListItem',
        position: 3,
        name: guide.title,
        item: `${SITE_URL}/ortheses/guide-achat/${guide.slug}`,
      },
    ],
  }

  const updatedLabel = new Date(guide.updatedAt).toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  return (
    <>
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}
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
              { label: "Guide d'achat" },
              { label: guide.title },
            ]}
          />

          <div className="mt-8 grid gap-12 pb-8 lg:grid-cols-[1fr_320px] lg:items-stretch">
            <article>
              <header className="mb-10">
                <div className="flex items-center gap-3 mb-5">
                  <Badge
                    className="bg-brand-amber text-white border-0 px-3 py-1
                               font-mono text-[11px] uppercase tracking-widest"
                  >
                    Guide d&rsquo;achat
                  </Badge>
                  <span
                    className="flex items-center gap-1.5 text-muted-foreground"
                    style={{ fontFamily: 'var(--font-mono)', fontSize: '12px' }}
                  >
                    <Clock size={12} aria-hidden />
                    {guide.readingTime} de lecture
                  </span>
                </div>

                <h1
                  className="font-heading font-semibold text-on-surface leading-[1.12]
                             tracking-tight mb-6"
                  style={{ fontSize: 'clamp(2rem, 3.5vw, 3.5rem)' }}
                >
                  {guide.title}
                </h1>

                <div
                  className="flex items-center gap-4 pb-8 border-b"
                  style={{ borderColor: '#eae8e5' }}
                >
                  <div
                    className="h-11 w-11 flex-none rounded-full bg-brand-teal-light
                               flex items-center justify-center text-brand-teal
                               font-semibold text-sm select-none"
                    aria-hidden
                    style={{ fontFamily: 'var(--font-mono)' }}
                  >
                    {guide.author.name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase()}
                  </div>
                  <div>
                    <p className="font-semibold leading-tight" style={{ fontSize: '14px', color: '#1b1c1a' }}>
                      Par {guide.author.name}
                    </p>
                    <p className="mt-0.5 leading-snug" style={{ fontSize: '13px', color: '#41484d' }}>
                      {guide.author.title}
                    </p>
                  </div>
                  <p
                    className="ml-auto hidden sm:block text-right"
                    style={{ fontSize: '12px', color: '#41484d', fontFamily: 'var(--font-mono)' }}
                  >
                    Mis à jour le {updatedLabel}
                  </p>
                </div>
              </header>

              <GuideAchatBody blocks={guide.blocks} />

              <InfoBox
                title="Transparence : liens Amazon"
                text="Cet article contient des liens vers des produits disponibles sur Amazon.fr. Ces liens ne sont pas encore des liens d'affiliation - aucune commission n'est perçue à ce jour. Cette page sera mise à jour dès l'activation du programme Partenaires Amazon."
              />

              <GuideAchatRelated currentSlug={guide.slug} />
            </article>
            <Sidebar headings={headings} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
