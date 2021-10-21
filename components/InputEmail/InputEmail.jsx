// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import Input from '../Input/Input'

const InputEmail = ({ placeholder,handlelChangeEmail }) => (
  <div
    css={css`
      width: 100%;
    `}
  >
    <Input
     type="email"
      placeholder={placeholder}
      handlelChangeEmail={handlelChangeEmail}
      />
  </div>
)

export default InputEmail
