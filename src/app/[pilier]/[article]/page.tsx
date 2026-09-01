import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import ScrollProgressBar from '@/components/article/ScrollProgressBar'
import Breadcrumb from '@/components/article/Breadcrumb'
import ArticleHeader from '@/components/article/ArticleHeader'
import ArticleBody from '@/components/article/ArticleBody'
import Sidebar, { type SidebarExtraCard } from '@/components/sidebar/Sidebar'
import RelatedArticles from '@/components/sections/RelatedArticles'
import { getArticle, articles } from '@/lib/articles'
import type { TocHeading } from '@/lib/piliers'

export function generateStaticParams() {
  return articles.map(a => ({ pilier: a.pilier, article: a.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: { pilier: string; article: string }
}): Promise<Metadata> {
  const article = getArticle(params.pilier, params.article)
  if (!article) return {}
  return {
    title: article.metaTitle,
    description: article.metaDescription,
    alternates: {
      canonical: `/${article.pilier}/${article.slug}`,
    },
  }
}

export default function ArticlePage({
  params,
}: {
  params: { pilier: string; article: string }
}) {
  const article = getArticle(params.pilier, params.article)
  if (!article) notFound()

  const headings: TocHeading[] = article.blocks
    .filter(b => b.type === 'h2')
    .map(b => ({ id: (b as { id: string }).id, text: (b as { content: string }).content }))

  const extraCardsList: SidebarExtraCard[] = []

  if (article.pilier === 'protheses') {
    extraCardsList.push({
      variant: 'stumpr',
      title: 'Anticipez vos renouvellements LPPR',
      subtitle: "Stumpr calcule vos échéances et vous alerte 90 jours avant. Accès bêta gratuit.",
      buttonText: 'Rejoindre la bêta',
      href: 'https://stumpr.app/',
    })
  }

  if (article.slug === 'prothese-femorale-choisir-son-genou') {
    extraCardsList.push({
      variant: 'internal',
      title: 'Les genoux "bioniques" à microprocesseur',
      subtitle: 'C-Leg, Kenevo, Rheo Knee XC : ce que couvre vraiment la LPPR.',
      buttonText: 'Découvrir',
      href: '/protheses/genou-bionique-microprocesseur',
    })
  }

  const extraCards = extraCardsList.length > 0 ? extraCardsList : undefined

  const relatedArticles = (article.relatedArticles ?? [])
    .map(slug => getArticle(article.pilier, slug))
    .filter(a => a !== undefined)

  return (
    <>
      <Navbar />
      <ScrollProgressBar />
      <main className="pt-24 pb-32 bg-surface">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-10">
          <Breadcrumb
            items={[
              { label: 'Accueil', href: '/' },
              { label: article.badge, href: `/${article.pilier}` },
              { label: article.title },
            ]}
          />

          <div className="mt-8 grid gap-12 pb-8 lg:grid-cols-[1fr_320px] lg:items-start">
            <article>
              <ArticleHeader article={article} />
              <ArticleBody blocks={article.blocks} />
            </article>
            <Sidebar headings={headings} extraCards={extraCards} />
          </div>
        </div>
      </main>

      <RelatedArticles articles={relatedArticles} />

      <Footer />
    </>
  )
}
