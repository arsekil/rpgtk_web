import { Id } from "./_generated/dataModel";
import { mutation, MutationCtx } from "./_generated/server";
import { v } from "convex/values";

export const createUser = mutation({
  args: {
    kindeId: v.string(),
    nickname: v.string(),
    email: v.string(),
    bio: v.optional(v.string()),
    avatarStorageId: v.optional(v.id("_storage")),
    updatedAt: v.optional(v.number()),
  },
  handler: async (
    ctx: MutationCtx,
    args: {
      kindeId: string;
      nickname: string;
      email: string;
      bio?: string;
      avatarStorageId?: Id<"_storage">;
      updatedAt?: number;
    },
  ) => {
    const existing = await ctx.db
      .query("users")
      .withIndex("by_kindeId", (q) => q.eq("kindeId", args.kindeId))
      .unique();
    if (existing !== null) {
      return existing._id;
    }
    const userId = await ctx.db.insert("users", args);
    return userId;
  },
});

export const generateUploadUrl = mutation({
  args: {},
  handler: async (ctx: MutationCtx) => {
    const identity = await ctx.auth.getUserIdentity();
    if (identity === null) {
      throw new Error("Unauthenticated call to `generateUploadUrl` mutation.");
    }
    return await ctx.storage.generateUploadUrl();
  },
});

export const addFeatures = mutation({
  args: {
    title: v.string(),
    description: v.string(),
    content: v.string(),
    image: v.id("_storage"),
    author: v.id("users"),
    updatedAt: v.optional(v.number()),
  },
  handler: async (
    ctx: MutationCtx,
    args: {
      title: string;
      description: string;
      content: string;
      image: Id<"_storage">;
      author: Id<"users">;
      updatedAt?: number;
    },
  ) => {
    const identity = await ctx.auth.getUserIdentity();
    if (identity === null) {
      throw new Error("Unauthenticated call to `addFeatures` mutation.");
    }
    return await ctx.db.insert("features", args);
  },
});
