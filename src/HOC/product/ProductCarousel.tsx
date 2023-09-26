import React from "react";
import { useFetch } from "../../hooks";
import { ProductCard } from "../../components";
import { ProductType, ReturnedDataType } from "../../utils";

type ProductCarouselType = {
  category: string;
};

const ProductCarousel: React.FC<ProductCarouselType> = ({ category }) => {
  const [data] = useFetch<ReturnedDataType>(`/category/${category}`);

  return (
    <section className="relative mt-2 bg-white p-3  pb-5 ">
      <h1 className="text-2xl lg:text-3xl">Best in {category}</h1>
      <div className="flex space-x-4 overflow-hidden scrollbar-thumb-slate-400 scrollbar scrollbar-w-[5px] scrollbar-h-3 scrollbar-thumb-rounded-lg">
        {data
          ? data?.products?.map((product: ProductType) => {
              return (
                <>
                  <ProductCard product={product} />
                  <ProductCard product={product} />
                </>
              );
            })
          : null}
      </div>
    </section>
  );
};

export default ProductCarousel;
