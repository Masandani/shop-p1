// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx, useTheme } from '@emotion/react'

const Input = ({
  type = 'text',
  placeholder,
  handleChangeSubject,
  inputSubRef,
  handlelChangeEmail,
  handleChangeTextArea,
}) => {
  const theme = useTheme()
  return (
    <div
      css={css`
        width: 100%;
      `}
    >
      {type === 'text' && (
        <input
          css={css`
            width: 100%;
            border: none;
            background-color: ${theme.colors.backgrounColorPrimery};
            border-bottom: 1px solid ${theme.colors.inputBorderColor};
            padding-top: ${theme.spaces[4]};
            opacity: 50%;
            outline: none;
            display: inline-block;
            position: reletive;
          `}
          type={type}
          placeholder={placeholder}
          onChange={handleChangeSubject}
          ref={inputSubRef}
        />
      )}

      {type === 'email' && (
        <input
          css={css`
            width: 100%;
            border: none;
            background-color: ${theme.colors.backgrounColorPrimery};
            border-bottom: 1px solid ${theme.colors.inputBorderColor};
            padding-top: ${theme.spaces[4]};
            opacity: 50%;
            outline: none;
            display: inline-block;
            position: reletive;
          `}
          type={type}
          placeholder={placeholder}
          onChange={handlelChangeEmail}
        />
      )}
      {type === 'textarea' && (
        <input
          css={css`
            width: 100%;
            border: none;
            background-color: ${theme.colors.backgrounColorPrimery};
            border-bottom: 1px solid ${theme.colors.inputBorderColor};
            padding-top: ${theme.spaces[4]};
            opacity: 50%;
            outline: none;
            display: inline-block;
            position: reletive;
          `}
          type={type}
          placeholder={placeholder}
          onChange={handleChangeTextArea}
        />
      )}
    </div>
  )
}

export default Input
