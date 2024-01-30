import { docsSchema } from "@astrojs/starlight/schema";
import { defineCollection } from "astro/content/runtime";

export const collections = {
    docs: defineCollection({schema: docsSchema()})
}