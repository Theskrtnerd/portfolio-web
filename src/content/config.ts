import { imageConfig } from 'astro:assets';
import {defineCollection, z} from 'astro:content';

const postsCollection = defineCollection({
    schema: ({ image }) => z.object({
        date: z.string(),
        image: image(),
        tags: z.array(z.string()),
        title: z.string(),
        description: z.string(),
    }),
});

export const collections = {
    posts: postsCollection,
};