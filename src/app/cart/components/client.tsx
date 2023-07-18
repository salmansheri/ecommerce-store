"use client";

import Container from "@/components/ui/container";
import useCart from "@/hooks/use-cart";
import { UseMounted } from "@/hooks/use-mouted";
import React from "react";
import CartItem from "./cart-item";
import Summary from "./summary";

const CartClient = () => {
  const isMounted = UseMounted();
  const cart = useCart();

  //   if (!isMounted) {
  //     return null;
  //   }

  return (
    <div>
      <Container>
        <div className="px-4 py-16 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-black">Shopping Cart</h1>
          <div className="mt-12 lg:grid lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-7">
              {cart.items.length === 0 ? (
                <p className="text-neutral-500">No Items In the Cart</p>
              ) : (
                <>
                  {cart.items.map((item) => (
                    <CartItem key={item.id} data={item} />
                  ))}
                </>
              )}
            </div>
            <Summary />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default CartClient;
