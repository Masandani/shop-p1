// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import { useState } from 'react'

import Link from 'next/link'
import Image from 'next/image'
import coffeeBean from '../../public/assets/coffee-bean.png'
import huButton from '../../public/assets/hu.png'
import closeButton from '../../public/assets/close.png'

export default function Navbar() {
  const hoverColor = '#516365'
  const [clickHu, setClickHu] = useState(false)

  const handleMenu = () => {
    if (clickHu === false) {
      setClickHu(true)
    } else {
      setClickHu(false)
    }
  }
  return (
    <div
      css={css`
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 80px;
        top: 0;
        font-family: 'Oswald', sans-serif;
        letter-spacing: 2px;
        text-transform: uppercase;
        color: #929489;

        @media only screen and (max-width: 768px) {
          display: block;
          width: 100%;
        }
      `}
    >
      <div
        css={css`
          display: flex;
          padding: 0 50px;
          align-items: center;
          @media only screen and (max-width: 768px) {
            display: none;
          }
        `}
      >
        <Image
          css={css`
            opacity: 70%;
          `}
          src={coffeeBean}
          alt="Bean"
          width={30}
          height={30}
        />{' '}
        <div
          css={css`
            display: flex;
            padding: 0 15px;
            transition: transform 250ms;
            &:hover {
              transform: scale(1.2);
              color: ${hoverColor};
            }
            @media only screen and (max-width: 768px) {
              display: none;
            }
          `}
        >
          <Link href="/">Mohammadreza-Bean</Link>
        </div>
      </div>
      <div
        css={css`
          display: flex;
          padding: 0 60px;
        `}
      >
        <div
          css={css`
            display: none;
            @media screen and (max-width: 768px) {
              display: flex;
              position: absolute;
              right: 0;
              top: 20px;
            }

            align-items: center;
            padding: 0 40px;
            transition: transform 250ms;
            &:hover {
              transform: scale(1.2);
              color: ${hoverColor};
            }
          `}
        >
          {!clickHu && (
            <button
              css={css`
                border: none;
                background-color: #cee0e1;
                cursor: pointer;
                margin-right: 10px;
                margin-top: 5px;
                transition: all 0.5s ease-in-out;
              `}
              type="button"
              onClick={handleMenu}
            >
              <Image
                css={css`
                  opacity: 70%;
                `}
                src={huButton}
                alt="Bean"
                width={30}
                height={30}
              />
            </button>
          )}
          {clickHu && (
            <button
              css={css`
                border: none;
                background-color: #cee0e1;
                cursor: pointer;
                margin-right: 10px;
                margin-top: 5px;
                transition: all 0.5s ease-in-out;
              `}
              type="button"
              onClick={handleMenu}
            >
              <Image
                css={css`
                  opacity: 70%;
                `}
                src={closeButton}
                alt="close"
                width={30}
                height={30}
              />
            </button>
          )}
        </div>
        <div
          css={css`
            display: flex;
            align-items: center;
            padding: 0 40px;
            transition: transform 250ms;
            &:hover {
              transform: scale(1.2);

              color: ${hoverColor};
            }
            @media only screen and (max-width: 768px) {
              display: none;
            }
          `}
        >
          <Link href="/products">Shop</Link>
        </div>
        <div
          css={css`
            display: flex;
            align-items: center;
            padding: 0 40px;
            transition: transform 250ms;
            &:hover {
              transform: scale(1.2);

              color: ${hoverColor};
            }
            @media only screen and (max-width: 768px) {
              display: none;
            }
          `}
        >
          <Link href="/contact">Contact</Link>
        </div>
        <div
          css={css`
            display: flex;
            align-items: center;
            padding: 0 40px;
            transition: transform 250ms;
            &:hover {
              transform: scale(1.2);

              color: ${hoverColor};
            }
            @media only screen and (max-width: 768px) {
              display: none;
            }
          `}
        >
          <Link href="/about">About</Link>
        </div>
      </div>
      {clickHu && (
        <div
          css={css`
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;
            width: 100%;
            margin-top: 80px;
            color: #929489;
            background-color: #5e7072;
            position: absolute;
            z-index: 10;
            transition: all 1s ease-out;

            a:focus {
              transition: all 1s ease-out;
              color: #333;
            }

            @media only screen and (min-width: 768px) {
              display: none;
            }
          `}
        >
          <span
            css={css`
              padding: 15px;
              border-bottom: 1px solid #929489;
              width: 100%;
              display: flex;
              justify-content: center;
            `}
          >
            {' '}
            <Link href="/">HOME</Link>
          </span>
          <span
            css={css`
              padding: 15px;
              border-bottom: 1px solid #929489;
              width: 100%;
              display: flex;
              justify-content: center;
            `}
          >
            {' '}
            <Link href="/products">SHOP</Link>
          </span>
          <span
            css={css`
              padding: 15px;
              border-bottom: 1px solid #929489;
              width: 100%;
              display: flex;
              justify-content: center;
            `}
          >
            {' '}
            <Link href="/contact">CONTACT</Link>
          </span>
          <span
            css={css`
              padding: 15px;
              width: 100%;
              display: flex;
              justify-content: center;
            `}
          >
            {' '}
            <Link href="/about">ABOUT</Link>
          </span>
        </div>
      )}
    </div>
  )
}
