import React from 'react'

export default function CardIcon({icon}) {
  return (
    <div className="mx-6 h-10 w-10 p-2 bg-neutral-800 text-orange-700 justify-center items-center rounded-full">
      {icon}
    </div>
  )
}
