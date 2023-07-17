"use client";

import { ProductInterface } from "@/types";
import React from "react";
import EmptyState from "./empty-state";
import ProductCard from "./ui/card";

interface ProductListProps {
  title: string;
  items: ProductInterface[];
}

const ProductList: React.FC<ProductListProps> = ({ title, items }) => {
  return (
    <div className="space-y-4 ">
      <h3 className="font-bold text-3xl ">{title}</h3>
      {items.length === 0 ? (
        <EmptyState />
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {items.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ProductList;
