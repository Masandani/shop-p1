// this comment tells babel to convert jsx to calls to a function called jsx instead of React.createElement
/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from '@emotion/react'
import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import Button from '../../components/Button/Button'
import { validateEmail, validateSubject } from '../../utils/validation'
import grinderImage from '../../public/assets/grinder.png'
import {
  H2,
  Space,
  Small,
  InputText,
  InputEmail,
  InputTextArea,
  
} from '../../components/index'

export default function Contact() {
  const [subject, setSubject] = useState('')
  const [subjectSubmited, setSubjectSubmited] = useState(false)
  const [email, setEmail] = useState('')
  const [emailSubmited, setEmailSubmited] = useState(false)
  const [textArea, setTextArea] = useState('')
  const [textAreaSubmited, setTextAreaSubmited] = useState(false)
  const [errors, setErrors] = useState({})
  const [sent, setSent] = useState('')

  const handleChangeSubject = (event) => {
    if (validateSubject(event.target.value)) {
      setSubject(event.target.value)
      setSubjectSubmited(true)

      setErrors({
        ...errors,
        subject: null,
      })
    } else {
      setSubject('')
      setErrors({
        ...errors,
        subject: 'موضوع شما باید بیشتر از هشت حرف باشد',
      })
    }
  }

  const handlelChangeEmail = (event) => {
    if (validateEmail(event.target.value)) {
      setEmail(event.target.value)
      setEmailSubmited(true)

      setErrors({
        ...errors,
        email: null,
      })
    } else {
      setErrors({
        ...errors,
        email: 'ایمیل معتبر نیست',
      })
    }
  }
  const handleChangeTextArea = (event) => {
    setTextArea(event.target.value)
    setTextAreaSubmited(true)
  }
  const handleSubmit = (event) => {
    if (event) event.preventDefault()
    if (subjectSubmited && emailSubmited && textAreaSubmited) {
      console.log('subject', subject)
      console.log('email', email)
      console.log('textArea', textArea)
      setSent('از اینکه نظر یا سوال خود را به ما اعلام کردید سپاس گزاریم')
    } else {
      setSent('لطفا اطلاعات را صحیح وارد کنید')
    }
  }
  const fontColor = '#554730'

  const inputSubRef = useRef(null)
  useEffect(() => {
    inputSubRef.current.focus()
  }, [])

  return (
    <div
      css={css`
        display: flex;
        flex-direction: row;
        height: 120vh;
      `}
    >
      <div>
        <div
          css={css`
            display: flex;
            flex-direction: column;
            justify-self: center;
            margin-right: 40px;
            padding-right: 20px;
            color: #554730;
            opacity: 70%;
          `}
        >
          <Space />
          <Space />
          <Space />
          <Space />
          <H2> تماس با ما</H2>
          {/* new form */}
          <form onSubmit={handleSubmit}>
            <div
              css={css`
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                font-size: calc(1em + 0.4vw);
                letter-spacing: 1px;
                line-height: 1.5em;
                -webkit-font-smoothing: antialiased;
                -moz-osx-font-smoothing: grayscale;
                color: ${fontColor};
                padding: 20px 0;
                opacity: 70%;
                width: 19rem;
              `}
            >
              <label htmlFor="subject">موضوع</label>

              <InputText
                inputSubRef={inputSubRef}
                handleChangeSubject={handleChangeSubject}
                placeholder="Topic"
              />

              <div
                css={css`
                  color: red;
                  opacity: 40%;
                 
                `}
              >
                {' '}
                {errors.subject && (
                  <Small
                 
                  className="error">{errors.subject}</Small>
                )}
              </div>
            </div>
            <div
              css={css`
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                font-size: calc(1em + 0.4vw);
                letter-spacing: 1px;
                line-height: 1.5em;
                -webkit-font-smoothing: antialiased;
                -moz-osx-font-smoothing: grayscale;
                color: ${fontColor};
                padding: 20px 0;
                opacity: 70%;
              `}
            >
              <label htmlFor="email">ایمیل</label>
              <InputEmail
                handlelChangeEmail={handlelChangeEmail}
                type="email"
                placeholder="name@example.com"
              />
              <div
                css={css`
                color: red;
                opacity: 40%;
              `}
              >
                {' '}
                {errors.email && (
                  <Small
                  
                    className="error"
                  >
                    {errors.email}
                  </Small>
                )}
              </div>
            </div>
            <div
              css={css`
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                font-size: calc(1em + 0.4vw);
                letter-spacing: 1px;
                line-height: 1.5em;
                -webkit-font-smoothing: antialiased;
                -moz-osx-font-smoothing: grayscale;
                color: ${fontColor};
                padding: 20px 0;
                opacity: 70%;
              `}
            >
              <label htmlFor="textarea">در خواست شما</label>
              <InputTextArea
                handleChangeTextArea={handleChangeTextArea}
                type="textarea"
                placeholder="Messege"
              />
            </div>

            <div>
              <Button type="submit">ارسال</Button>
            </div>
          </form>
          <Small
            css={css`
              color: #554730;
              opacity: 40%;
              padding-top: 10px;
            `}
            className="sent"
          >
            {sent}
          </Small>
        </div>
      </div>
      <div
        css={css`
          opacity: 70%;
          margin-left: 90px;
          padding-right: 200px;
          margin-top: 85px;
          @media only screen and (max-width: 768px) {
            display: none;
          }
        `}
      >
        <Image src={grinderImage} alt="Bean" width={600} height={600} />
      </div>
    </div>
  )
}
