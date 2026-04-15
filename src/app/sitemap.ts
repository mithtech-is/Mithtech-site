import { MetadataRoute } from 'next';
import { getBlogPosts } from '@/lib/blog';
import { products } from '@/data/products';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://mith.tech';
  const now = new Date().toISOString();

  // High-priority hubs
  const hubs: { path: string; priority: number; changeFreq: MetadataRoute.Sitemap[number]['changeFrequency'] }[] = [
    { path: '', priority: 1.0, changeFreq: 'weekly' },
    { path: '/products', priority: 0.9, changeFreq: 'weekly' },
    { path: '/solutions', priority: 0.9, changeFreq: 'weekly' },
    { path: '/platforms', priority: 0.9, changeFreq: 'weekly' },
    { path: '/industries', priority: 0.9, changeFreq: 'weekly' },
    { path: '/blog', priority: 0.9, changeFreq: 'weekly' },
    { path: '/about', priority: 0.7, changeFreq: 'monthly' },
    { path: '/contact', priority: 0.7, changeFreq: 'monthly' },
    { path: '/clients', priority: 0.7, changeFreq: 'monthly' },
    { path: '/partners', priority: 0.7, changeFreq: 'monthly' },
  ];

  // Solutions, platforms, industries, and legal
  const staticSub: string[] = [
    '/industries/automotive',
    '/industries/financial-services',
    '/industries/healthcare',
    '/industries/manufacturing',
    '/industries/real-estate',
    '/industries/retail',
    '/platforms/frappe-erpnext',
    '/platforms/medusa',
    '/platforms/paas',
    '/platforms/saas',
    '/platforms/wordpress',
    '/solutions/analytics',
    '/solutions/commerce',
    '/solutions/frappe',
    '/solutions/lms',
    '/solutions/marketing-automation',
    '/privacy',
    '/terms',
  ];

  const hubEntries: MetadataRoute.Sitemap = hubs.map(({ path, priority, changeFreq }) => ({
    url: `${baseUrl}${path}`,
    lastModified: now,
    changeFrequency: changeFreq,
    priority,
  }));

  const staticEntries: MetadataRoute.Sitemap = staticSub.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: route.startsWith('/privacy') || route.startsWith('/terms') ? 0.3 : 0.8,
  }));

  // Dynamic product routes — always in sync with products.ts
  const productEntries: MetadataRoute.Sitemap = products.map((product) => ({
    url: `${baseUrl}/products/${product.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.8,
  }));

  // Dynamic blog post routes
  const posts = getBlogPosts();
  const blogEntries: MetadataRoute.Sitemap = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.date).toISOString(),
    changeFrequency: 'monthly',
    priority: 0.7,
  }));

  return [...hubEntries, ...staticEntries, ...productEntries, ...blogEntries];
}
