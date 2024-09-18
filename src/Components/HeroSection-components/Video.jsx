import React from 'react'

export default function Video({video}) {
  return (
    <>
      <video src={video} autoPlay preload='auto' loop muted className='rounded-lg w-1/2 border border-orange-700 shadow-orange-400 mx-2 my-4' type="video/mp4">
            Your browser does not support the video tag.
      </video>
    </>
  )
}
