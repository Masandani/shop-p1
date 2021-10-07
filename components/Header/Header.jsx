// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import { useContext } from 'react'
import { RiShoppingCartLine } from 'react-icons/ri'
import Navbar from '../Navbar/Navbar'
import CartContext from '../../context/CartContext'

const Header = () => {
  const { carts } = useContext(CartContext)
  const fontColor = '#554730'
  return (
    <div
      css={css`
        display: flex;
        flex-direction: row;
        align-items: center;
        border-bottom: 1px solid #929489;
      `}
    >
      <Navbar />
      <div
        css={css`
          display: flex;
          flex-direction: row;
          align-items: center;
          margin-right: 20px;
          margin-left: 20px;
         
        `}
      >
        <h4
          css={css`
            display: flex;
            font-family: 'Oswald', sans-serif;
            font-size: 18px;
            color: ${fontColor};
            opacity: 50%;
            margin-right: 5px;
          `}
        >
          {carts.length}
        </h4>
        <RiShoppingCartLine
          css={css`
            display: flex;
            font-size: 18px;
            color: ${fontColor};
            opacity: 50%;
         
          `}
        />
      </div>
    </div>
  )
}

export default Header
