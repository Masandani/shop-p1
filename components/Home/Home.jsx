// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import Image from 'next/image'
import cupImage from '../../public/assets/cup.png'
import bndImage from '../../public/assets/based.png'
import { H1 } from '../index'

export default function Home() {
  return (
    <div
      css={css`
        height: 100vh;
        display: flex;
        flex-direction: row;
        align-items: center;
        padding-top: 20px;
        @media only screen and (max-width: 768px) {
          display: flex;
          justify-content: center;
          flex-direction: column;
          padding-top: 0;
          align-content: flex-start;
        }
      `}
    >
      <div
        css={css`
          display: flex;
          padding-left: 50px;
          opacity: 75%;
          @media only screen and (max-width: 768px) {
            margin-top: 40px;
            padding-right: 50px;
            display: flex;
            align-content: flex-start;
            max-width: 450px;
          }
        `}
      >
        <Image src={cupImage} alt="Bean" width={500} height={500} />
      </div>
      <div
        css={css`
          padding: 100px;
          color: #554730;
          opacity: 60%;
          margin: 0;
          @media only screen and (max-width: 768px) {
            padding: 0;
            margin: 0 10px 0 10px;
          }
        `}
      >
        <H1>قهوه با کیفیت</H1>
        <H1>از دانه</H1>
        <H1> تا فنجان</H1>
      </div>
      <div
        css={css`
          display: flex;
          padding-left: 5px;
          opacity: 50%;
          padding-top: 200px;
          @media only screen and (max-width: 768px) {
            padding-top: 40px;
            padding-left: 0;
            width: 50%;
          }
        `}
      >
        <Image src={bndImage} alt="Bean" width={250} height={130} />
      </div>
      <div />
    </div>
  )
}
