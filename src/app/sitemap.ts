import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://mith.tech';

  const staticPages = [
    '',
    '/about',
    '/contact',
    '/industries',
    '/partners',
    '/platforms',
    '/platforms/frappe-erpnext',
    '/platforms/medusa',
    '/platforms/paas',
    '/platforms/saas',
    '/platforms/wordpress',
    '/privacy',
    '/products',
    '/solutions',
    '/solutions/analytics',
    '/solutions/commerce',
    '/solutions/frappe',
    '/solutions/lms',
    '/solutions/marketing-automation',
    '/terms',
  ];

  return staticPages.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1.0 : 0.8,
  }));
}
