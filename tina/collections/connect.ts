import type { Collection } from "tinacms";

export const connect: Collection = {
    name: "connect",
    label: "Connect",
    path: "src/content/pages",
    format: "md",
    ui: {
        allowedActions: {
            create: false,
            delete: false,
        },
    },
    match: {
        include: "connect",
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
    ],
};
