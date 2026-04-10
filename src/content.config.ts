import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

const blog = defineCollection({
  loader: glob({ pattern: "*.md", base: "./src/content/blog/" }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    banner: z.union([z.string(), z.null()]).optional(),
    description: z.union([z.string(), z.null()]).optional(),
    tags: z.union([z.array(z.string()), z.null()]).optional(),
    categories: z.union([z.string(), z.null()]).optional(),
    cover: z.union([z.string(), z.null()]).optional(),
    minutesRead: z.number().optional(),
    words: z.number().optional(),
  }),
});

export const collections = { blog };
