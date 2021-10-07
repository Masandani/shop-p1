// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import Products from '../Products/Products'

export default function Shop() {
  return (
    <div
      css={css`
        display: flex;
        height: screen;
      `}
    >
      <Products />
    </div>
  )
}
