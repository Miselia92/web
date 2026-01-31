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
                    name: "description",
                    label: "Description",
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
            type: "string",
            name: "subProjectClassification",
            label: "Sub-project Classification",
        },
    ],
};
