import React from "react";
import Link from "next/link";
// import Image from "next/image";

import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "RPG Toolkit > Home",
  description: "RPG Toolkit Homepage",
  icons: {
    icon: "/icon.png",
  },
};

export default function Page() {
  return (
    <div id="home-strip" className="w-full">
      <div
        id="home-blurb"
        className="w-full h-9 bg-menu-selected-bg flex flex-row "
      >
        <p className="text-white text-sm p-2">
          New to RPG Toolkit? Click{" "}
          <Link href="/home/about" className="text-[#6699cc]">
            here
          </Link>{" "}
          to find out more.
        </p>
      </div>
      <div
        id="home-rpgtoolkit"
        className="absolute right-1.5 top-38.25 w-80 h-20 flex justify-center items-center"
      >
        {/*TODO: add RPG Toolkit version4(5) logo here*/}
      </div>
    </div>
  );
}
