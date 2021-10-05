import React from 'react'
import Head from 'next/head'
import Home from '../components/Home/Home'

export default function Index() {
  return (
    <div>
      <Head>
        <title>Shop</title>
        <meta name="description" content="Generated by create next app" />
      </Head>
      <main>
        <Home />
      </main>
    </div>
  )
}
