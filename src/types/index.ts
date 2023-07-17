export interface BillboardInterface {
  id: string;
  label: string;
  imageUrl: string;
}

export interface CategoryInterface {
  id: string;
  name: string;
  billboard: BillboardInterface;
}

export interface ProductInterface {
  id: string;
  category: CategoryInterface;
  name: string;
  price: string;
  isFeatured: boolean;
  size: SizeInterface;
  color: ColorInterface;
  images: ImageInterface[];
}

export interface SizeInterface {
  id: string;
  name: string;
  value: string;
}

export interface ColorInterface {
  id: string;
  name: string;
  value: string;
}

export interface ImageInterface {
  id: string;
  url: string;
}
