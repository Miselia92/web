import type { Collection } from "tinacms";

export const about: Collection = {
    name: "about",
    label: "About",
    path: "src/content/pages",
    format: "md",
    ui: {
        allowedActions: {
            create: false,
            delete: false,
        },
    },
    match: {
        include: "about",
    },
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
            type: "image",
            name: "portraitImage",
            label: "Portrait Image",
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
