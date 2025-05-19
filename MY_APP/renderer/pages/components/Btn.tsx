import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

export default function HomePage(btnName:string,target:string,style:string) {
  return (
    <React.Fragment>
        <Link href={target}>
            <div className={style}>
                <span>${btnName}</span>
            </div>
        </Link>
    </React.Fragment>
  )
}