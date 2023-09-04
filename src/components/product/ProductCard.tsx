import React from 'react'
import { ProductType } from '../../utils'

type ProductCardType = {
  product : ProductType
}

const ProductCard:React.FC<ProductCardType> = ({product}) => {
  const {thumbnail, title} = product  
  return (
    <a className='mx-3 font-semibold cursor-pointer'>
        <img loading='lazy' src={thumbnail} className='h-[15rem] w-[15rem] object-cover' />
        <p>{title}</p>
    </a>
  )
}

export default ProductCard