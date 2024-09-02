import React from 'react'

export default function CardImage({image,user}) {
  return (
    <>
        <img className="w-12 h-12 mr-6 rounded-full border border-neutral-300" src={image} alt={user} />
      
    </>
  )
}
