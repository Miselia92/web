import type { Collection } from "tinacms";

export const projects: Collection = {
    name: "projects",
    label: "Projects",
    path: "src/content/projects",
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
            type: "string",
            name: "year",
            label: "Year",
        },
        {
            type: "image",
            name: "coverImage",
            label: "Cover Image",
        },
        {
            type: "object",
            name: "images",
            label: "Images",
            list: true,
            ui: {
                itemProps: (item) => {
                    if (item?.youtubeUrl) return { label: 'YouTube Video' }
                    return { label: item?.src ? item.src.split('/').pop() : 'New Image' }
                },
            },
            fields: [
                {
                    type: "image",
                    name: "src",
                    label: "Image",
                },
                {
                    type: "string",
                    name: "youtubeUrl",
                    label: "YouTube URL",
                    description: "Paste the full YouTube URL here (e.g. https://www.youtube.com/watch?v=...)",
                },
                {
                    type: "string",
                    name: "description",
                    label: "Description",
                },
                {
                    type: "string",
                    name: "description_zh",
                    label: "Description (Chinese)",
                }
            ]
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
            type: "string",
            name: "category",
            label: "Category",
            options: [
                "photography",
                "video-art",
                "documentary",
                "printmaking",
                "others",
            ],
        },
        {
            type: "number",
            name: "order",
            label: "Order",
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
        {
            type: "string",
            name: "subProjectClassification",
            label: "Sub-project Classification",
        },
        {
            type: "string",
            name: "subProjectClassification_zh",
            label: "Sub-project Classification (Chinese)",
        },
    ],
};
