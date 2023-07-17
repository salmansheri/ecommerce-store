import { ProductInterface } from "@/types";
import axios from "axios";
import qs from "query-string";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/products`;

interface QueryInterface {
  categoryId?: string;
  colorId?: string;
  sizeId?: string;
  isFeatured?: boolean;
}

export async function getProducts(
  query: QueryInterface,
): Promise<ProductInterface[]> {
  const url = qs.stringifyUrl({
    url: URL,
    query: {
      colorId: query.colorId,
      sizeId: query.sizeId,
      categoryId: query.categoryId,
      isFeatured: query.isFeatured,
    },
  });
  const response = await axios.get(url);

  return response.data;
}

export async function getProductById(id: string): Promise<ProductInterface> {
  const response = await axios.get(`${URL}/${id}`);

  return response.data;
}
