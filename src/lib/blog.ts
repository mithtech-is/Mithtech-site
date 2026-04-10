import fs from 'fs';
import path from 'path';

const BLOG_CONTENT_PATH = path.join(process.cwd(), 'src/content/blog');

export interface BlogPost {
    title: string;
    description: string;
    date: string;
    slug: string;
    content: string;
    author: string;
    category: string;
    coverImage: string;
    readTime: string;
    featured: boolean;
}

interface BlogFrontmatter {
    title?: string;
    description?: string;
    date?: string;
    slug?: string;
    author?: string;
    category?: string;
    coverImage?: string;
    readTime?: string;
    featured?: string | boolean;
}

export function getBlogPosts(): BlogPost[] {
    if (!fs.existsSync(BLOG_CONTENT_PATH)) {
        return [];
    }

    const files = fs.readdirSync(BLOG_CONTENT_PATH);
    const posts = files
        .filter((file) => file.endsWith('.mdx') || file.endsWith('.md'))
        .map((file) => {
            const filePath = path.join(BLOG_CONTENT_PATH, file);
            const source = fs.readFileSync(filePath, 'utf8');
            const { data, content } = parseFrontmatter(source);
            const slug = data.slug || file.replace(/\.(mdx|md)$/, '');

            return {
                title: data.title || formatSlug(slug),
                description: data.description || 'New blog post from Mithtech.',
                date: data.date || new Date().toISOString(),
                author: data.author || 'Mithtech Team',
                category: data.category || 'Insights',
                coverImage: data.coverImage || '/assets/mithtech-white-logo.png',
                readTime: data.readTime || estimateReadTime(content),
                featured: data.featured === true || data.featured === 'true',
                content,
                slug,
            };
        });

    return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

export function getBlogPostBySlug(slug: string): BlogPost | null {
    const posts = getBlogPosts();
    return posts.find((p) => p.slug === slug) || null;
}

function parseFrontmatter(fileContent: string) {
    const frontmatterRegex = /---\s*([\s\S]*?)\s*---/;
    const match = fileContent.match(frontmatterRegex);

    if (!match) {
        return { data: {}, content: fileContent };
    }

    const frontmatterBlock = match[1];
    const content = fileContent.replace(frontmatterRegex, '').trim();
    const data: BlogFrontmatter = {};

    frontmatterBlock.split('\n').forEach((line) => {
        const [key, ...valueParts] = line.split(':');
        if (key && valueParts.length > 0) {
            const value = valueParts.join(':').trim().replace(/^["']|["']$/g, '');
            const normalizedKey = key.trim() as keyof BlogFrontmatter;
            if (normalizedKey === 'featured') {
                data[normalizedKey] = value === 'true';
                return;
            }
            data[normalizedKey] = value;
        }
    });

    return { data, content };
}

function estimateReadTime(content: string) {
    const words = content.split(/\s+/).filter(Boolean).length;
    const minutes = Math.max(1, Math.round(words / 200));
    return `${minutes} min read`;
}

function formatSlug(slug: string) {
    return slug
        .split('-')
        .map((segment) => segment.charAt(0).toUpperCase() + segment.slice(1))
        .join(' ');
}
