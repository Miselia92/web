import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        year: z.string().optional(),
        coverImage: z.string().optional(),
        images: z.array(z.string()).optional(),
        description: z.string().optional(),
        category: z.enum(['photography', 'video-art', 'documentary', 'printmaking', 'others']).default('others'),
        // For ordering if needed, or we can use default date
        order: z.number().default(99),
    }),
});

const writing = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        date: z.date(),
        author: z.string().default('Mark Power'),
        description: z.string().optional(),
        coverImage: z.string().optional(),
    }),
});

export const collections = {
    projects,
    writing,
    pages: defineCollection({
        type: 'content',
        schema: z.object({
            title: z.string(),
            heroImages: z.array(z.string()).optional(),
            portraitImage: z.string().optional(),
            sections: z.array(z.object({
                title: z.string(),
                name: z.string(),
                address: z.string(),
                email: z.string().optional(),
                link: z.string().optional(),
                linkText: z.string().optional(),
            })).optional(),
        }),
    }),
};
