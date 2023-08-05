import React, {useState} from 'react'
import {AiFillLinkedin, AiFillGithub,AiFillTwitterCircle,AiFillInstagram} from "react-icons/ai"
import myresume from './mohanverseresume.png'


function Navbar() {
  return (
    <>
    <div className='sticky bg-white top-0 '>
    <div className='flex justify-between py-10 px-10'>
        <div className='text-xl md:text-4xl font-bold'>
           <p className='font-aclonica text-[#d12065]'>Mohan CHAUDHARY</p>
        </div>
        <div className='md:flex hidden justify-between text-[#576060] text-sm font-bold space-x-10'>
            <a href="#Home">PROFILE</a>
            <a href={myresume} >RESUME</a>
            <a href="#skills">SKILLS</a>
            <a href="">CERTIFICATE</a>
            <a href="#contact">CONTACT</a>
        </div>
        <div className='flex justify-between space-x-4 text-3xl'>
            <AiFillLinkedin/>
            <AiFillGithub/>
            <AiFillTwitterCircle/>
            <AiFillInstagram/>

        </div>
    </div>
    </div>
    </>
  )
}

export default Navbar