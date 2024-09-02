import React from 'react'
export default function Headings({navItems,style,li_style}) {
  return (
    <>
      <ul className={style}>
                { navItems.map((item,index)=>(
                    <li key={index} className={li_style}>
                        <a href={item.href}>{item.label}</a>
                    </li>
                  ))
                }
        </ul>
    </>
  )
}
