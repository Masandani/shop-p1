// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import { useContext } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { RiAddFill } from 'react-icons/ri'
import { MdOutlineRemoveShoppingCart } from 'react-icons/md'
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
  const fontColor = '#554730'
  return (
    <li
      css={css`
        display: flex;
        justify-content: center;
        flex-direction: column;
        list-style-type: none;
        padding: 30px;
        margin: 20px;
        }
      `}
    >
      <Link href={`/products/${data.id}`}>
        <Image
          css={css`
            cursor: pointer;
            opacity: 80%;
            transition: transform 250ms;

            &:hover {
              transform: scale(1.2);
            }

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
            font-family: 'Oswald', sans-serif;
            font-size: calc(0.5em + 0.9vw);
            letter-spacing: 1px;
            line-height: 1.5em;
            text-transform: uppercase;
            opacity: 50%;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            color: ${fontColor};
            cursor: pointer;
            display: flex;
            justify-content: center;
            @media only screen and (max-width: 768px) {
              font-size: calc(1em + 1vw);
            }
          `}
        >
          {data.name}
        </h3>
      </Link>

      <span
        css={css`
          font-family: 'Roboto', sans-serif;
          font-size: calc(0.3em + 0.8vw);
          letter-spacing: 1px;
          font-weight: bold;
          opacity: 40%;
          display: flex;
          justify-content: center;
          @media only screen and (max-width: 768px) {
            font-size: calc(0.7em + 1vw);
          }
        `}
      >
        Price: {data.price}
      </span>
      <div
        css={css`
          display: flex;
          justify-content: center;
        `}
      >
        <Button
          css={css`
            width: 225px;
            font-size: 16px;
            @media only screen and (max-width: 768px) {
              width: 100px;
              height: 50px;
              display: flex;
              justify-content: center;
            }
          `}
          handleClick={handleAdd}
          type="button"
        >
          {added ? (
            <div>
              {' '}
              <MdOutlineRemoveShoppingCart
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
                Rimove from Cart{' '}
              </div>
            </div>
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
      </div>
    </li>
  )
}
export default ProductItem
