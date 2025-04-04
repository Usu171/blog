import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { generatePath } from "src/utils.ts";
import config from "src/config.ts";
import sanitizeHtml from 'sanitize-html';
import MarkdownIt from 'markdown-it';
const parser = new MarkdownIt();

export async function GET(context) {
  const blog = await getCollection("blog");
  return rss({
    title: config.SITE_TITLE,

    description: config.SITE_TITLE,
    site: context.site,
    trailingSlash: false,

    items: blog.map((post) => ({
      title: post.data.title,
      pubDate: post.data.pubDate,
      description: post.data.description
        ? post.data.description
        : post.body
        ? post.body.slice(0, 100) + "..."
        : "",
      link: generatePath(post.data.date, post.id),
      content: sanitizeHtml(parser.render(post.body), {
        allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img', 'iframe'])
      }),

    })),
    customData: `<language>zh-cn</language>`,
  });
}
