"use server";

import { currentUser } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";
import Image from "next/image";

const messages = [
  {
    id: "create-account",
    message: "Creating account",
    step: "w-2 h-2 rounded-[100%] bg-white border-1",
    fill: "w-2 h-2 rounded-[100%] bg-green-700 border-green-700",
  },
  {
    id: "user-role",
    message: "Setting User role",
    step: "w-2 h-2 rounded-[100%] bg-white border-1",
    fill: "w-2 h-2 rounded-[100%] bg-green-700 border-green-700",
  },
  {
    id: "user-permission",
    message: "Setting up permissions",
    step: "w-2 h-2 rounded-[100%] bg-white border-1",
    fill: "w-2 h-2 rounded-[100%] bg-green-700 border-green-700",
  },
  {
    id: "tk-avatar",
    message: "Saving TK avatar",
    step: "w-2 h-2 rounded-[100%] bg-white border-1",
    fill: "w-2 h-2 rounded-[100%] bg-green-700 border-green-700",
  },
  {
    id: "save-data",
    message: "Saving the data",
    step: "w-2 h-2 rounded-[100%] bg-white border-1",
    fill: "w-2 h-2 rounded-[100%] bg-green-700 border-green-700",
  },
];

// TODO: Add a loading state while the user is being created in Clerk and Convex
export default async function Page() {
  const user = await currentUser();
  return (
    <div
      id="setup"
      className="w-full h-screen flex flex-col items-center justify-center gap-4 text-sm"
    >
      <div className="">Please wait while everything is set up...</div>
      <div id="messages" className="">
        {messages.map(({ message, id, step, fill }) => (
          <div
            key={id}
            className="flex flex-row items-center justify-center gap-4"
          >
            <div className={step}></div>
            <div className={fill}></div>
            <div className="w-full">{message}</div>
          </div>
        ))}
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
  );
}
