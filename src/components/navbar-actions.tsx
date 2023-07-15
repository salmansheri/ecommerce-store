"use client";

import React from "react";
import Button from "./ui/button";
import { ShoppingBag } from "lucide-react";
import { UseMounted } from "@/hooks/use-mouted";

const NavbarActions = () => {
  const isMounted = UseMounted();

  if (!isMounted) {
    return null;
  }

  return (
    <div className="ml-auto flex items-center gap-x-4">
      <Button className="flex items-center rounded-full bg-black px-4 py-2">
        <ShoppingBag size={20} color="white" />
        <span className="ml-2 text-sm font-medium text-medium">0</span>
      </Button>
    </div>
  );
};

export default NavbarActions;
