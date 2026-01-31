import type { TinaField } from "tinacms";

export const seoSchema: TinaField = {
    type: "object",
    name: "seo",
    label: "SEO & Social Sharing",
    fields: [
        {
            type: "string",
            name: "title",
            label: "Title",
            description: "Overrides the default page title",
        },
        {
            type: "string",
            name: "description",
            label: "Description",
            description: "Overrides the default page description",
            ui: {
                component: "textarea",
            },
        },
        {
            type: "image",
            name: "image",
            label: "Open Graph Image",
            description: "Image shared on social media",
        },
        {
            type: "string",
            name: "canonical",
            label: "Canonical URL",
        }
    ],
};
