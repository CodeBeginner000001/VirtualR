import React from 'react'
import { testimonials } from '../constants'
import {Heading,Body} from "./Testimonial-components"
export default function Testimonial({style}) {
  return (
    <div className={style}>
      <div className='mt-20 tracking-wide'>
        <Heading/>
        <Body testimonials={testimonials}/>
      </div>
    </div>
  )
}
