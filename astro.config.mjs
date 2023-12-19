import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import mdx from '@astrojs/mdx';
import remarkMath from 'remark-math';
import rehypeMathJax from 'rehype-mathjax';

import svelte from "@astrojs/svelte";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), mdx({
    remarkPlugins: [[remarkMath]],
    rehypePlugins: [[rehypeMathJax]]
  }), svelte()]
});