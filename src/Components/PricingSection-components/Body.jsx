import React from 'react'
import Card from './Card.jsx'
export default function Body({pricingOptions}) {
  return (
    <>
      <div className='flex flex-wrap'>
          {
            pricingOptions.map((option, index) => (
              <div key={index} className='w-full sm:w-1/2 lg:w-1/3 p-2'>
                <Card option={option}/>
              </div>
            ))
          }
        </div>
    </>
  )
}
