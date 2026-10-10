import type { CollectionConfig } from "payload";

export const Media: CollectionConfig = {
  slug: "media",
  upload: {
    staticDir: "media",
    mimeTypes: ["image/*"],
    imageSizes: [
      { name: "thumbnail", width: 400, height: 250, position: "centre" },
      { name: "card", width: 800, height: 500, position: "centre" },
      { name: "hero", width: 1600, height: 900, position: "centre" },
    ],
    adminThumbnail: "thumbnail",
  },
  fields: [{ name: "alt", type: "text", required: true }],
};
