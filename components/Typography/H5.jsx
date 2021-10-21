// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx, useTheme } from '@emotion/react'

const H5 = ({ children, align = 'right' }) => {
  const theme = useTheme()
  return (
    <h5
      css={css`
        text-align: ${align};
        color: ${theme.colors.textColor};
        font-weight: ${theme.typography.h5.fontWeight};
        line-height: ${theme.typography.h5.lineHeight};
        font-size: ${theme.typography.h5.fontSize}rem;
      `}
    >
      {children}
    </h5>
  )
}

export default H5
