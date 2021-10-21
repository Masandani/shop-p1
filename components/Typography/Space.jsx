// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";

const Space = () => (
  <div
    css={css`
      width: 100%;
      height: 1em;
    `}
  />
);

export default Space;
