import React from 'react'
import { ThemeProvider } from '@emotion/react'
import theme from '../config/theme'
import Layout from '../containers/Layout/Layout'

const MyApp = ({ Component, pageProps }) => (
  <>
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />;
      </Layout>
    </ThemeProvider>
  </>
)

export default MyApp

// setup emotion-theming (npm i emotion-theming)
