import React from 'react'
import { ProductType } from '../../utils'

type ProductCardType = {
  product : ProductType
}

const ProductCard:React.FC<ProductCardType> = ({product}) => {
  const {thumbnail, title} = product  
  return (
    <a className='mx-3 font-semibold cursor-pointer min-w-[12rem] max-w-[12rem] lg:min-w-[25rem] lg:max-w-[25rem]'>
        <img loading='lazy' src={thumbnail} className='h-[15rem] w-full object-cover' />
        <p>{title}</p>
    </a>
  )
}

export default ProductCard