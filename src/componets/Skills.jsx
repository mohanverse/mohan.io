import React from 'react'
import {AiFillHtml5} from "react-icons/ai"
import {DiCss3} from "react-icons/di"
import {RiJavascriptFill} from "react-icons/ri"
import {SiTailwindcss} from "react-icons/si"
import {TbBrandReact} from "react-icons/tb"
import {AiFillGithub} from "react-icons/ai"

function Skills() {
  return (
    <>
    <div className='md:mt-[-100px] md:mb-[100px] space-y-6 md:space-y-20'>
        <h1 className='text-center text-4xl font-bold font-vidaloka text-[#d12065] '>Skills</h1>
       <div>
       <div className='flex justify-center text-[100px] md:space-x-[100px] mx-4'>
           <AiFillHtml5/>
           <DiCss3/>
           <RiJavascriptFill/>
           <SiTailwindcss/>
           <TbBrandReact/>
           <AiFillGithub/>
       </div>
       </div>
    </div>
    </>
  )
}

export default Skills