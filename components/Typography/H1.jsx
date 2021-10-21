// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx, useTheme } from '@emotion/react'

const H1 = ({ children, align = 'right' }) => {
  const theme = useTheme()
  return (
    <h1
      css={css`
        text-align: ${align};
        margin: 2.75rem 0 1.05rem;
        font-weight: bold;
        line-height: ${theme.typography.h1.lineHeight};
        margin-top: 0;
        font-size: ${theme.typography.h1.fontSize}rem;
        @media only screen and (max-width: 768px) {
          text-align: center;
          font-size: 2rem;
        }
      `}
    >
      {children}
    </h1>
  )
}

export default H1
