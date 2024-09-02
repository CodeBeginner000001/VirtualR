import React from 'react'
export default function Logo({logo}) {
  return (
    <>
      <div className='flex items-center'>
            <img src={logo} alt="logo" className='h-10 w-10 mr-2'/>
            <p className='text-xl tracking-tight'>VirtualR</p>
      </div>
    </>
  )
}
