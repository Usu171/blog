import { getCollection } from "astro:content";
import rss from "@astrojs/rss";
import MarkdownIt from "markdown-it";
import sanitizeHtml from "sanitize-html";
import config from "@/config.ts";
import { generatePath } from "@/utils.ts";

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
      description: post.data.description || (post.body ? post.body.slice(0, 100) + "..." : ""),
      link: generatePath(post.data.date, post.id),
      content: sanitizeHtml(parser.render(post.body), {
        allowedTags: sanitizeHtml.defaults.allowedTags.concat(["img", "iframe"]),
      }),
    })),
    customData: `<language>zh-cn</language>`,
  });
}
