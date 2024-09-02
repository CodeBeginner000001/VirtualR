import React from 'react'
import Video from './Video.jsx'

export default function HeroSectionVideos({video1,video2}) {
  return (
    <>
      <div className='flex mt-4 justify-center'>
          <Video video={video1}/>
          <Video video={video2}/>
      </div>
    </>
  )
}
