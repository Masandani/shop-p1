// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import ProductsData from '../../data/PRODUCTS.json'

const ProductDetails = () => {
  const [data, setData] = useState([])

  const router = useRouter()
  const { productId } = router.query

  const Product = ProductsData.find((item) => item.id === productId)
  useEffect(() => {
    setData(Product)
  }, [data])
  const fontColor = '#554730'

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
          width={650}
          height={650}
        />
      </div>

      <div
        css={css`
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          padding: 0 30px;
        `}
      >
        <h2
          css={css`
            display: flex;
            justify-self: start;
            font-family: 'Oswald', sans-serif;
            font-size: calc(1em + 1vw);
            letter-spacing: 1px;
            line-height: 1.5em;
            text-transform: uppercase;
            opacity: 50%;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            color: ${fontColor};
            cursor: pointer;
          `}
        >
          {data.name}
        </h2>
        <h4
          css={css`
            opacity: 60%;
            text-transform: uppercase;
            font-size: calc(0.5em + 1vw);
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          `}
        >
          Spec:
        </h4>
        <span
          css={css`
            opacity: 60%;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
          `}
        >
          Region: {data.region}
        </span>
        <span
        css={css`
        opacity: 60%;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      `}
        >Process: {data.process}</span>
        <span
        css={css`
        opacity: 60%;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      `}
        >Altitude: {data.altitude}</span>
        <span
        css={css`
        opacity: 60%;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      `}
        >Varietal: {data.varietal}</span>
        <span
        css={css`
        opacity: 60%;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
      `}
        >Tasting Note: {data.tasting}</span>
        <span
          css={css`
            font-family: 'Roboto', sans-serif;
            font-size: 18px;
            letter-spacing: 1px;
            font-weight: bold;
            opacity: 40%;
            padding-top: 30px;
          `}
        >
          Price: {data.price}
        </span>
      </div>
    </div>
  )
}

export default ProductDetails
