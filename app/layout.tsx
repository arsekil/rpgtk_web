import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import ConvexClientProvider from "./_components/ConvexClientProvider/ConvexClientProvider";
import localFont  from "next/font/local";
import "./globals.css";

const OpenSans = localFont({
  src: [
    {
      path: "./_fonts/Open_Sans/OpenSans-VariableFont_wdth,wght.ttf",
      weight: "400",
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
    <html lang="en" className={`${OpenSans.className}`}>
        <body>
        <ClerkProvider>
          <ConvexClientProvider>
            {children}
          </ConvexClientProvider>
        </ClerkProvider>
        </body>
      </html>
  );
}
