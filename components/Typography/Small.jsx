// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx, useTheme } from '@emotion/react'

const Small = ({ children, align = 'right' }) => {
  const theme = useTheme()
  return (
    <p
      css={css`
        text-align: ${align};
        font-weight: ${theme.typography.small.fontWeight};
        line-height: ${theme.typography.small.lineHeight};
        margin-top: 0;
        font-size: ${theme.typography.small.fontSize}rem;
      `}
    >
      {children}
    </p>
  )
}

export default Small
