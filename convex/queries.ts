import { query, QueryCtx } from "./_generated/server";
import { v } from "convex/values";

export const getFeatures = query({
  args: {},
  handler: async (ctx: QueryCtx) => {
    const features = await ctx.db.query("features").collect();
    return features.map((feature) => ({
      id: feature._id,
      title: feature.title,
      description: feature.description,
      content: feature.content,
      image: feature.image,
      author: feature.author,
      updatedAt: feature.updatedAt,
    }));
  },
});
