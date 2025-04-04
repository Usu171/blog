export function generatePath(date: Date, id: string): string {
  const newDate = new Date(date.getTime() - 8 * 60 * 60 * 1000);

  const year = newDate.getFullYear().toString();
  const month = String(newDate.getMonth() + 1).padStart(2, "0");
  const day = String(newDate.getDate()).padStart(2, "0");

  return `/${year}/${month}/${day}/${id}/`;
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
}

function countWords(text: string): number {
  const cleanedText = text
    .replace(/[@#%^&*-_+=/\\|,，.。!！?？:：、;；“”'"$$()<>《》{}\[\]【】]/g, "")
    .replace(/[\r\n]/g, "")
    .replace(/\s+/g, "")
    .trim();

  return cleanedText.length;
}

export function processPosts(posts: any[]): ProcessedPost[] {
  return posts
    .map((post) => {
      const bodyWordCount = countWords(post.body || "");

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
        wordCount: bodyWordCount,
      };
    })
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}
