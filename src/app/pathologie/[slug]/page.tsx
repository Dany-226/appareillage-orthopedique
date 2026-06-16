import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import Navbar from '@/components/layout/Navbar'
import Footer from '@/components/layout/Footer'
import ScrollProgressBar from '@/components/article/ScrollProgressBar'
import Breadcrumb from '@/components/article/Breadcrumb'
import ArticleBody from '@/components/article/ArticleBody'
import Sidebar from '@/components/sidebar/Sidebar'
import { Reveal } from '@/components/ui/Reveal'
import { getPathologie, pathologies } from '@/lib/pathologies'
import type { TocHeading } from '@/lib/piliers'

export function generateStaticParams() {
  return pathologies.map(p => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: { slug: string }
}): Promise<Metadata> {
  const pathologie = getPathologie(params.slug)
  if (!pathologie) return {}
  return {
    title: pathologie.metaTitle,
    description: pathologie.metaDescription,
  }
}

export default function PathologiePage({ params }: { params: { slug: string } }) {
  const pathologie = getPathologie(params.slug)
  if (!pathologie) notFound()

  const headings: TocHeading[] = pathologie.blocks
    .filter(b => b.type === 'h2')
    .map(b => ({ id: (b as { id: string }).id, text: (b as { content: string }).content }))

  return (
    <>
      <Navbar />
      <ScrollProgressBar />
      <main className="bg-surface">

        {/* ── Hero ─────────────────────────────────────────────────────── */}
        <section
          className="pt-32 pb-16"
          style={{ background: "linear-gradient(135deg, #00374e 0%, #0b4f6c 60%, #0d5875 100%)" }}
        >
          <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-10">
            <Breadcrumb
              items={[
                { label: 'Accueil', href: '/' },
                { label: 'Par pathologie', href: '/#pathologies' },
                { label: pathologie.name },
              ]}
              light
            />

            <Reveal eager className="mt-4">
              <span
                className="font-mono uppercase tracking-widest text-brand-amber block mb-3"
                style={{ fontSize: "11px" }}
              >
                {pathologie.heroLabel}
              </span>
              <h1
                className="font-heading font-bold text-white leading-tight mb-4"
                style={{ fontSize: "clamp(2rem, 4vw, 3rem)" }}
              >
                {pathologie.heroTitle}
              </h1>
              <p
                className="font-sans leading-relaxed max-w-2xl"
                style={{ fontSize: "18px", color: "rgba(255,255,255,0.80)" }}
              >
                {pathologie.heroSubtitle}
              </p>
            </Reveal>
          </div>
        </section>

        {/* ── Devices grid ─────────────────────────────────────────────── */}
        <section
          className="py-14 border-b border-surface-container-high bg-white"
        >
          <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-10">
            <Reveal>
              <h2
                className="font-heading font-semibold text-on-surface mb-8"
                style={{ fontSize: "22px" }}
              >
                Dispositifs concernés
              </h2>
            </Reveal>

            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
              {pathologie.devices.map((device, i) => (
                <Reveal key={device.href} delay={i * 0.07}>
                  <Link
                    href={device.href}
                    className="group block h-full rounded-lg border border-surface-container-high
                               bg-surface p-5 hover:-translate-y-1 hover:shadow-card-hover
                               hover:border-brand-amber/30 transition-all duration-200 focus-ring"
                  >
                    <span
                      className="font-mono uppercase tracking-widest text-brand-amber block mb-2"
                      style={{ fontSize: "10px" }}
                    >
                      {device.pilier}
                    </span>
                    <span
                      className="font-heading font-semibold text-stitch-primary
                                 group-hover:text-brand-amber transition-colors block mb-1.5"
                      style={{ fontSize: "14px", lineHeight: 1.3 }}
                    >
                      {device.label}
                    </span>
                    <span
                      className="font-sans text-on-surface-variant leading-relaxed"
                      style={{ fontSize: "12px" }}
                    >
                      {device.description}
                    </span>
                  </Link>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── Article content + sidebar ─────────────────────────────────── */}
        <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-10 py-16">
          <div className="grid gap-12 lg:grid-cols-[1fr_300px] lg:items-start">
            <div>
              <ArticleBody blocks={pathologie.blocks} />
            </div>
            <div className="hidden lg:block">
              <Sidebar headings={headings} />
            </div>
          </div>
        </div>

      </main>
      <Footer />
    </>
  )
}
