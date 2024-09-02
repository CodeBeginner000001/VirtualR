import React from 'react'
import Card from './Card.jsx'
export default function Body({testimonials}) {
  return (
    <>
      <div className='flex flex-wrap justify-center'>
            {testimonials.map((testimonial,index)=>(
                <div key={index} className='w-full sm:w-1/2 lg:w-1/3 px-4 py-2'>
                    <Card testimonial={testimonial}/>
                </div>
            ))}
        </div>
    </>
  )
}
