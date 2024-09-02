import React from 'react'

export default function CardCompany({company}) {
  return (
    <>
      <span className='text-sm font-normal italic text-neutral-600'>
        {company}
      </span>  
    </>
  )
}
