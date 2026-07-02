"use client";

import React from "react";

export default function Tidbit() {
  return (
    <footer>
      <div className="w-237.5 h-12 text-white flex flex-col items-center justify-center">
        <div className="text-xs">
          &copy; 2011-{new Date().getFullYear()} rpgtoolkit. All rights
          reserved.
        </div>
        <div className="text-xs">website by phil carty © 2011</div>
        <div className="text-xs">
          additional icons by matty andrews and dana brett harris
        </div>
      </div>
    </footer>
  );
}
