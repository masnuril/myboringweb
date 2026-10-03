import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const moments = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/moments' }),
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    seoKeywords: z.array(z.string()),
    metaDescription: z.string(),
    publishDate: z.string(),
    readTime: z.string(),
    category: z.string(),
    location: z.string(),
    featuredImage: z.string(),
    imageAlt: z.string(),
    highlights: z.array(z.string()),
  }),
});

const gallery = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/gallery' }),
  schema: z.object({
    id: z.string().optional(),
    title: z.string(),
    category: z.string(),
    imageUrl: z.string(),
    alt: z.string(),
    aspectRatio: z.enum(['portrait', 'landscape', 'square']),
    storySnippet: z.string(),
    order: z.number().default(1),
  }),
});

const promo = defineCollection({
  loader: glob({ pattern: '**/*.json', base: './src/content/promo' }),
  schema: z.object({
    title: z.string(),
    badge: z.string(),
    subtitle: z.string(),
    originalPrice: z.string(),
    promoPrice: z.string(),
    discountTag: z.string(),
    validUntil: z.string(),
    slotsLeft: z.number(),
    features: z.array(z.string()),
    bonuses: z.array(z.string()),
    ctaText: z.string(),
  }),
});

export const collections = {
  moments,
  gallery,
  promo,
};
