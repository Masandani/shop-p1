// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import {
  RiInstagramLine,
  RiYoutubeLine,
  RiFacebookBoxLine,
} from 'react-icons/ri'

const SocialMedia = () => (
  <div
    css={css`
      padding: 0 30px;
      font-size: 40px;
      color: white;
      opacity: 70%;
    `}
  >
    <a
      css={css`
        padding: 0 5px;
      `}
      href="https://www.instagram.com/moh_r_mas/"
    >
      <RiInstagramLine />
    </a>
    <a
      css={css`
        padding: 0 5px;
      `}
      href="http://youtube.com/"
    >
      <RiYoutubeLine />
    </a>
    <a
      css={css`
        padding: 0 5px;
      `}
      href="http://www.facebook.com/"
    >
      <RiFacebookBoxLine />
    </a>
  </div>
)

export default SocialMedia
