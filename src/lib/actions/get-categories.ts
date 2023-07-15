import { CategoryInterface } from "@/types";
import axios from "axios";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

export default async function getCategories(): Promise<CategoryInterface[]> {
  const response = await axios(URL);

  const { data } = response;
  return data;
}
