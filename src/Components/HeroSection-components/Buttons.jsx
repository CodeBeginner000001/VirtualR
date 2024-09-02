import React from 'react'
import StartForFree_Button from './StartForFree_Button.jsx'
import Documentation from './Documentation.jsx'
export default function Buttons() {
  return (
    <>
      <div className='flex justify-center my-10 mx-10 flex-row'>
          <StartForFree_Button style="bg-gradient-to-r from-orange-500 to-orange-800 py-3 px-3 ml-8 text-nowrap rounded-md h-full w-full"/>
          <Documentation style = 'py-3 px-3 mx-3 rounded-md border h-full w-full'/>
      </div>
    </>
  )
}
