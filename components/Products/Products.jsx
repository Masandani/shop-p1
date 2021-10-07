// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import { useEffect, useState } from 'react'
import ProductItem from '../ProductItem/ProductItem'
import ProductsData from '../../data/PRODUCTS.json'

const Products = () => {
  const [data, setData] = useState([])

  useEffect(() => {
    setData(ProductsData)
  }, [])

  return (
   
      <ul
       css={css`
       display: flex;
       justufy-content: space-around;
       padding:0;
      
       @media only screen and (max-width: 768px) {
         flex-direction: column;
       }
       `}
      >
        {data.map((item) => (
          <ProductItem key={`ProductItem-${item.id}`} data={item} />
        ))}
      </ul>
    
  )
}

export default Products
