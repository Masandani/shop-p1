// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import ProductsData from '../../data/PRODUCTS.json'
import { H2, H4, Small } from '../../components/index'

const ProductDetails = () => {
  const [data, setData] = useState([])

  const router = useRouter()
  const { productId } = router.query

  const Product = ProductsData.find((item) => item.id === productId)
  useEffect(() => {
    setData(Product)
  }, [data])

  return (
    <div
      css={css`
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: row;
        margin: 0 30px;
        @media only screen and (max-width: 768px) {
          flex-direction: column;
        }
      `}
    >
      <div>
        <Image
          css={css`
            margin: 1px 100px;
            display: flex;
            opacity: 80%;
          `}
          src={`/assets/${data.image}`}
          alt="close"
          width={550}
          height={550}
        />
      </div>

      <div
        css={css`
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          padding: 0 30px;
          opacity: 50%;
        `}
      >
        <H2>{data.name}</H2>
        <H4>مشخصات:</H4>
        <Small>خاستگاه: {data.region}</Small>
        <Small>فرآوری: {data.process}</Small>
        <Small>ارتفاع از سطح دریا: {data.altitude}</Small>
        <Small>زیرگونه: {data.varietal}</Small>
        <Small>طعم یادها: {data.tasting}</Small>
        <Small>قیمت: {data.price} تومان</Small>
      </div>
    </div>
  )
}

export default ProductDetails
