import { CategoryInterface } from "@/types";
import axios from "axios";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/categories`;

export async function getCategoryById(id: string): Promise<CategoryInterface> {
  const response = await axios.get(`${URL}/${id}`);
  return response.data;
}

export default async function getCategories(): Promise<CategoryInterface[]> {
  const response = await axios(URL);

  const { data } = response;
  return data;
}
