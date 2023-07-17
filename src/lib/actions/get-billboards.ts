import { BillboardInterface } from "@/types";
import axios from "axios";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;

export async function getBillboardById(
  id: string,
): Promise<BillboardInterface> {
  const response = await axios.get(`${URL}/${id}`);

  return response.data;
}
