import { Id } from "./_generated/dataModel";
import { internalMutation, MutationCtx } from "./_generated/server";
import { v } from "convex/values";

export const createUser = internalMutation({
  args: {
    clerkId: v.string(),
    nickname: v.string(),
    email: v.string(),
    bio: v.optional(v.string()),
    avatarStorageId: v.optional(v.id("_storage")),
    updatedAt: v.optional(v.number()),
  },
  handler: async (
    ctx: MutationCtx,
    args: {
      clerkId: string;
      nickname: string;
      email: string;
      bio?: string;
      avatarStorageId?: Id<"_storage">;
      updatedAt?: number;
    },
  ) => {
    const identity = await ctx.auth.getUserIdentity();
    if (identity === null) {
      throw new Error("Unauthenticated call to `createUser` mutation.");
    }
    return await ctx.db.insert("users", args);
  },
});

export const generateUploadUrl = internalMutation({
  args: {},
  handler: async (ctx: MutationCtx) => {
    const identity = await ctx.auth.getUserIdentity();
    if (identity === null) {
      throw new Error("Unauthenticated call to `generateUploadUrl` mutation.");
    }
    return await ctx.storage.generateUploadUrl();
  },
});

export const addFeatures = internalMutation({
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
