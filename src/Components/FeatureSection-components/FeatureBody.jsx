import React from 'react'
import FeatureCard from './FeatureCard.jsx'
export default function FeatureBody({style,features}) {
  return (
    <div className={style}>
      {    features.map((item,index)=>(
                <FeatureCard item={item} index={index}/>   
            ))
        }
    </div>
  )
}
