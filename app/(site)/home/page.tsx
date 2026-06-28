"use client";

import React from "react";
import Link from "next/link";
// import Image from "next/image";

export default function Page() {
  
  return (
    <div className="w-full">
      <div className="w-full h-9 bg-menu-selected-bg flex flex-row ">
        <p className="text-white text-sm p-2">
          New to RPG Toolkit? Click <Link href="/home/about" className="text-[#6699cc]">here</Link> to find out more.
        </p>
        <div className="absolute right-1.5 top-38.25 w-80 h-20 flex justify-center items-center">
          {/*TODO: add RPG Toolkit version4(5) logo here*/}
        </div>
      </div>
    </div>
  )
}