import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

export default function Btn(btnName:string,target:string,style:string,id:string = undefined) {
  if (!id) {
    return (
      <React.Fragment>
          <Link href={target}>
              <div className={style}>
                  <span>{btnName}</span>
              </div>
          </Link>
          
      </React.Fragment>
    )
  } else {
    return (
      <React.Fragment>
          <Link href={target}>
              <div className={style} id={id}>
                  <span>{btnName}</span>
              </div>
          </Link>
          
      </React.Fragment>
    )
  }
  
  
}