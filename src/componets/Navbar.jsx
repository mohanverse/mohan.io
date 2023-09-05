import React from 'react'
import {AiFillLinkedin, AiFillGithub,AiFillTwitterCircle} from "react-icons/ai"


function Navbar() {
  return (
    <>
    <div className='flex justify-between py-8 lg:px-8 sticky top-0 bg-[#FFF8E8] text-black'>
        <div className='text-2xl md:text-4xl font-bold'>
           <p className='font-aclonica text-[#d12065]'>Mohan CHAUDHARY</p>
        </div>
        <div className='md:flex hidden justify-between text-sm font-bold space-x-10'>
            <a href="#Home">PROFILE</a>
            <a href="#skills">SKILLS</a>
            <a href="#projects">PROJECTS</a>
            <a href="">CERTIFICATE</a>
            <a href="#contact">CONTACT</a>
        </div>
        <div className='flex justify-between space-x-2 lg:space-x-4 text-3xl'>
            <a href="https://www.linkedin.com/in/mohanverse/"><AiFillLinkedin/></a>
            <a href="https://github.com/mohanverse"><AiFillGithub/></a>
            <a href="https://twitter.com/mohanverse"><AiFillTwitterCircle/></a>
        </div>
    </div>
    </>
  )
}

export default Navbar