import React from 'react'

export default function CardTitle({title}) {
  return (
    <>
      <p className='text-4xl mb-8'>
            {title}
            {title === "Pro" && (
                <span className='bg-gradient-to-r from-orange-500 to-orange-800 bg-clip-text text-transparent text-xl mb-4 ml-2'>
                    (Most Popular)
                </span>
            )}
      </p>
    </>
  )
}
