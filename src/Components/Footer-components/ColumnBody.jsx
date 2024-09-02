import React from 'react'
import ColumnText from './ColumnText.jsx'
export default function ColumnBody({Links}) {
  return (
    <>
      <ul className='space-y-2'>
            {  Links.map((link,index)=>(
                    <li key={index}>
                        <ColumnText href={link.href} text={link.text}/>
                    </li>
                ))
            }
        </ul>
    </>
  )
}
