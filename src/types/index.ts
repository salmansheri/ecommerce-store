export interface BillboardInterface {
  id: string;
  name: string;
  imageUrl: string;
}

export interface CategoryInterface {
  id: string;
  name: string;
  billboard: BillboardInterface;
}
