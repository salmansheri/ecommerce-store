import Billboard from "@/components/billboard";
import EmptyState from "@/components/empty-state";
import Filter from "@/components/filter";
import MobileFilters from "@/components/mobile-filters";
import ProductCard from "@/components/ui/card";
import Container from "@/components/ui/container";
import { getCategoryById } from "@/lib/actions/get-categories";
import getColors from "@/lib/actions/get-colors";
import { getProducts } from "@/lib/actions/get-products";
import getSizes from "@/lib/actions/get-sizes";
import { ColorInterface } from "@/types";
import { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: { categoryId: string };
}): Promise<Metadata> {
  const category = await getCategoryById(params.categoryId);

  return {
    title: `${category.name} - Category`,
  };
}

interface CategoryPageProps {
  params: {
    categoryId: string;
  };
  searchParams: {
    colorId: string;
    sizeId: string;
  };
}

export const revalidate = 0;

export default async function CategoryPage({
  params,
  searchParams,
}: CategoryPageProps) {
  const products = await getProducts({
    categoryId: params.categoryId,
    colorId: searchParams.colorId,
    sizeId: searchParams.sizeId,
  });

  const sizes = await getSizes();
  const colors = await getColors();
  const category = await getCategoryById(params.categoryId);

  return (
    <div className="bg-white">
      <Container>
        <Billboard data={category.billboard} />
        <div className="px-4 sm:px-6 lg:px-8 pb-24">
          <div className="lg:grid lg:grid-cols-5 lg:gap-x-8">
            {/* ADD MOBILE FILTER  */}
            <MobileFilters sizes={sizes} colors={colors} />
            <div className="hidden lg:block">
              <Filter valueKey="sizeId" name="Sizes" data={sizes} />
              <Filter valueKey="colorId" name="Colors" data={colors} />
            </div>
            <div className="mt-6 lg:col-span-4 lg:mt-0">
              {products.length === 0 && <EmptyState />}
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                {products.map((item) => (
                  <ProductCard item={item} key={item.id} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
