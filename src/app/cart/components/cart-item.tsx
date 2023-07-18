"use client";

import { ProductInterface } from "@/types";
import React from "react";
import Image from "next/image";
import { X } from "lucide-react";
import { toast } from "react-hot-toast";
import IconButton from "@/components/ui/icon-button";
import Currency from "@/components/currency";
import useCart from "@/hooks/use-cart";

interface CartItemProps {
  data: ProductInterface;
}
const CartItem: React.FC<CartItemProps> = ({ data }) => {
  const cart = useCart();

  const onRemove = () => {
    cart.removeItem(data.id);
  };
  return (
    <div className="relative flex border-b">
      <div className="relative h-24 w-24 rounded-md overflow-hidden sm:h-48 sm:w-48">
        <Image
          fill
          src={data.images[0].url}
          alt={data.name}
          className="object-cover object-center"
        />
      </div>
      <div className=" ml-9 relative pr-9 sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
        <div className="flex justify-between">
          <p className="text-lg font-semibold text-black">{data.name}</p>
        </div>
        <div className="mt-1 flex text-sm space-x-5">
          <p className="text-gray-500">{data.color.name}</p>
          <p className="text-gray-500 border-l border-gray-200">
            {data.size.name}
          </p>
        </div>
        <Currency value={data.price} />
      </div>
      <div className="relative ml-4 flex flex-1 flex-row-reverse justify-between sm:ml-6">
        <div className="absolute z-10 right-0 top-0">
          <IconButton className="" icon={<X />} onClick={onRemove} />
        </div>
      </div>
    </div>
  );
};

export default CartItem;
