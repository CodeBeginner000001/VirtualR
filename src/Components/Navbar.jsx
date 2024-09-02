import React,{useState} from 'react'
import {Menu,X} from "lucide-react"
import logo from "/src/assets/logo.png"
import {navItems} from "../constants/index.jsx"
import {Logo,Headings,Nav_Buttons} from "./Navbar-components/index.js"
export default function Navbar() {

    const [menu,setMenu] = useState(false);

    const toggleNavbar = ()=>{
        setMenu(!menu);
    }

  return (
    <nav className='sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80'>
        <div className='container px-4 mx-auto relative text-sm'>
            <div className='flex justify-between items-center'>
                <Logo logo={logo}/>
                <Headings navItems = {navItems} style="hidden lg:flex ml-14 space-x-12"/>
                <Nav_Buttons style="hidden lg:flex justify-center space-x-12 items-center"/>

                <div className='lg:hidden md:flex flex-col justify-end'>
                    <button onClick={toggleNavbar}>
                        {menu?<X/>:<Menu/>}
                    </button>
                </div>
            </div>
            {
                menu && 
                (
                    <div className="fixed right-0 z-20 bg-neutral-900 w-full p-32 flex flex-col justify-center items-center lg:hidden">
                        <Headings navItems = {navItems} li_style="py-4" style="text-center"/>
                        <Nav_Buttons style="flex space-x-3 sm:space-x-6 mt-4 "/>
                    </div>
                )
            }
        </div>
    </nav>
  )
}
