"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const footerLinks = [
  { href: "/about", label: "about" },
  { href: "/faq", label: "faq" },
  { href: "/blog", label: "blog" },
  { href: "/sitemap", label: "sitemap" },
  { href: "/contact", label: "contact" },
];

const privacyTOSLinks = [
  { href: "/privacy", label: "privacy policy" },
  { href: "/terms", label: "terms of service" },
];

export default function Footer() {
  const pathname = usePathname();
  return (
    <footer className="w-full h-8.5 bg-gray-900 text-white flex items-center justify-center">
      <div className="flex flex-col md:flex-row items-center justify-between w-full max-w-237.5 px-4">
        <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-4">
          {footerLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`p-1 rounded-xl ${pathname === link.href ? "bg-menu-selected-bg" : "transition-colors ease-in-out duration-300 hover:bg-menu-selected-bg"}`}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="flex space-x-4 mt-2 md:mt-0">
          {privacyTOSLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`p-1 rounded-xl ${pathname === link.href ? "bg-menu-selected-bg" : "transition-colors ease-in-out duration-300 hover:bg-menu-selected-bg"}`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </footer>
  );
}
