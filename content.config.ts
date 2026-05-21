import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

const documents = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/documentation" }),
  schema: z.object({
    title: z.string(),
  }),
});

export const collections = { documents };
