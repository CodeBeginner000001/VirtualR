import React from 'react'
import CardTitle from './CardTitle.jsx'
import CardPrice from './CardPrice.jsx'
import CardFeatures from './CardFeatures.jsx'
import CardButton from './CardButton.jsx'
export default function Card({option}) {
  return (
    <div className='p-10 border border-neutral-700 rounded-xl'>
        <CardTitle title={option.title} />
        <CardPrice price={option.price}/>
        <CardFeatures features={option.features}/>
        <CardButton />
    </div>
  )
}
