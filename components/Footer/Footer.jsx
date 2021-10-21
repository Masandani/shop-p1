// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import Image from 'next/image'
import logoF from '../../public/assets/logoF.png'
import coffeeRight from '../../public/assets/C.png'
import SocialMedia from '../SocialMedia/SocialMedia'

export default function Footer() {
  const backgroundColor = '#516365'
  return (
    <div
      css={css`
        width: 100%;
        height: 80px;

        background-color: ${backgroundColor};
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: fixed;
        bottom: 0;
      `}
    >
      <div
        css={css`
          display: flex;
          align-items: center;
          @media only screen and (max-width: 768px) {
            display: flex;
            justify-content: center;
            background-color: transparent;
          }
        `}
      >
        <SocialMedia />
      </div>
   
      <Image css={css``} src={logoF} alt="Bean" width={120} height={120} />

      
      <div
        css={css`
          padding-left: 15px;
          @media only screen and (max-width: 768px) {
            display: none;
          }
        `}
      >
        <Image
          css={css`
            opacity: 40%;
            background-color: transparent;
          `}
          src={coffeeRight}
          alt="Bean"
          width={250}
          height={70}
        />
      </div>
    </div>
  )
}
