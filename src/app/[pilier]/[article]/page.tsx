import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import ScrollProgressBar from '@/components/article/ScrollProgressBar'
import Breadcrumb from '@/components/article/Breadcrumb'
import ArticleHeader from '@/components/article/ArticleHeader'
import ArticleBody from '@/components/article/ArticleBody'
import Sidebar from '@/components/sidebar/Sidebar'
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
            <Sidebar headings={headings} />
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
