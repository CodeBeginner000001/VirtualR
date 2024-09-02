import React from 'react'
import { pricingOptions } from '../constants'
import { Heading,Body } from './PricingSection-components'
export default function PricingSection({style}) {
  return (
    <div className={style}>
      <div className="mt-20">
        <Heading/>
        <Body pricingOptions={pricingOptions}/>
      </div>
    </div>
  )
}
