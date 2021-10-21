// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import Image from 'next/image'
import { H1, Paragraph } from '../index'
import AboutP from '../../public/assets/About.png'

export default function About() {
  const fontColor = '#554730'
  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        color: #554730;
        opacity: 70%;
        height: 100vh;
        padding: 25px;
        p {
          text-align: right;

          color: #666;
          line-height: 1.7em;

          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
      `}
    >
      <H1>درباره</H1>
      <Paragraph>
        ما علاقه زیادی به قهوه و طعم هایی که قهوه تخصصی می تواند ارائه دهد
        داریم. ما در جستجوی بهترین قهوه روی کره زمین ، از برخی از برجسته ترین
        تولیدکنندگان قهوه ، به سراسر جهان سفر می کنیم تا بتوانیم آن طعم ها را با
        شما به اشتراک بگذاریم و قهوه خوشمزه و قابل توجهی را بصورت پایدار در
        دسترس شما قرار دهیم.
      </Paragraph>
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
