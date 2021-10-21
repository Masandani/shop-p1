// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx, useTheme } from '@emotion/react'

const Paragraph = ({ children, align = 'right' }) => {
  const theme = useTheme()
  return (
    <p
      css={css`
        text-align: ${align};
        margin: 2.75rem 0 1.05rem;
        font-weight: ${theme.typography.paragraph.fontWeight};
        line-height: ${theme.typography.paragraph.lineHeight};
        margin-top: 0;
        font-size: ${theme.typography.paragraph.fontSize}rem;
        text-decoration: none;
      `}
    >
      {children}
    </p>
  )
}

export default Paragraph
