import Gallery from "@/components/gallery";
import ProductInfo from "@/components/product-info";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";
import { getProductById, getProducts } from "@/lib/actions/get-products";
import { ProductInterface } from "@/types";
import { Metadata, NextPage } from "next";

export async function generateMetadata({
  params,
}: {
  params: { productId: string };
}): Promise<Metadata> {
  const product = await getProductById(params.productId);
  return {
    title: `Product - ${product.name}`,
  };
}

export default async function ProductPage({
  params,
}: {
  params: { productId: string };
}) {
  const product: ProductInterface = await getProductById(params.productId);

  const suggestedProducts = await getProducts({
    categoryId: product?.category?.id,
  });
  return (
    <div className="bg-white">
      <Container>
        <div className="px-4 py-10 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
            {/* Gallery  */}
            <Gallery images={product.images} />
            <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
              {/* Info  */}
              <ProductInfo data={product} />
            </div>
          </div>
          <hr className="my-10" />
          <ProductList title="Related Items" items={suggestedProducts} />
        </div>
      </Container>
    </div>
  );
}
