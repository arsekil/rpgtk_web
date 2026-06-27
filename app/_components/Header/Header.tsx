"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { UserButton } from "@clerk/nextjs";
import Icon from "@mdi/react";
import { mdiMagnify } from "@mdi/js";
import Menu from "@/app/_components/Menu/Menu";

// TODO: add dynamically changing background image into "header" - e.g. bg-[url('/tk/core/2.jpg')] bg-no-repeat bg-center bg-cover
// TODO: add Search input functionality
export default function Header() {
  return (
        <div id="header" className="relative w-full h-52 bg-[url('/tk/core/2.jpg')] bg-no-repeat bg-center bg-cover">
          <div id="barA" className="absolute w-full position top-0 right-0 left-0 h-16 bg-[url('/tk/core/bar-bkg.png')] flex flex-row justify-between items-center">
            <div id="logo" className="pt-4 pl-4 w-52 h-16">
              <Link href="/home">
                <Image src="/tk/logo.png" alt="RPGToolkit Logo" width={200} height={49} loading="eager" className="no-underline aspect-200/49"/>
              </Link>
              </div>
            <div id="userbox" className="flex justify-center items-center w-10 h-16">
              <UserButton />
            </div>
            <div id="search" className="flex flex-row items-center justify-center m-4 w-46 h-7 bg-[url('/tk/core/search-bkg.png')] bg-no-repeat bg-center">
              <input id="search-input" type="text" placeholder="enter keyword(s)" className="w-36 h-4 bg-transparent border-none focus:outline-none"/>
              <Icon path={mdiMagnify} size={.8} className="cursor-pointer" rotate={90}/>
            </div>
          </div>
          <div id="barB" className="absolute w-full right-0 bottom-0 left-0 h-7 bg-[url('/tk/core/menu-bkg.png')]">
            <Menu />
          </div>
        </div>
    )
}