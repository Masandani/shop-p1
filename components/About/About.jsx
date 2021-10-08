// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import Image from 'next/image'
import AboutP from '../../public/assets/About.png'

export default function About() {
  const fontColor = '#554730'
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        font-family: 'Oswald', sans-serif;
        font-size: 25px;
        letter-spacing: 1px;
        line-height: 1.5em;
        text-align: center;
        text-transform: uppercase;
        height: 100vh;
        p {
          text-align: left;
          padding: 0 25px;
          font-family: Open Sans, Arial, sans-serif;
          font-size: 14px;
          color: #666;
          line-height: 1.7em;
          font-weight: 500;
          opacity: 70%;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        h2 {
          display: flex;
          padding-left: 40px;
          opacity: 50%;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          color: ${fontColor};
        }
      `}
    >
      <h2>About</h2>
      <p>
        We’re obsessed with coffee and the range of flavours that speciality
        coffee can offer. We travel the world in search of the best coffee on
        the planet, from some of the most outstanding coffee producers so that
        we can share those flavours with you and make remarkable coffee more
        available, sustainable and consistently delicious.
      </p>
      <div
        css={css`
          display: flex;
          justify-content: end;
          opacity: 60%;
          padding-top: 100px;
        `}
      >
        <Image src={AboutP} alt="Bean" width={500} height={400} />
      </div>
    </div>
  )
}
