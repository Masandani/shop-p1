import React from 'react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import ProductsData from '../../data/PRODUCTS.json'

const ProductDetails = () => {
  const router = useRouter()
  const { productId } = router.query

  const Product = ProductsData.find((item) => item.id === productId)

  return (
    <div>
      <Image
        src={`/assets/${Product.image}`}
        alt="close"
        width={80}
        height={80}
      />
      <h2>{Product.name}</h2>
      <h1>Detail about product {productId} </h1>
    </div>
  )
}

export default ProductDetails
