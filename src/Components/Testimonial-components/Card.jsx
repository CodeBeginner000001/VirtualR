import React from 'react'
import CardPara from './CardPara.jsx'
import CardImage from './CardImage.jsx'
import CardUser from './CardUser.jsx'
import CardCompany from './CardCompany.jsx'
export default function Card({testimonial}) {
  return (
    <>
      <div className='bg-neutral rounded-md p-6 text-md border border-neutral-800 font-thin'>
        <CardPara text={testimonial.text}/>
        <div className='flex mt-8 items-start'>
            <CardImage image={testimonial.image} user={testimonial.user}/>
            <div>
                <CardUser user={testimonial.user}/>   
                <CardCompany company={testimonial.company}/>
            </div>
        </div>
      </div>
    </>
  )
}
