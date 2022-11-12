/** @jsxImportSource react */
import React,{ useState} from 'react'

import { qwikify$ } from '@builder.io/qwik-react'

export function Testing(){
  const [st,setSt]=useState(0)
  return(
    <>
    <button onClick={setSt(1)}>Click Me</button>
    <div>{st}</div>
    </>
  )
  
}

export default qwikify$(Testing);