// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import Image from 'next/image'
import cupImage from '../../public/assets/cup.png'
import bndImage from '../../public/assets/based.png'

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
            padding-right: 50px;
            display: flex;
            align-content: flex-start;
          }
        `}
      >
        <Image src={cupImage} alt="Bean" width={500} height={500} />
      </div>
      <div
        css={css`
          text-align: start;
          padding:100px;
          color: #554730;
          opacity: 60%;
          margin: 0;
          @media only screen and (max-width: 768px) {
            padding: 0;
            margin: 0 10px 0 10px;
          }
        `}
      >
        <h2
          css={css`
            text-align: start;
            font-family: 'Oswald', sans-serif;
            font-size: calc(2.5em + 1vw);
            letter-spacing: 1px;
            line-height: 1.5em;
            text-transform: uppercase;
            margin:0;
            @media only screen and (max-width: 768px) {
              text-align: center;
            }
          `}
        >
          Quality Coffee
        </h2>
        <h2
          css={css`
            font-family: 'Oswald', sans-serif;
            font-size: calc(2.5em + 1vw);
            letter-spacing: 1px;
            line-height: 1.5em;
            text-transform: uppercase;
            margin:0;
            @media only screen and (max-width: 768px) {
              text-align: center;
            }
          `}
        >
          From Bean
        </h2>
        <h2
          css={css`
            font-family: 'Oswald', sans-serif;
            font-size: calc(2.5em + 1vw);
            letter-spacing: 1px;
            line-height: 1.5em;
            text-transform: uppercase;
            margin:0;
            @media only screen and (max-width: 768px) {
              text-align: center;
            }
          `}
        >
          {' '}
          To Cup
        </h2>
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
