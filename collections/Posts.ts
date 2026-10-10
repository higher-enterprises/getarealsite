import type { CollectionConfig } from "payload";

export const Posts: CollectionConfig = {
  slug: "posts",
    access: {
    read: () => true,
  },
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "_status", "publishedAt", "updatedAt"],
  },
  versions: { drafts: true },
  fields: [
    { name: "title", type: "text", required: true },
    { name: "slug", type: "text", required: true, unique: true, index: true },
    { name: "excerpt", type: "textarea", required: true },
    { name: "featuredImage", type: "upload", relationTo: "media", required: true },
    { name: "categories", type: "relationship", relationTo: "categories", hasMany: true },
    { name: "content", type: "richText", required: true },
    { name: "publishedAt", type: "date", admin: { position: "sidebar", date: { pickerAppearance: "dayAndTime" } } },
    { name: "featured", type: "checkbox", defaultValue: false, admin: { position: "sidebar" } },
  ],
};
