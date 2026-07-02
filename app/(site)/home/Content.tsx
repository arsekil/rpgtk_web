"use client";

import React from "react";

// TODO: read content from convex with a query and display it here
export default function Content() {
  return (
    <div
      id="home-content"
      className="w-full h-80 flex flex-row flex-3 text-white bg-menu-selected-bg"
    >
      <div
        id="contributions"
        className="w-full h-full flex flex-row items-start justify-start"
      >
        <div className="w-12 h-full text-xl text-slate-400 font-bold rotate-270 relative -top-6 left-34">
          Contributions
        </div>
        {/* // TODO: */}
        <div className="w-full">content</div>
      </div>

      <div id="clear" className="border-l border-blurb-selected-bg"></div>

      <div
        id="poll"
        className="w-full h-full flex flex-row items-start justify-start"
      >
        <div className="w-12 h-full text-xl text-slate-400 font-bold rotate-270 relative -top-12 left-34">
          Community
        </div>
        {/* // TODO: */}
        <div className="w-full">content</div>
      </div>

      <div id="clear" className="border-l border-blurb-selected-bg"></div>

      <div
        id="activity"
        className="w-full h-full flex flex-row items-start justify-between"
      >
        <div className="w-12 h-full text-xl text-slate-400 font-bold rotate-270 relative -top-22 left-34">
          Activity
        </div>
        {/* // TODO: */}
        <div className="w-full">content</div>
      </div>
    </div>
  );
}
