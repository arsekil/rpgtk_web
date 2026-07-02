"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useMenuStore } from "@/app/_utils/MenuStore/MenuStore";

const menuItems = [
  { label: "home", href: "/home" },
  { label: "software", href: "/software/toolkit" },
  { label: "extend", href: "/extend/latest" },
  { label: "tutorials", href: "/tutorials/latest" },
  { label: "games", href: "/games/latest" },
  { label: "devlog", href: "/devlog/feed" },
  { label: "forum", href: "/community" },
];

export default function Menu() {
  const setMenuItem = useMenuStore((state) => state.setMenuItem);
  const pathname = usePathname();
  return (
    <div className="ml-3 flex flex-row justify-start items-center gap-2 h-full font-bold text-sm">
      {menuItems.map((item) => (
        <div
          key={item.href}
          className={`p-2 pb-0 rounded-t-xl ${pathname === item.href ? "bg-menu-selected-bg" : "transition-colors ease-in-out duration-300 hover:bg-menu-selected-bg"}`}
        >
          <Link
            href={item.href}
            className="text-white"
            title={`${pathname === item.href ? `You are in the ${item.label} section` : `Go to the ${item.label} section`}`}
            onClick={() => setMenuItem(pathname || item.href)}
          >
            {item.label}
          </Link>
        </div>
      ))}
    </div>
  );
}
