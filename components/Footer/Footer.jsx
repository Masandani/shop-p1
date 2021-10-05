// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import Image from 'next/image'
import bean2Image from '../../public/assets/mop.png'
import coffeeRight from '../../public/assets/Cafe-Right.png'

export default function Footer() {
  const backgroundColor = '#516365'
  return (
    <div
      css={css`
        position: sticky;
        width: 100%;
        height: 130px;
        top: 0;
        background-color: ${backgroundColor};
        display: flex;
        justify-content: space-between;
        
      `}
    >
       <Image src={coffeeRight} alt="Bean" width={300} height={80} />
      <Image src={bean2Image} alt="Bean" width={140} height={20} />
    </div>
  )
}
