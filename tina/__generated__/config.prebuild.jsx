// tina/config.ts
import { defineConfig } from "tinacms";

// tina/collections/projects.ts
var projects = {
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
      required: true
    },
    {
      type: "string",
      name: "year",
      label: "Year"
    },
    {
      type: "image",
      name: "coverImage",
      label: "Cover Image"
    },
    {
      type: "image",
      name: "images",
      label: "Images",
      list: true
    },
    {
      type: "string",
      name: "description",
      label: "Description",
      ui: {
        component: "textarea"
      }
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
        "others"
      ]
    },
    {
      type: "number",
      name: "order",
      label: "Order"
    },
    {
      type: "rich-text",
      name: "body",
      label: "Body",
      isBody: true
    }
  ]
};

// tina/collections/writing.ts
var writing = {
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
      required: true
    },
    {
      type: "datetime",
      name: "date",
      label: "Date"
    },
    {
      type: "string",
      name: "author",
      label: "Author"
    },
    {
      type: "string",
      name: "description",
      label: "Description",
      ui: {
        component: "textarea"
      }
    },
    {
      type: "image",
      name: "coverImage",
      label: "Cover Image"
    },
    {
      type: "rich-text",
      name: "body",
      label: "Body",
      isBody: true
    }
  ]
};

// tina/collections/home.ts
var home = {
  name: "home",
  label: "Home",
  path: "src/content/pages",
  format: "md",
  ui: {
    allowedActions: {
      create: false,
      delete: false
    }
  },
  match: {
    include: "home"
  },
  fields: [
    {
      type: "string",
      name: "brandName",
      label: "Brand Name"
    },
    {
      type: "image",
      name: "heroImages",
      label: "Hero Images",
      list: true
    }
  ]
};

// tina/collections/about.ts
var about = {
  name: "about",
  label: "About",
  path: "src/content/pages",
  format: "md",
  ui: {
    allowedActions: {
      create: false,
      delete: false
    }
  },
  match: {
    include: "about"
  },
  fields: [
    {
      type: "string",
      name: "title",
      label: "Title",
      isTitle: true,
      required: true
    },
    {
      type: "image",
      name: "portraitImage",
      label: "Portrait Image"
    },
    {
      type: "rich-text",
      name: "body",
      label: "Body",
      isBody: true
    }
  ]
};

// tina/collections/connect.ts
var connect = {
  name: "connect",
  label: "Connect",
  path: "src/content/pages",
  format: "md",
  ui: {
    allowedActions: {
      create: false,
      delete: false
    }
  },
  match: {
    include: "connect"
  },
  fields: [
    {
      type: "string",
      name: "title",
      label: "Title",
      isTitle: true,
      required: true
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
          label: "Title"
        },
        {
          type: "string",
          name: "name",
          label: "Name"
        },
        {
          type: "string",
          name: "address",
          label: "Address"
        },
        {
          type: "string",
          name: "email",
          label: "Email"
        },
        {
          type: "string",
          name: "link",
          label: "Link URL"
        },
        {
          type: "string",
          name: "linkText",
          label: "Link Text"
        }
      ]
    }
  ]
};

// tina/config.ts
var branch = process.env.GITHUB_BRANCH || process.env.VERCEL_GIT_COMMIT_REF || process.env.HEAD || "main";
var config_default = defineConfig({
  branch,
  clientId: process.env.NEXT_PUBLIC_TINA_CLIENT_ID,
  token: process.env.TINA_TOKEN,
  build: {
    outputFolder: "admin",
    publicFolder: "public"
  },
  media: {
    tina: {
      mediaRoot: "images",
      publicFolder: "public"
    }
  },
  schema: {
    collections: [home, about, connect, projects, writing]
  }
});
export {
  config_default as default
};
