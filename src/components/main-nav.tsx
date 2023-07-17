"use client";
import { cn } from "@/lib/utils";
import { CategoryInterface } from "@/types";
import Link from "next/link";
import { notFound, usePathname } from "next/navigation";

import React from "react";

interface MainNavProps {
  data: CategoryInterface[];
}

const MainNav: React.FC<MainNavProps> = ({ data }) => {
  const pathname = usePathname();

  const routes = data?.map((route: any) => ({
    href: `/category/${route.id}`,
    label: route.name,
    active: pathname === `/category/${route.id}`,
  }));

  return (
    <nav className="mx-6 flex items-center space-x-4 lg:space-x-6">
      {routes?.map((route: any) => (
        <Link
          href={route.href}
          key={route.id}
          className={cn(
            `
                text-sm, font-medium hover:text-black 
            `,
            route.active ? "text-black" : "text-neutral-500",
          )}
        >
          {route.label}
        </Link>
      ))}
    </nav>
  );
};

export default MainNav;
