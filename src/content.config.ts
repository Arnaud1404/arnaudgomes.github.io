import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projectCollection = defineCollection({
  loader: glob({
    pattern: '**/*.{md,mdx}',
  }),
  schema: z.object({
    title: z.string(),
    description: z.string(),
    techStack: z.array(z.string()),
    language: z.enum(['en', 'fr']),
  }),
});

export const collections = {
  'projects': projectCollection,
};
