"use client";

import { ProductInterface } from "@/types";
import Image from "next/image";
import React from "react";
import IconButton from "./icon-button";
import { Expand, ShoppingCart } from "lucide-react";
import Currency from "../currency";
import { useRouter } from "next/navigation";

interface ProductCardProps {
  item: ProductInterface;
}

const ProductCard: React.FC<ProductCardProps> = ({ item }) => {
  const router = useRouter();
  const handleClick = () => {
    router.push(`/products/${item?.id}`);
  };
  return (
    <div
      onClick={handleClick}
      className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4 "
    >
      {/* Images and Actions  */}
      <div className="aspect-square rounded-xl bg-gray-100 relative">
        <Image
          alt={item.name}
          // @ts-ignore
          src={item?.images?.[0]?.url}
          fill
          className="aspect-square object-cover rounded-md"
        />
        <div className="opacity-0 group-hover:opacity-100 transition absolute w-full px-6 bottom-5">
          <div className="flex gap-x-6 justify-center">
            <IconButton icon={<Expand size={20} className="text-gray-600" />} />
            <IconButton
              icon={<ShoppingCart size={20} className="text-gray-600" />}
            />
          </div>
        </div>
      </div>
      {/* description  */}
      <div>
        <p className="font-semibold text-lg">{item.name}</p>
        <p className="text-sm text-gray-500">{item.category.name}</p>
      </div>
      {/* Price  */}
      <div className="flex items-center justify-between">
        <Currency value={item?.price} />
      </div>
    </div>
  );
};

export default ProductCard;