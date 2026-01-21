import type { Collection } from "tinacms";

export const home: Collection = {
    name: "home",
    label: "Home",
    path: "src/content/pages",
    format: "md",
    ui: {
        allowedActions: {
            create: false,
            delete: false,
        },
    },
    match: {
        include: "home",
    },
    fields: [

        {
            type: "string",
            name: "brandName",
            label: "Brand Name",
        },
        {
            type: "image",
            name: "heroImages",
            label: "Hero Images",
            list: true,
        },
    ],
};
