import { defineConfig } from "tinacms";
import { projects } from "./collections/projects";
import { writing } from "./collections/writing";
import { home } from "./collections/home";
import { about } from "./collections/about";
import { connect } from "./collections/connect";

const branch =
    process.env.GITHUB_BRANCH ||
    process.env.VERCEL_GIT_COMMIT_REF ||
    process.env.HEAD ||
    "main";

export default defineConfig({
    branch,
    clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
    token: process.env.TINA_TOKEN,
    build: {
        outputFolder: "admin",
        publicFolder: "public",
    },
    media: {
        tina: {
            mediaRoot: "images",
            publicFolder: "public",
        },
    },
    schema: {
        collections: [home, about, connect, projects, writing],
    },
});
