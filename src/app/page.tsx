import Billboard from "@/components/billboard";
import ProductList from "@/components/product-list";
import Container from "@/components/ui/container";
import { getBillboardById } from "@/lib/actions/get-billboards";
import { getProducts } from "@/lib/actions/get-products";

export default async function Home() {
  const products = await getProducts({ isFeatured: true });

  const billboard = await getBillboardById("64ac61c48ac8b193f369aab2");
  return (
    <Container>
      <div className="space-y-10 pb-10">
        <Billboard data={billboard} />
        <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
          <ProductList title="Featured Products" items={products} />
        </div>
      </div>
    </Container>
  );
}
