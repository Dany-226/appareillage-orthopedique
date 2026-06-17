import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/_next/'],
    },
    sitemap: 'https://appareillageorthopedique.fr/sitemap.xml',
    host: 'https://appareillageorthopedique.fr',
  }
}
