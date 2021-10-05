import React from 'react'
import { useRouter } from 'next/router'

function ProductDetails() {
  const router = useRouter()
  const { productId } = router.query

  return (
    <div>
      <h1>Detail about product {productId} </h1>
    </div>
  )
}

export default ProductDetails
