import Head from 'next/head'
import React from 'react'
import Header from '../header/Header'

// import st from '.MainContainer.module.scss'

function MainContainer({ children }) {
  return (
    <>
      <Head>
        <title>Охрана труда</title>
        <link rel="preconnect" href="https://fonts.googleapis.com"></link>
        <link rel="preconnect" href="https://fonts.gstatic.com"></link>
        <link href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;700&display=swap" rel="stylesheet"></link>
      </Head>
      <Header />
      {children}
    </>
  )
}

export default MainContainer