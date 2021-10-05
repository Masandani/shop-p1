import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import ProductsData from '../../data/PRODUCTS.json'

const Products = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    setData(ProductsData)
  }, [])

  return (
    <>
      <ul>
        {data.map((dataItem) => (
          <li key={`ProductItem-${dataItem.id}`}>
            <Link href={`/products/${dataItem.id}`}>
              <h3>{dataItem.name}</h3>
            </Link>
            <Image
              src={`/assets/${dataItem.image}`}
              alt="close"
              width={30}
              height={30}
            />

            <span>{dataItem.price}</span>
          </li>
        ))}
      </ul>
    </>
  )
}

export default Products
