import React from 'react'

export default function CodeImg({codeImg}) {
  return (
    <>
      <div className='p-2 w-full lg:w-1/2'>
            <img src={codeImg} alt="Code" />
      </div>
    </>
  )
}
