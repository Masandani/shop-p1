// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx, useTheme } from "@emotion/react";

const H2 = ({ children, align = "right" }) => {
  const theme = useTheme();
  return (
    <h2
      css={css`
        text-align: ${align};
        margin: 2.75rem 0 1.05rem;
        font-weight: bold;
        line-height: ${theme.typography.h2.lineHeight};
        margin-top: 0;
        font-size: ${theme.typography.h2.fontSize}rem;
      `}
    >
      {children}
    </h2>
  );
};

export default H2;
