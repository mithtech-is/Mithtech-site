import { MetadataRoute } from 'next';
import { getBlogPosts } from '@/lib/blog';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://mith.tech';

  const staticPages = [
    '',
    '/about',
    '/blog',
    '/clients',
    '/contact',
    '/industries',
    '/industries/automotive',
    '/industries/financial-services',
    '/industries/healthcare',
    '/industries/manufacturing',
    '/industries/real-estate',
    '/industries/retail',
    '/partners',
    '/platforms',
    '/platforms/frappe-erpnext',
    '/platforms/medusa',
    '/platforms/paas',
    '/platforms/saas',
    '/platforms/wordpress',
    '/privacy',
    '/products',
    '/products/mautic',
    '/products/n8n',
    '/products/perfex',
    '/products/polygin',
    '/products/polygin-wastore',
    '/products/qu6',
    '/products/schedulr',
    '/products/shoilms',
    '/products/socialpuff',
    '/solutions',
    '/solutions/analytics',
    '/solutions/commerce',
    '/solutions/frappe',
    '/solutions/lms',
    '/solutions/marketing-automation',
    '/terms',
  ];

  const staticEntries: MetadataRoute.Sitemap = staticPages.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1.0 : route === '/blog' ? 0.9 : 0.8,
  }));

  // Dynamic blog post routes
  const posts = getBlogPosts();
  const blogEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date).toISOString(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...staticEntries, ...blogEntries];
}
