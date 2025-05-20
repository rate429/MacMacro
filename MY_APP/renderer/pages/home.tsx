import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import Btn from './components/Btn'
export default function HomePage() {
  return (
    <React.Fragment>
      <Head>
        <title>Macro Recorder</title>
      </Head>
      {Btn('test','./next','test','a')}
    </React.Fragment>
  )
}
