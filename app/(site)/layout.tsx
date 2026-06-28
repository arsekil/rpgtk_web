import type { Metadata } from "next";
import Header from "../_components/Header/Header";
import localFont from "next/font/local";

const Verdana = localFont({
  src: [
    {
      path: "../_fonts/Verdana/Verdana.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../_fonts/Verdana/Verdana-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "RPG Toolkit",
  description: "RPG Toolkit Homepage",
  icons: {
    icon: "/icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div
      id="home"
      className={` ${Verdana.className} bg-[url('/tk/core/bkg.png')] bg-repeat min-h-screen flex items-center justify-center`}
    >
      <div
        id="container"
        className="relative z-2 w-237.5 h-200 my-0 mx-auto mt-2.5 bg-black flex flex-col items-center justify-items-start"
      >
        <Header />
        {children}
      </div>
    </div>
  );
}
