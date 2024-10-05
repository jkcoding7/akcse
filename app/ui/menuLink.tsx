"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface menuLinkProps {
  item: {
    title: string;
    path: string;
  };
}

export function MenuLink({ item }: menuLinkProps) {
  const pathName = usePathname();

  return (
    <div className="w-full">
      <Link href={item.path}>
        {pathName === item.path ? (
          <Button variant="ghost" className="text-red-600 hover:text-red-600">
            {item.title}
          </Button>
        ) : (
          <Button variant="ghost" className=" hover:text-red-600">
            {item.title}
          </Button>
        )}
      </Link>
    </div>
  );
}
