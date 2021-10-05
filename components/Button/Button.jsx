// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react'

const Button = ({ children, handleClick = () => {}, ...props }) => (
  // eslint-disable-next-line react/button-has-type
  <div>
    <button
      css={css`
        position: relative;
        display: inline-block;
        text-decoration: none;
        padding: 10px 30px;
        text-transform: uppercase;
        font-weight: 400;
        letter-spacing: 2px;
        color: #929489;
        font-size: 18px;
        font-family: 'Oswald', sans-serif;
        border: none;
        border-radius: 40px;
        cursor: pointer;
        width: 18rem;
        margin: 30px 0;
        box-shadow: -4px -4px 8px rgba(255, 255, 255, 1),
          -4px -4px 12px rgba(255, 255, 255, 0.5),
          inset 2px 2px 4px rgba(255, 255, 255, 0.1),
          2px 2px 8px rgba(0, 0, 0, 0.15);
        &:hover {
          box-shadow: inset -2px -2px 8px rgba(255, 255, 255, 1),
            inset -2px -2px 12px rgba(255, 255, 255, 0.5),
            inset 2px 2px 4px rgba(255, 255, 255, 0.1),
            inset 2px 2px 8px rgba(0, 0, 0, 0.15);
        }
      `}
      onClick={handleClick}
      className="button"
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...props}
    >
      {children}
    </button>
  </div>
)

export default Button
