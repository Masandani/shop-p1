// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import { useContext } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { RiAddFill } from 'react-icons/ri'
import Button from '../Button/Button'
import CartContext from '../../context/CartContext'

const ProductItem = ({ data }) => {
  const { carts, dispatchCart } = useContext(CartContext)

  const added = carts.includes(data.id)

  const handleAdd = () => {
    if (added) {
      dispatchCart({
        type: 'REMOVE_FROM_CART',
        id: data.id,
      })
    } else {
      dispatchCart({
        type: 'ADD_TO_CART',
        id: data.id,
      })
    }
  }

  return (
    <li
      css={css`
        display: flex;
        justify-content: center;
        flex-direction: column;
        list-style-type: none;

        padding: 30px;
        margin: 20px;
      `}
    >
      <Link href={`/products/${data.id}`}>
        <Image
          css={css`
            cursor: pointer;
            @media only screen and (max-width: 768px) {
              max-width: 100px;
            }
          `}
          src={`/assets/${data.image}`}
          alt="close"
          width={400}
          height={400}
        />
      </Link>
      <Link href={`/products/${data.id}`}>
        <h3
          css={css`
            cursor: pointer;
          `}
        >
          {data.name}
        </h3>
      </Link>

      <span>{data.price}</span>
      <Button
        css={css`
          width: 225px;
          font-size: 16px;

          @media only screen and (max-width: 768px) {
            width: 100px;
            height: 50px;
          }
        `}
        handleClick={handleAdd}
        type="button"
      >
        {added ? (
          <div>Rimove from Cart</div>
        ) : (
          <div>
            <RiAddFill
              css={css`
                font-size: 30px;
                @media only screen and (min-width: 768px) {
                  display: none;
                }
              `}
            />{' '}
            <div
              css={css`
                @media only screen and (max-width: 768px) {
                  display: none;
                }
              `}
            >
              Add to Cart
            </div>
          </div>
        )}
      </Button>
    </li>
  )
}
export default ProductItem
