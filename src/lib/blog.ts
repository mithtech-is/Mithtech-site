import fs from 'fs';
import path from 'path';

const BLOG_CONTENT_PATH = path.join(process.cwd(), 'src/content/blog');

export interface BlogPost {
    title: string;
    description: string;
    date: string;
    slug: string;
    content: string;
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

            return {
                ...data,
                content,
                slug: data.slug || file.replace(/\.(mdx|md)$/, ''),
            } as BlogPost;
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
    const data: any = {};

    frontmatterBlock.split('\n').forEach((line) => {
        const [key, ...valueParts] = line.split(':');
        if (key && valueParts.length > 0) {
            const value = valueParts.join(':').trim().replace(/^["']|["']$/g, '');
            data[key.trim()] = value;
        }
    });

    return { data, content };
}
