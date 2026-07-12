"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { createAccountStep, settingRoleStep } from "./actions";

const stepDefs = [
  { id: "create-account", message: "Creating account" },
  { id: "user-role", message: "Setting up roles" },
  { id: "user-permission", message: "Setting up permissions" },
  { id: "save-avatar", message: "Saving avatars" },
  { id: "save-data", message: "Saving the data" },
];

/* 
/ TODO: 
/ 
/ Add a loading state while the user is being created in Clerk and Convex
/ At each step verify which function has finished running and update the blank dot to green
/
*/

type StepStatus = "pending" | "done" | "failed" | "skipped";

export default function SetupClient() {
  const [statuses, setStatuses] = React.useState<Record<string, StepStatus>>(
    Object.fromEntries(stepDefs.map((s) => [s.id, "pending"])),
  );

  const router = useRouter();

  React.useEffect(() => {
    async function run() {
      try {
        const { userId } = await createAccountStep();
        setStatuses((s) => ({ ...s, "create-account": "done" }));

        await settingRoleStep(userId);
        setStatuses((s) => ({ ...s, "user-role": "done" }));

        // await settingPermissionStep(userId); setStatuses(...)

        // await saveAvatarStep(userId);
        // setStatuses((s) => ({ ...s, "save-avatar": "done" }));

        // await saveDataStep(userId); setStatuses(...)

        //router.push("/home");
      } catch (error) {
        console.error(error);
      }
    }
    run();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <React.Fragment>
      <div
        id="setup"
        className="w-full h-screen flex flex-col items-center justify-center gap-4 text-sm"
      >
        <div className="">Please wait while everything is set up...</div>
        <div id="messages">
          {stepDefs.map(({ id, message }) => {
            const status = statuses[id];
            return (
              <div
                key={id}
                className="flex flex-row items-center justify-center gap-4"
              >
                <div
                  className={
                    status === "done"
                      ? "w-2 h-2 rounded-full bg-green-700 border border-green-700"
                      : status === "failed"
                        ? "w-2 h-2 rounded-full bg-red-700 border-red-700"
                        : status === "skipped"
                          ? "w-2 h-2 rounded-full bg-black border"
                          : "w-2 h-2 rounded-full bg-white border"
                  }
                ></div>
                <div className="w-full">{message}</div>
              </div>
            );
          })}
        </div>
        <div className="w-8 h-8">
          <Image
            src="/tk/core/loading-edited.gif"
            alt="Loading animation"
            width={31}
            height={31}
            unoptimized
          />
        </div>
      </div>
    </React.Fragment>
  );
}
