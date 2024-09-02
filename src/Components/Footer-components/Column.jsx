import React from 'react'
import Heading from './ColumnHeading.jsx'
import ColumnBody from './ColumnBody.jsx'
export default function Column({Links,heading}) {
  return (
    <div>
        <Heading heading={heading}/>
        <ColumnBody Links={Links}/>
    </div>
  )
}
