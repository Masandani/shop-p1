// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx, useTheme } from "@emotion/react";

const H4 = ({ children, align = "right" }) => {
  const theme = useTheme();
  return (
    <h4
      css={css`
        text-align: ${align};
        margin: 2.75rem 0 1.05rem;
        font-weight: ${theme.typography.h4.fontWeight};
        line-height: ${theme.typography.h4.lineHeight};
        margin-top: 0;
        font-size: ${theme.typography.h4.fontSize}rem;
      `}
    >
      {children}
    </h4>
  );
};

export default H4;
