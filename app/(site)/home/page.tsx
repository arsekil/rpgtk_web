import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import Features from "./Features";
import Content from "./Content";

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
        className="w-full h-9 bg-menu-selected-bg flex flex-row"
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
        className="absolute right-1.5 top-38.25 w-80.5 h-19.5 flex justify-center items-center"
      >
        {/*TODO: add RPG Toolkit version4(5) logo here*/}
        <Image
          src="/tk/rpgtoolkit.png"
          alt="RPG Toolkit Logo"
          width={322}
          height={78}
          priority
        />
        {/* <video
          width={322}
          height={78}
          autoPlay
          loop
          playsInline
          muted
          className="rounded-lg"
        >
          <source src={"/tk/rpgtoolkit_animated.mp4"} type="video/mp4" />
        </video> */}
      </div>
      <Features />
      <Content />
    </div>
  );
}
