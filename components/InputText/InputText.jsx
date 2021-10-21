// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import Input from '../Input/Input'

const InputText = ({ placeholder, handleChangeSubject,inputSubRef }) => (
  <div
    css={css`
      width: 100%;
    `}
  >
    <Input
     type="text"
      placeholder={placeholder} 
      handleChangeSubject={handleChangeSubject}
      inputSubRef={inputSubRef}
     />
  </div>
)

export default InputText
