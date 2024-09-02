import React from 'react'
import { CheckCircle2 } from 'lucide-react'
export default function CardFeatures({features}) {
  return (
    <>
      <ul>
        {
          features.map((feature, index) => (
            <li key={index} className='mt-8 flex items-center'>
                <CheckCircle2/>
                <span className='ml-2'>{feature}</span>
            </li>
            ))
        }
      </ul>
    </>
  )
}
