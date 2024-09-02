import React from 'react'

export default function CardPrice({price}) {
  return (
    <>
      <p className='mb-8'>
            <span className='text-5xl mt-6 mr-1'>{price}</span>
            <span className='text-neutral-400 tracking-tight'>/Month</span>
      </p>
    </>
  )
}
