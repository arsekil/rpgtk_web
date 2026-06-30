"use client";

import React from "react";
import Image from "next/image";

const features = [
  {
    id: 1,
    title: "Visual Scripting",
    description:
      "Create complex game logic without coding using our intuitive node-based system",
    image: "https://picsum.photos/seed/1/402/195",
  },
  {
    id: 2,
    title: "Real-Time Preview",
    description:
      "See your changes instantly as you build with live game preview",
    image: "https://picsum.photos/seed/2/402/195",
  },
  {
    id: 3,
    title: "Asset Management",
    description:
      "Organize and edit all your game assets in one powerful workspace",
    image: "https://picsum.photos/seed/3/402/195",
  },
];

export default function Features() {
  return (
    <div className="flex w-full h-50">
      {features.map((feature) => (
        <div
          key={feature.id}
          className="group relative flex-1 transition-all duration-500 ease-in-out hover:flex-3 overflow-hidden cursor-pointer"
        >
          <Image
            src={feature.image}
            fill
            alt={feature.title}
            loading="eager"
            className="object-cover transition-transform duration-500"
          />
          <div className="absolute bottom-0 left-0 right-0 top-34 h-16 bg-linear-to-t from-black from-90% via-black via-50% to-transparent opacity-80 transition-opacity duration-500 group-hover:opacity-95" />
          <div className="absolute bottom-0 left-0 right-0 p-2 text-white h-16">
            <p className="text-medium font-bold h-8 flex items-end">
              {feature.title}
            </p>
            <div className="h-12 hidden overflow-hidden group-hover:block">
              <div className="transform translate-y-5 group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
                <p className="text-xs opacity-80 group-hover:opacity-90 transition-opacity duration-300 delay-100 line-clamp-1">
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
