import { ColorInterface } from "@/types";
import { url } from "./url";
import axios from "axios";

export default async function getColors(): Promise<ColorInterface[]> {
  const response = await axios.get(`${url}/colors`);

  return response.data;
}
