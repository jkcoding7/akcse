import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NextUIProvider } from "@nextui-org/react";
import "./globals.css";
import Image from "next/image";
import { MenuLink } from "./ui/menuLink";
import Link from "next/link";
import { Label } from "@/components/ui/label";
import { SlSocialInstagram } from "react-icons/sl";
import MobileNav from "./ui/Home/MobileNavigation/MobileNav";

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
    title: "Events",
    path: "/events",
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
      <head>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/3.5.2/animate.min.css"></link>
      </head>
      <body className={`${inter.className} h-screen`}>
        <nav className="flex w-full justify-between p-3">
          <div>
            <Link href="/">
              <Image
                src="/logo.png"
                width={140}
                height={100}
                alt="AKCSE McGill"
              />
            </Link>
          </div>
          <div className="lg:flex hidden m-auto">
            {navMenuItems.map((item) => {
              return <MenuLink item={item} key={item.path} />;
            })}
          </div>
          <div className="lg:hidden">
            <MobileNav />
          </div>
        </nav>

        <div className="border-t"></div>
        <NextUIProvider>
          <div className="w-full h-full lg:h-[790px] xl:h-[810px]">
            {children}
          </div>
        </NextUIProvider>

        <footer className="flex w-full border-t-1">
          <div className="flex w-full">
            <div className="w-full h-full ml-1 justify-start">
              <Label className="text-xs font-light">
                © 2024 AKCSE McGill Executives. All rights reserved.
              </Label>
            </div>
            <div className="flex w-full h-full justify-end m-auto gap-1 mr-3">
              <div>
                <Label className="text-sm font-light">
                  AKCSE McGill Instagram
                </Label>
              </div>
              <a
                href="https://www.instagram.com/akcse_mcgill/"
                className="mt-auto mb-auto"
              >
                <SlSocialInstagram size={15} className="mt-auto mb-auto" />
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
