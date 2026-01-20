import type { Collection } from "tinacms";

export const pages: Collection = {
    name: "pages",
    label: "Pages",
    path: "src/content/pages",
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
            type: "image",
            name: "heroImages",
            label: "Hero Images",
            list: true,
        },
        {
            type: "image",
            name: "portraitImage",
            label: "Portrait Image",
        },
        {
            type: "object",
            name: "sections",
            label: "Sections",
            list: true,
            fields: [
                {
                    type: "string",
                    name: "title",
                    label: "Title",
                },
                {
                    type: "string",
                    name: "name",
                    label: "Name",
                },
                {
                    type: "string",
                    name: "address",
                    label: "Address",
                },
                {
                    type: "string",
                    name: "email",
                    label: "Email",
                },
                {
                    type: "string",
                    name: "link",
                    label: "Link URL",
                },
                {
                    type: "string",
                    name: "linkText",
                    label: "Link Text",
                },
            ],
        },
        {
            type: "rich-text",
            name: "body",
            label: "Body",
            isBody: true,
        },
    ],
};
