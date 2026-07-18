import { defineSchema, defineTable } from "convex/server";
import { v } from "convex/values";

export default defineSchema({
  kindeUsers: defineTable({
    kindeId: v.string(),
    nickname: v.string(),
    email: v.string(),
    bio: v.optional(v.string()),
    avatarStorageId: v.optional(v.id("_storage")),
    updatedAt: v.optional(v.number()),
  })
    .index("by_kindeId", ["kindeId"])
    .index("by_email", ["email"]),

  features: defineTable({
    title: v.string(),
    description: v.string(),
    content: v.string(),
    image: v.id("_storage"),
    author: v.id("kindeUsers"),
    updatedAt: v.optional(v.number()),
  }),

  extensions: defineTable({
    name: v.string(),
    type: v.union(
      v.literal("plugin"),
      v.literal("class"),
      v.literal("method"),
      v.literal("utility"),
    ),
    description: v.string(),
    developer: v.id("kindeUsers"),
    views: v.union(v.number(), v.null()),
    downloads: v.union(v.number(), v.null()),
    likes: v.union(v.number(), v.null()),
  }),

  tutorials: defineTable({
    title: v.string(),
    description: v.string(),
    type: v.union(
      v.literal("editor"),
      v.literal("graphics"),
      v.literal("coding"),
      v.literal("audio"),
    ),
    content: v.string(),
    author: v.id("kindeUsers"),
    published: v.number(),
    reads: v.union(v.number(), v.null()),
    likes: v.union(v.number(), v.null()),
  }),

  games: defineTable({
    title: v.string(),
    description: v.string(),
    developerId: v.id("kindeUsers"),
    status: v.union(
      v.literal("draft"),
      v.literal("published"),
      v.literal("archived"),
    ),
    coverImageId: v.optional(v.id("_storage")),
    updatedAt: v.optional(v.number()),
  })
    .index("by_developer", ["developerId"])
    .index("by_status", ["status"]),

  devlogs: defineTable({
    gameId: v.id("games"),
    title: v.string(),
    content: v.string(),
    progress: v.optional(v.number()), // 0-100
    status: v.union(v.literal("draft"), v.literal("published")),
    updatedAt: v.optional(v.number()),
  })
    .index("by_game", ["gameId"])
    .index("by_status", ["status"]),

  screendipity: defineTable({
    devlogId: v.id("devlogs"),
    gameId: v.id("games"),
    storageId: v.id("_storage"),
    caption: v.optional(v.string()),
    order: v.optional(v.number()),
  })
    .index("by_devlog", ["devlogId"])
    .index("by_game", ["gameId"]),

  gamelab: defineTable({
    gameId: v.id("games"),
    type: v.union(
      v.literal("demo"),
      v.literal("feedback"),
      v.literal("release"),
    ),
    title: v.string(),
    content: v.string(),
    status: v.union(v.literal("open"), v.literal("closed")),
    updatedAt: v.optional(v.number()),
  })
    .index("by_game", ["gameId"])
    .index("by_type", ["type"]),

  comments: defineTable({
    parentId: v.union(v.id("extensions"), v.id("tutorials"), v.id("games")),
    parentTable: v.union(
      v.literal("extensions"),
      v.literal("tutorials"),
      v.literal("games"),
    ),
    parentCommentId: v.optional(v.id("comments")),
    authorId: v.id("kindeUsers"),
    content: v.string(),
    updatedAt: v.optional(v.number()),
  })
    .index("by_parent", ["parentId", "parentTable"])
    .index("by_author", ["authorId"]),

  reviews: defineTable({
    gameId: v.id("games"),
    reviewerId: v.id("kindeUsers"),
    rating: v.union(v.number(), v.null()),
    content: v.string(),
    createdAt: v.number(),
  })
    .index("by_game", ["gameId"])
    .index("by_reviewer", ["reviewerId"]),

  likes: defineTable({
    parentId: v.union(v.id("extensions"), v.id("tutorials"), v.id("games")),
    parentTable: v.union(
      v.literal("extensions"),
      v.literal("tutorials"),
      v.literal("games"),
    ),
    userId: v.id("kindeUsers"),
    createdAt: v.number(),
  })
    .index("by_parent", ["parentId", "parentTable"])
    .index("by_user", ["userId"]),
});
