import { defineCollection, z } from 'astro:content';

const projects = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        title_zh: z.string().optional(),
        year: z.string().optional(),
        coverImage: z.string().optional(),
        images: z.array(z.object({
            src: z.string().optional(),
            youtubeUrl: z.string().optional(),
            description: z.string().optional().default(""),
            description_zh: z.string().optional(),
        })).optional(),
        description: z.string().optional(),
        description_zh: z.string().optional(),
        category: z.enum(['photography', 'video-art', 'documentary', 'printmaking', 'others']).default('others'),
        subProjectClassification: z.string().optional(),
        subProjectClassification_zh: z.string().optional(),
        // For ordering if needed, or we can use default date
        order: z.number().default(99),
    }),
});

const writing = defineCollection({
    type: 'content',
    schema: z.object({
        title: z.string(),
        title_zh: z.string().optional(),
        date: z.date(),
        author: z.string().default('Mark Power'),
        description: z.string().optional(),
        description_zh: z.string().optional(),
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
            title_zh: z.string().optional(),
            brandName: z.string().optional(),
            brandName_zh: z.string().optional(),
            heroImages: z.array(z.string()).optional(),
            portraitImage: z.string().optional(),
            sections: z.array(z.object({
                title: z.string(),
                title_zh: z.string().optional(),
                name: z.string(),
                name_zh: z.string().optional(),
                address: z.string(),
                address_zh: z.string().optional(),
                email: z.string().optional(),
                link: z.string().optional(),
                linkText: z.string().optional(),
            })).optional(),
        }),
    }),
};
