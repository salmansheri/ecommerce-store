"use client";

import { ProductInterface } from "@/types";
import React from "react";
import Currency from "./currency";
import Button from "./ui/button";
import { ShoppingCart } from "lucide-react";

interface ProductInfoProps {
  data: ProductInterface;
}

const ProductInfo: React.FC<ProductInfoProps> = ({ data }) => {
  return (
    <div>
      <h1 className="text-3xl font-bold text-gray-900 ">{data.name}</h1>
      <div className="mt-3 items-end justify-between">
        <p className="text-2xl text-gray-900">
          <Currency value={data.price} />
        </p>
      </div>
      <hr className="my-4" />
      <div className="flex flex-col space-y-6">
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Size:</h3>
          <div>{data?.size?.value}</div>
        </div>
        <div className="flex items-center gap-x-4">
          <h3 className="font-semibold text-black">Color:</h3>
          <div
            className="h-6 w-6 rounded-full border border-gray-600"
            style={{ backgroundColor: data.color.value }}
          ></div>
        </div>
      </div>
      <div className="mt-10 flex items-center gap-x-3 ">
        <Button>
          Add To Cart
          <ShoppingCart />
        </Button>
      </div>
    </div>
  );
};

export default ProductInfo;
