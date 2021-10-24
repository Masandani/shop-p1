/* eslint-disable react/jsx-filename-extension */
import React from 'react'
import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import Reset from '../containers/Reset/Reset'

class Document extends NextDocument {
  render() {
    return (
      <Html>
        <Head />
        <body>
          <Main />
          <Reset />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default Document
