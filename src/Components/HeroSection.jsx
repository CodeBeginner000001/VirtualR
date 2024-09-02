import React from 'react'
import{Heading,Text,Buttons,HeroSectionVideos} from "./HeroSection-components"
import video1 from "../assets/video1.mp4"
import video2 from "../assets/video2.mp4"
export default function HeroSection({style}) {
  return (
    <div className={style}>
      <div className='flex flex-col items-center mt-6 lg:mt-20'>
        <Heading/>
        <Text/>
        <Buttons/>
        <HeroSectionVideos video1={video1} video2={video2}/>
      </div>
    </div>
  )
}
