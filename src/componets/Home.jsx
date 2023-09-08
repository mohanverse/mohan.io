import React from 'react'
import myimg1 from './ce1ce4a8-aafa-4a84-a5be-bb9e7361ff68-removebg-preview.png'
import Navbar from './Navbar'
import Contact from './Contact'

import {AiFillLinkedin, AiFillGithub,AiFillTwitterCircle,AiFillInstagram} from "react-icons/ai"
import Skills from './Skills'


function Home() {
  return (
    <>
     <div className='bg-[#191516] text-[#FFF8E8] mx-2 md:mx-10 lg:mx-20'>
        <Navbar/>
        <div className=''>
           <div id='Home' className='grid xl:flex divide-x-2 justify-center space-x-4'>
                <div className='flex justify-center'>
                    <img className='h-[500px] md:h-[700px] ' src={myimg1} alt="" />
                </div>
                <div className='lg:w-[800px] text-2xl md:text-4xl font-semibold my-10 md:my-60 md:text-start p-4 color-white space-y-8 '>
                    <h1 className='bg-[#d12065] text-white p-2 font-aclonica w-1/2 text-center'>ABOUT ME</h1>
                    <h1 className=''>Hello, I am <span className='bg-[#d12065] text-white p-2 font-aclonica'>Mohan Chaudhary</span> Computer Science & Engineering Student </h1>
                    <p className='text-[#576060] font-light text-xl' > I am a driven, hard-working individual who is studying Bachelor of computer science. at<em className='text-[#d12065] font-semibold'> Radharaman Engeering college </em>Bhopal Madhya Pradesh, 
                    <em className='text-[#d12065] font-semibold'> Full Stack Development  </em> is something I am very passionate about and look forward to furthering my education and experience in the field.</p>

                    <p className='text-xl md:text-2xl' >I am Currently <em className='bg-[#d12065] text-white p-2 font-aclonica'>Frontend Developer intern</em> in the Fuelcab india and working as a intern </p>
                </div>
           </div>
            
           {/* Skills section */}
           <Skills/>

           {/* Eduction */}
           <div className='text-center text-4xl font-bold font-vidaloka text-[#d12065]'>
              <h1 >EDUCATION</h1>
           </div>
           <div className='divide-x-2' >
            <div className='grid mt-20 mx-4 md:mx-40 font-vidaloka gap-10 '>
               <div className='gap-8'>
                   <div className='flex justify-between bg-[#FFF8E8] text-[#191516] font-bold rounded-md' >
                       <h1 className='text-2xl text-[#191516]'>Matriculation</h1>
                       <h1 className='text-2xl text-[#191516]'>(2018 – 2019)</h1>
                   </div>
                   <p className='text-2xl'>High School Khirhar Madhubani  Bihar</p>
                   <p className='text-2xl'>Marks:- 63.20%</p>
               </div>
               <div className='gap-8'>
                   <div className='flex justify-between bg-[#FFF8E8] text-[#191516] font-bold rounded-md'>
                       <h1 className='text-2xl'>Intermediate</h1>
                       <h1 className='text-2xl md:text-2xl'>(2019  – 2021)</h1>
                   </div>
                   <p className='text-2xl'>C.P.P. College, Hisar, Bourhar, Madhubani Bihar</p>
                   <p className='text-2xl'>Category- PCM</p>
                   <p className='text-2xl'>Marks:- 63.20%</p>
               </div>
               <div className='gap-8'>
                   <div className='flex justify-between bg-[#FFF8E8] font-bold rounded-md text-[#191516]'>
                       <h1 className='text-2xl'> Bachelor</h1>
                       <h1 className='text-2xl'>(2021  – 2025)</h1>
                   </div>
                   <p className='text-2xl'>Radharaman Engeering College Bhopal MP</p>
                   <p className='text-2xl'>Category-Computer Science</p>
                   <p className='text-2xl'>Marks:- 7 SGPA</p>
               </div>
            </div>
           </div>
          
           {/* contact form */}
           <Contact/>

           <div className='flex justify-between py-10 px-10'>
              <div className='text-xl md:text-4xl font-bold'>
                <p className='font-aclonica text-[#d12065]'>Mohan CHAUDHARY</p>
             </div>
             <div className='md:flex hidden justify-between      text-white text-sm font-bold space-x-10'>
                 <a href="#Home">PROFILE</a>
                 <a href='#' >RESUME</a>
                 <a href="#skills">SKILLS</a>
                 <a href="https://www.linkedin.com/in/     mohanverse/details/certifications/     ">CERTIFICATE</a>
                 <a href="#contact">CONTACT</a>
             </div>
              <div className='flex justify-between space-x-4       text-3xl'>
                  <AiFillLinkedin/>
                  <AiFillGithub/>
                  <AiFillTwitterCircle/>
                  <AiFillInstagram/>
      
              </div>
            </div>
        </div>
     </div>
    </>
  )
}

export default Home