import { defineCollection, z } from 'astro:content';

const agents = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    brief: z.string(),
  }),
});

export const collections = { agents };
