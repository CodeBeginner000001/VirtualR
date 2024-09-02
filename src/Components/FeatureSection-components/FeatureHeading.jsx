import React from 'react'
import FeatureText from "./FeatureText.jsx";
import HeadingText from "./HeadingText.jsx";
export default function FeatureHeading({style}) {
  return (
    <div className={style}>
         <FeatureText/>
         <HeadingText/>
    </div>
  )
}
