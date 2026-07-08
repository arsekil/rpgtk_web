"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useQuery } from "convex/react";
import { api } from "@/./convex/_generated/api";

//TODO: features functionality and navigation to articles

export default function Features() {
  const features = useQuery(api.queries.getFeatures, {}) || [];
  return (
    <React.Fragment>
      {features.length > 0 ? (
        <div id="home-features" className="flex w-full h-50">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="group relative flex-1 transition-all duration-500 ease-in-out hover:flex-3 overflow-hidden"
            >
              <Image
                src={feature.image}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
                alt={feature.title}
                loading="eager"
                className="object-cover transition-transform duration-500"
              />
              <div className="absolute bottom-0 left-0 right-0 top-40 max-h-16 h-12 bg-linear-to-t from-black from-90% via-black via-50% to-transparent opacity-80 transition-all duration-500 ease-in-out group-hover:h-16 group-hover:top-34 group-hover:opacity-95" />
              <div className="absolute bottom-0 left-0 right-0 p-2 text-white h-12 group-hover:h-16 transition-all duration-500 ease-in-out">
                <p className="text-medium font-bold h-8 flex items-end">
                  {feature.title}
                </p>
                <div className="h-12 hidden overflow-hidden group-hover:block">
                  <div className="flex flex-row justify-between items-center transform translate-y-5 group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                    <p className="text-xs opacity-80 group-hover:opacity-90 transition-opacity duration-300 delay-100">
                      {feature.description}
                    </p>
                    <Link
                      href=""
                      className="top-5 cursor-pointer pr-1 pl-1 rounded-full bg-menu-selected-bg font-bold hover:bg-[#6699cc]"
                      title="Read More"
                    >
                      {">"}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="flex flex-row items-center justify-center w-full h-50 text-white">
          No features yet.
        </div>
      )}
    </React.Fragment>
  );
}
