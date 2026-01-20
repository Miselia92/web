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
    ],
};
