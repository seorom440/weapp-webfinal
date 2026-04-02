import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: 'https://weappbcn.com/sitemap.xml',
    host: 'https://weappbcn.com',
  }
}
