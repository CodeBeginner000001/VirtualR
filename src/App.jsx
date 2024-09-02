import React from 'react'
import {Navbar,HeroSection,FeatureSection,WorkFlow,PricingSection,Testimonial,Footer} from "./Components"
export default function App() {
  return (
    <div>
     <Navbar/>
     <HeroSection style="max-w-7xl mx-auto pt-20 px-6"/>
     <FeatureSection style="max-w-7xl mx-auto pt-10 px-6"/>
     <WorkFlow style="max-w-7xl mx-auto pt-10 px-6"/>
     <PricingSection style="max-w-7xl mx-auto pt-10 px-6"/>
     <Testimonial style="max-w-7xl mx-auto pt-10 px-6"/>
     <Footer style="max-w-7xl mx-auto pt-10 px-6"/>
    </div>
  )
}
