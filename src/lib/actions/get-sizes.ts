import { SizeInterface } from "@/types";
import axios from "axios";

const url = `${process.env.NEXT_PUBLIC_API_URL}/sizes`;

export default async function getSizes(): Promise<SizeInterface[]> {
  const response = await axios.get(url);

  return response.data;
}
