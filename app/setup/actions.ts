"use server";

import { currentUser, clerkClient } from "@clerk/nextjs/server";
import { redirect, RedirectType } from "next/navigation";
import { fetchMutation } from "convex/nextjs";
import { api } from "@/convex/_generated/api";

export async function createAccountStep() {
  const user = await currentUser();

  if (user?.unsafeMetadata?.setupCompleted === true) {
    redirect("/home", RedirectType.replace);
  }

  if (!user) {
    throw new Error("No account is associated with this username yet.");
  }

  const convexId = await fetchMutation(api.mutations.createUser, {
    clerkId: user?.id as string,
    nickname: user?.username as string,
    email: user?.emailAddresses[0].emailAddress,
  });

  const client = await clerkClient();

  if (user.privateMetadata.convexId !== convexId) {
    await client.users.updateUserMetadata(user.id as string, {
      privateMetadata: {
        convexId: convexId,
      },
    });
  }

  return { userId: user?.id as string };
}

export async function settingRoleStep(userId: string) {
  try {
    const user = await currentUser();
  } catch (error) {}
}
