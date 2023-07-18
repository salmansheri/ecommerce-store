"use client";

import React from "react";
import Button from "./ui/button";
import { ShoppingBag } from "lucide-react";
import { UseMounted } from "@/hooks/use-mouted";
import useCart from "@/hooks/use-cart";
import { useRouter } from "next/navigation";

const NavbarActions = () => {
  const isMounted = UseMounted();
  const cart = useCart();
  const router = useRouter();

  if (!isMounted) {
    return null;
  }

  return (
    <div className="ml-auto flex items-center gap-x-4">
      <Button
        className="flex items-center rounded-full bg-black px-4 py-2"
        onClick={() => router.push("/cart")}
      >
        <ShoppingBag size={20} color="white" />
        <span className="ml-2 text-sm font-medium text-medium">
          {cart.items.length}
        </span>
      </Button>
    </div>
  );
};

export default NavbarActions;
