import fs from 'fs';
import path from 'path';

const COMMENTS_PATH = path.join(process.cwd(), 'src/data/comments.json');

export interface Comment {
    id: string;
    slug: string;
    name: string;
    content: string;
    date: string;
}

function ensureDirectoryExistence(filePath: string) {
    const dirname = path.dirname(filePath);
    if (fs.existsSync(dirname)) {
        return true;
    }
    fs.mkdirSync(dirname, { recursive: true });
}

export function getComments(slug: string): Comment[] {
    if (!fs.existsSync(COMMENTS_PATH)) {
        return [];
    }
    const data = fs.readFileSync(COMMENTS_PATH, 'utf8');
    try {
        const comments: Comment[] = JSON.parse(data);
        return comments.filter((c) => c.slug === slug).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
    } catch (e) {
        return [];
    }
}

export function addComment(comment: Omit<Comment, 'id' | 'date'>) {
    ensureDirectoryExistence(COMMENTS_PATH);

    let comments: Comment[] = [];
    if (fs.existsSync(COMMENTS_PATH)) {
        try {
            const data = fs.readFileSync(COMMENTS_PATH, 'utf8');
            comments = JSON.parse(data);
        } catch (e) {
            comments = [];
        }
    }

    const newComment: Comment = {
        ...comment,
        id: Math.random().toString(36).substr(2, 9),
        date: new Date().toISOString(),
    };

    comments.push(newComment);
    fs.writeFileSync(COMMENTS_PATH, JSON.stringify(comments, null, 2));
    return newComment;
}
