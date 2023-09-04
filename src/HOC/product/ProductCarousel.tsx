import React from 'react'
import { useFetch } from '../../hooks'
import { ProductCard } from '../../components'
import { ProductType, ReturnedDataType } from '../../utils'

type ProductCarouselType = {
    category : string
}

const ProductCarousel:React.FC<ProductCarouselType> = ({category}) => {
    const [data] = useFetch<ReturnedDataType>(`/category/${category}`)

  return (
    <section className="relative mt-2 mx-4 bg-white p-3 overflow-hidden w-[calc(100vw-2.75rem)] pb-5 space-y-4"> 
    <h1 className='text-3xl'>Best in {category}</h1>
    <div className="flex space-x-4">
    {data ? data?.products?.map((product:ProductType) => {
        return <ProductCard product={product} />
    }):null}
    </div>
    </section>
  )
}

export default ProductCarousel