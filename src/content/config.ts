import { defineCollection, z } from "astro:content";

const cheatsheets = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string().optional(),
    description: z.string().optional(),
    order: z.number().optional(),
    tags: z.array(z.string()).optional(),
  }),
});

export const collections = { cheatsheets };
