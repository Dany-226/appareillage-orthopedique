import { MetadataRoute } from 'next'
import { getAllPilierSlugs } from '@/lib/piliers'
import { articles } from '@/lib/articles'
import { pathologies } from '@/lib/pathologies'
import { guidesAchat } from '@/lib/guides-achat'
import { FAMILLES } from '@/lib/lppr-familles'

const BASE_URL = 'https://appareillageorthopedique.fr'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const homepage = {
    url: BASE_URL,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 1.0,
  }

  const staticPages = [
    {
      url: `${BASE_URL}/a-propos`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/guides/remboursement-lppr`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/trouver-praticien`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${BASE_URL}/ortheses/guide-achat`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
  ]

  const pilierPages = getAllPilierSlugs().map(slug => ({
    url: `${BASE_URL}/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }))

  const articlePages = articles.map(a => ({
    url: `${BASE_URL}/${a.pilier}/${a.slug}`,
    lastModified: new Date(a.updatedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  const pathologiePages = pathologies.map(p => ({
    url: `${BASE_URL}/pathologie/${p.slug}`,
    lastModified: new Date(p.updatedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  const guideAchatPages = guidesAchat.map(g => ({
    url: `${BASE_URL}/ortheses/guide-achat/${g.slug}`,
    lastModified: new Date(g.updatedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  const produitPages = Object.keys(FAMILLES).map(slug => ({
    url: `${BASE_URL}/protheses/produits/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [
    homepage,
    ...staticPages,
    ...pilierPages,
    ...articlePages,
    ...pathologiePages,
    ...guideAchatPages,
    ...produitPages,
  ]
}
