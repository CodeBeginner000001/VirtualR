import React from 'react'

export default function ColumnText({href,text}) {
  return (
    <>
      <a href={href} className='text-neutral-600 hover:text-white'>{text}</a>
    </>
  )
}
