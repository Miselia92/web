import type { Collection } from "tinacms";

export const writing: Collection = {
    name: "writing",
    label: "Writing",
    path: "src/content/writing",
    format: "md",
    fields: [
        {
            type: "string",
            name: "title",
            label: "Title",
            isTitle: true,
            required: true,
        },
        {
            type: "string",
            name: "title_zh",
            label: "Title (Chinese)",
        },
        {
            type: "datetime",
            name: "date",
            label: "Date",
        },
        {
            type: "string",
            name: "author",
            label: "Author",
        },
        {
            type: "string",
            name: "description",
            label: "Description",
            ui: {
                component: "textarea",
            },
        },
        {
            type: "string",
            name: "description_zh",
            label: "Description (Chinese)",
            ui: {
                component: "textarea",
            },
        },
        {
            type: "image",
            name: "coverImage",
            label: "Cover Image",
        },
        {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
        },
        {
            type: "rich-text",
            name: "body_zh",
            label: "Body (Chinese)",
        },
    ],
};
