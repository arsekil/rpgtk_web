"use server";

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { redirect, RedirectType } from "next/navigation";
import { fetchMutation } from "convex/nextjs";
import { api } from "@/convex/_generated/api";
import { Users, init } from "@kinde/management-api-js";

init();

export async function createAccountStep() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) {
    throw new Error("No account is associated with this username yet.");
  }

  const convexId = await fetchMutation(api.mutations.createUser, {
    kindeId: user?.id as string,
    nickname: user?.username as string,
    email: user?.email as string,
  });

  await Users.updateUserProperty({
    propertyKey: "convexId",
    userId: user?.id as string,
    value: convexId as string,
  });

  return { userId: user?.id as string };
}

export async function settingRoleStep(userId: string) {}
