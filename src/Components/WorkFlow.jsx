import React from 'react'
import codeImg from "../assets/code.jpg"
import { checklistItems } from '../constants'
import { Heading,Body } from './WorkFlow-components/index'
export default function WorkFlow({style}) {
  return (
    <div className={style}>
      <div className='mt-10'>
        <Heading/>
        <Body checklistItems={checklistItems} codeImg={codeImg}/>
      </div>
    </div>
  )
}
