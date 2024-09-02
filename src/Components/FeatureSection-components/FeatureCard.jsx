import React from 'react'
import CardIcon from './CardIcon.jsx'
import CardText from "./CardText.jsx"
import CardPara from './CardPara.jsx'
export default function FeatureCard({item,index}) {
  return (
    <>
      <div className="w-full sm:w-1/2 lg:w-1/3" key={index}>
            <div className='flex'>
                <CardIcon icon={item.icon}/>
                <div>
                    <CardText text={item.text}/>
                    <CardPara para={item.description}/>
                </div>
            </div>
      </div>
    </>
  )
}
