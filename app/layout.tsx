import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NextUIProvider } from "@nextui-org/react";
import "./globals.css";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { MenuLink } from "./ui/menuLink";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AKCSE McGill",
  description: "AKCSE YG McGill Chapter",
};

const navMenuItems = [
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Organization",
    path: "/organization",
  },
  {
    title: "Activities",
    path: "/activities",
  },
  {
    title: "Executives",
    path: "/executives",
  },
  {
    title: "Projects",
    path: "/projects",
  },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="w-full h-full flex justify-between p-3">
          <div>
            <Image
              src="/logo.png"
              width={140}
              height={100}
              alt="AKCSE McGill"
            />
          </div>
          <div className="flex m-auto">
            {navMenuItems.map((item) => {
              return <MenuLink item={item} key={item.path} />;
            })}
          </div>
          <div className=" mt-auto mb-auto mr-4">
            <Button variant="ghost">Contact Us</Button>
          </div>
        </nav>
        <div className="border-t w-full h-full"></div>
        <NextUIProvider>
          <div className="h-full">{children}</div>
        </NextUIProvider>
      </body>
    </html>
  );
}
