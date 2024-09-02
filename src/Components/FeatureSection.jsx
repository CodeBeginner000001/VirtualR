import React from 'react'
import {features} from "../constants/index.jsx"
import { FeatureHeading,FeatureBody} from './FeatureSection-components/index.js'
export default function FeatureSection({style}) {
  return (
    <div className={style}>
        <div className='relative mt-20 border-b border-neutral-800 min-h-[600px]'>
            <FeatureHeading style="text-center"/>
            <FeatureBody style="flex flex-wrap mt-10 lg:mt-20" features={features}/>
        </div>
    </div>
  )
}
