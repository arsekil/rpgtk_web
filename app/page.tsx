"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import {
  RegisterLink,
  LoginLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import Icon from "@mdi/react";
import { mdiLogin, mdiAccountPlus, mdiSword } from "@mdi/js";

export default function Page() {
  const { isLoading, isAuthenticated } = useKindeBrowserClient();
  return (
    <section className="w-full box-border flex flex-col items-center justify-center p-4">
      <video
        className="pb-8"
        width={512}
        height={512}
        autoPlay
        loop
        playsInline
        muted
      >
        <source src="/tk/tksword.mp4" type="video/mp4" />
      </video>
      <div className="w-full h-max flex flex-col items-center justify-center text-center">
        <div className="pb-4">
          <p className="text-3xl font-bold">rpgtoolkit.net</p>
        </div>
        <div className="pb-4">
          <p className="text-sm font-medium">
            A free and open-source toolkit with 2D, 2.5D and 3D capabilities
          </p>
        </div>
      </div>
      {isLoading && !isAuthenticated && (
        <div className="w-full box-border flex flex-col justify-center items-center gap-4">
          <Image
            src="/tk/core/loading-edited.gif"
            width={30}
            height={30}
            alt="Loading..."
            unoptimized
          />
        </div>
      )}
      {!isLoading && isAuthenticated && (
        <div className="flex flex-row justify-center gap-8 p-4">
          <div>
            <Link
              href="/home"
              className="flex flex-row gap-2 bg-white p-2 hover:text-white hover:bg-black"
            >
              <Icon
                path={mdiSword}
                title="Toolkit Homepage"
                size={1}
                rotate={225}
              />
              <p className="text-medium font-medium">Home</p>
            </Link>
          </div>
        </div>
      )}
      {!isLoading && !isAuthenticated && (
        <div className="flex flex-row justify-center gap-8 p-4">
          <div className="p-2 bg-white hover:text-white hover:bg-black">
            <LoginLink className="flex flex-row gap-2  text-medium font-medium">
              <Icon path={mdiLogin} title="Sign In" size={1} />
              Sign In
            </LoginLink>
          </div>
          <div className=" bg-white p-2 hover:text-white hover:bg-black">
            <RegisterLink className="flex flex-row gap-2 text-medium font-medium">
              <Icon path={mdiAccountPlus} title="Sign Up" size={1} />
              Sign Up
            </RegisterLink>
          </div>
        </div>
      )}
    </section>
  );
}
