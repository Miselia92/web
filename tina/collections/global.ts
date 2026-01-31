import type { Collection } from "tinacms";
import { seoSchema } from "../seo";

export const global: Collection = {
    name: "global",
    label: "Global Settings",
    path: "src/content/global",
    format: "json",
    ui: {
        global: true,
        allowedActions: {
            create: false,
            delete: false,
        },
    },
    match: {
        include: "index",
    },
    fields: [
        seoSchema,
        {
            type: "string",
            name: "siteTitle",
            label: "Default Site Title",
        }
    ],
};
