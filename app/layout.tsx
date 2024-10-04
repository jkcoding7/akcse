import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NextUIProvider } from "@nextui-org/react";
import "./globals.css";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AKCSE McGill",
  description: "AKCSE YG McGill Chapter",
};

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
            <Label>AKCSE McGill</Label>
          </div>
          <div className="flex m-auto">
            <Button variant="ghost">About</Button>
            <Button variant="ghost">Organization</Button>
            <Button variant="ghost">Activities</Button>
            <Button variant="ghost">Executives</Button>
            <Button variant="ghost">Projects</Button>
          </div>
          <div className=" mt-auto mb-auto mr-4">
            <Button variant="ghost">Contact Us</Button>
          </div>
        </nav>
        <div className="border-t w-full"></div>
        <NextUIProvider>
          <div>{children}</div>
        </NextUIProvider>
      </body>
    </html>
  );
}
