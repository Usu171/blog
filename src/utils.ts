import { render } from "astro:content";
import config from "./config.ts";

export function generatePath(date: Date, id: string): string {
  const { year, month, day } = getDatePartsInTimeZone(date);
  
  return `/${year}/${month}/${day}/${id}/`;
}

function getDatePartsInTimeZone(date: Date): Record<"year" | "month" | "day", string> {
  const formatter = new Intl.DateTimeFormat("en-CA", {
    timeZone: config.TIME_ZONE,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  });

  const parts = formatter.formatToParts(date);

  return {
    year: parts.find((part) => part.type === "year")?.value ?? "",
    month: parts.find((part) => part.type === "month")?.value ?? "",
    day: parts.find((part) => part.type === "day")?.value ?? "",
  };
}

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat("zh-CN", {
    timeZone: config.TIME_ZONE,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(date);
}

export function getMinCoverPath(coverPath: string): string {
  const index = coverPath.indexOf('/img/');
  if (index === -1) {
    return coverPath;
  }

  return coverPath.substring(0, index) + '/img/min/' + coverPath.substring(index + 5);
}


interface headings {
  depth: number;
  slug: string;
  text: string;
}

export function generateTOC(items: headings[]): string {
  let result = '';
  let stack: string[] = [];
  
  for (let item of items) {
    const { depth, slug, text } = item;

    while (depth > stack.length) {
      result += '<ul>'; 
      stack.push('<ul>');
    }

    while (depth < stack.length) {
      result += '</ul>';
      stack.pop();
    }

    result += `<li><a href="#${slug}">${text}</a></li>`;
  }


  while (stack.length > 0) {
    result += '</ul>';
    stack.pop();
  }

  return result;
}


export interface ProcessedPost {
  id: string;
  title: string;
  date: Date;
  tags: string[];
  categories: string;
  cover: string;
  description: string;
  wordCount: number;
  minutesRead: number;
}

export const POSTS_PER_PAGE = 10;

export function getReadingMinutes(minutesRead?: number | null): number {
  return Math.max(1, Math.ceil(minutesRead ?? 0));
}

export async function processPosts(posts: any[]): Promise<ProcessedPost[]> {
  const processedPosts = await Promise.all(
    posts.map(async (post) => {
      const { remarkPluginFrontmatter } = await render(post);

      return {
        id: post.id,
        title: post.data.title,
        date: post.data.date,
        tags: post.data.tags || [],
        categories: post.data.categories || "未分类",
        cover: post.data.cover || "",
        description: post.data.description
          ? post.data.description
          : post.body
          ? post.body.slice(0, 100) + "..."
          : "",
        wordCount: remarkPluginFrontmatter.words || 0,
        minutesRead: getReadingMinutes(remarkPluginFrontmatter.minutesRead),
      };
    })
  );

  return processedPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}
