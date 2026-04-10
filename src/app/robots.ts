import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/private/'],
      },
      {
        userAgent: ['GPTBot', 'ChatGPT-User', 'ClaudeBot', 'PerplexityBot', 'Bytespider', 'Google-Extended', 'CCBot'],
        allow: '/',
      }
    ],
    sitemap: 'https://mith.tech/sitemap.xml',
  };
}
