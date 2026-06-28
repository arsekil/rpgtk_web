import React from "react";

import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "RPG Toolkit > Games",
  description: "RPG Toolkit Games Page",
  icons: {
    icon: "/icon.png",
  },
};

export default function Page() {
  return <div className="text-white">Latest</div>;
}
