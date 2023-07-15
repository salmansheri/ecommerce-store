import { CategoryInterface } from "@/types";
import axios from "axios";

const URL = `http://localhost:3001/api/64a8637f2587d6674e757ba2/categories`;

export default async function getCategories(): Promise<CategoryInterface[]> {
  const response = await axios(URL);

  const { data } = response;
  return data;
}
