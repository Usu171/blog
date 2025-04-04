// @ts-check
import { remarkReadingTime } from './src/plugins/remark-reading-time.mjs';
import { defineConfig } from "astro/config";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import UnoCSS from "unocss/astro";
import swup from "@swup/astro";

import svelte from "@astrojs/svelte";

import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://usu171.uk",
  integrations: [
    UnoCSS(),
    svelte(),
    sitemap(),
    swup({
      containers: ["main"],
    }),
  ],
  build: {
    // inlineStylesheets: `always`,
  },
  markdown: {
    remarkPlugins: [remarkMath, remarkReadingTime],
    rehypePlugins: [rehypeKatex],
    // shikiConfig: {
    //   theme: 'vitesse-dark',
    // },
  },
});
