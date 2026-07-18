"use server";

import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import { fetchMutation } from "convex/nextjs";
import { api } from "@/convex/_generated/api";
import { Id } from "@/convex/_generated/dataModel";
import { Organizations, init } from "@kinde/management-api-js";

init();

export async function createAccountStep() {
  const { getUser } = getKindeServerSession();
  const user = await getUser();

  if (!user) {
    // TODO: add admin console logging here
    throw new Error(
      "create-account: No account is associated with this username.",
    );
  }

  await fetchMutation(api.mutations.createUser, {
    kindeId: user?.id as string,
    nickname: user?.username as string,
    email: user?.email as string,
  });

  return user?.id as string;
}

export async function settingRolePermissionStep(userId: string) {
  try {
    return await Organizations.addOrganizationUsers({
      orgCode: "org_f79e3e19d82",
      requestBody: {
        users: [
          {
            id: userId,
            roles: ["contributor"],
            permissions: [
              "asset:read",
              "asset:upload",
              "asset:edit",
              "asset:delete",
              "community:post",
              "docs:contribute",
              "feedback:submit",
            ],
          },
        ],
      },
    });
  } catch (error) {
    // TODO: add admin console logging here
    throw new Error(
      `setting-role-permission error: ${(error as Error).message}`,
    );
  }
}

export async function saveAvatarStep(userId: string) {
  try {
    await fetchMutation(api.mutations.saveAvatar, {
      userId: userId as Id<"kindeUsers">,
      avatarStorageId: "kg2551dj6p4c5nyqw2n601jdxs8apz4c" as Id<"_storage">,
    });
  } catch (error) {
    // TODO: add admin console logging here
    throw new Error(`save-avatar error: ${(error as Error).message}`);
  }
}
