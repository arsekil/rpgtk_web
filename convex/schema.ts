import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  features: defineTable({
    title: v.string(),
    description: v.string(),
    content: v.string(),
    author: v.string(),
  }),
});
