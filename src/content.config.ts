import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const common = defineCollection({
  loader: glob({
    pattern: "**/[^_]*.md", // 排除下划线开头的文件
    base: "./src/common",
  }),
  schema: z.object({
    title: z.string(),
    lastUpdated: z.string(),
  }),
})

export const collections = { common }