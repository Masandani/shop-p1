import React, { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { PROJECT_URL } from '../../configs/general'
import ProductsData from '../../data/PRODUCTS.json'

const ProductItem = () => {
  const productItemRef = useRef(null)
  const [data, setData] = useState([{}, {}, {}, {}])
  useEffect(() => {
    setData(ProductsData)
    productItemRef.current.classList.add('visible')
  }, [])

  return (
    <>
      <li ref={productItemRef}>
        <Link href={`/product/${data.id}`}>
          <h3>{data.name}</h3>
          <Image
            src={`${PROJECT_URL}/assets/${data.image}`}
            alt="close"
            width={30}
            height={30}
          />
        </Link>
        <span>{data.price}</span>
      </li>
    </>
  )
}
export default ProductItem
