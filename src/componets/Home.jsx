import React from 'react'
import AOS from "aos";
import 'aos/dist/aos.css'
import myimg from './360_F_271538920_QfQaUsbICjT8sLFBesUU1MOY6xSDUx9l.jpg'
import myimg1 from './ce1ce4a8-aafa-4a84-a5be-bb9e7361ff68-removebg-preview.png'
import {AiFillHtml5} from 'react-icons/ai'
import {BsGithub} from 'react-icons/bs'
import {BiLogoCss3, BiLogoJavascript, BiLogoTailwindCss, BiLogoReact,BiLogoNodejs, BiLogoCPlusPlus,BiLogoJava} from 'react-icons/bi'
import Project from './Project'
import Contact from './Contact'

import {AiFillLinkedin, AiFillGithub,AiFillTwitterCircle,AiFillInstagram} from "react-icons/ai"


function Home() {
  AOS.init({duration:1500, })
    const divStyle = {
        width: '100%',
        height: '110vh',
        backgroundImage:`url(${myimg})`,
        backgroundSize: 'cover',
      };
  return (
    <>
     <div style={divStyle}>
        <div className=''>
           <div id='Home' className='grid md:flex divide-x-2'>
                <img data-aos={"fade-up"}  className='h-[950px] md:h-[855px] md:-mt-20' src={myimg1} alt="" />
                <div data-aos={"fade-left"} className='text-2xl md:text-4xl font-semibold my-10 md:my-60 md:text-start p-4 color-white space-y-8'>
                    <h1 className='bg-[#d12065] text-white p-2 font-aclonica w-1/2 text-center'>ABOUT ME</h1>
                    <h1 className=''>Hello, I am <span className='bg-[#d12065] text-white p-2 font-aclonica'>Mohan Chaudhary</span> Computer Science & Engineering Student </h1>
                    <p className='text-[#576060] font-light text-xl' > I am a driven, hard-working individual who is studying Bachelor of computer science. at<em className='text-[#d12065] font-semibold'> Radharaman Engeering college </em>Bhopal Madhya Pradesh, 
                    <em className='text-[#d12065] font-semibold'> Full Stack Development  </em> is something I am very passionate about and look forward to furthering my education and experience in the field.</p>

                    <p className='text-xl md:text-2xl' >I am Currently <em className='bg-[#d12065] text-white p-2 font-aclonica'>Frontend Developer intern</em> in the Fuelcab india and working as a intern </p>
                </div>
           </div>
            
           {/* Skills section */}

           <div id='skills'>
               <h1 className='text-center text-4xl  text-black font-bold font-vidaloka '>Skills And Technologies</h1>
           </div>
           <div className='flex place-content-center mt-10'>
                <div className='grid grid-cols-2  md:grid-cols-4  text-2xl gap-2  md:gap-20 text-[#d12065] space-x-4 font-bold font-vidaloka'>
                    <div data-aos={"fade-left"} className='grid mt-10 w-40 bg-white shadow-2xl justify-center text-center p-4 '>
                      <AiFillHtml5 className='text-8xl text-black'/>
                      <h1>HTML5</h1>
                    </div>
                    <div data-aos={"fade-right"} className='grid  mt-10 w-40 bg-white shadow-2xl justify-center text-center p-4 '>
                      <BiLogoCss3 className='text-8xl text-black'/>
                      <h1>CSS3</h1>
                    </div>
                    <div data-aos={"fade-left"} className='grid mt-10 w-40 bg-white shadow-2xl justify-center text-center p-4 '>
                      <BiLogoJavascript className='text-8xl ml-4 text-black'/>
                      <h1>JAVASCRIPT</h1>
                    </div>
                    <div data-aos={"fade-right"} className='grid md:ml-40 mt-10 w-40 bg-white shadow-2xl justify-center text-center p-4 '>
                      <BiLogoTailwindCss className='text-8xl ml-6 text-black'/>
                      <h1 className='text-xl'>TAILWINDCSS</h1>
                    </div>
                    <div data-aos={"fade-left"} className='grid md:ml-40 mt-10 w-40 bg-white shadow-2xl justify-center text-center p-4 '>
                      <BiLogoNodejs className='text-8xl text-black'/>
                      <h1>NODE.JS</h1>
                    </div>
                    <div data-aos={"fade-right"} className='grid md:ml-40 mt-10 w-40 bg-white shadow-2xl justify-center text-center p-4 '>
                      <BiLogoReact className='text-8xl text-black'/>
                      <h1>REACT.JS</h1>
                    </div>
                    <div data-aos={"fade-left"} className='grid md:ml-40 mt-10 w-40 bg-white shadow-2xl justify-center text-center p-4 '>
                      <BiLogoCPlusPlus className='text-8xl text-black'/>
                      <h1>C++</h1>
                    </div>
                    <div data-aos={"fade-right"} className='grid md:ml-40 mt-10 w-40 bg-white shadow-2xl justify-center text-center p-4 '>
                      <BiLogoJava className='text-8xl text-black'/>
                      <h1>JAVA</h1>
                    </div>
                    <div data-aos={"fade-left"} className='grid md:ml-40 mt-10 w-40 bg-white shadow-2xl justify-center text-center p-4 '>
                      <BsGithub className='text-8xl text-black'/>
                      <h1>GITHUB</h1>
                    </div>
                </div>
           </div>

           {/* projects section */}
           <Project />

           {/* Eduction */}
           <div className='text-center text-4xl font-bold font-vidaloka mt-16  text-[#d12065]'>
              <h1 data-aos={"fade-up"}>EDUCATION</h1>
           </div>
           <div className='grid mt-20 mx-4 md:mx-40 font-vidaloka gap-10 divide-y-2'>
              <div data-aos={"fade-left"} className='gap-8'>
                  <div className='flex justify-between bg-[#d12065] p-2 font-bold rounded-md' >
                      <h1 className='text-2xl md:text-4xl text-white'>Matriculation</h1>
                      <h1 className='text-3xl md:text-4xl text-white'>(2018 – 2019)</h1>
                  </div>
                  <p className='text-2xl'>High School Khirhar Madhubani  Bihar</p>
                  <p className='text-2xl'>Marks:- 63.20%</p>
              </div>
              <div data-aos={"fade-right"} className='gap-8'>
                  <div className='flex justify-between bg-[#d12065] p-2 font-bold rounded-md'>
                      <h1 className='text-3xl md:text-4xl  text-white'>Intermediate</h1>
                      <h1 className='text-3xl md:text-4xl text-white'>(2019  – 2021)</h1>
                  </div>
                  <p className='text-2xl'>C.P.P. College, Hisar, Bourhar, Madhubani Bihar</p>
                  <p className='text-2xl'>Category- PCM</p>
                  <p className='text-2xl'>Marks:- 63.20%</p>
              </div>
              <div data-aos={"fade-left"} className='gap-8'>
                  <div className='flex justify-between bg-[#d12065] p-2 font-bold rounded-md'>
                      <h1 className='text-4xl text-white'> Bachelor</h1>
                      <h1 className='text-4xl text-white'>(2021  – 2025)</h1>
                  </div>
                  <p className='text-2xl'>Radharaman Engeering College Bhopal MP</p>
                  <p className='text-2xl'>Category-Computer Science</p>
                  <p className='text-2xl'>Marks:- 7 SGPA</p>
              </div>
           </div>
          
           {/* contact form */}
           <Contact/>

           <div className='flex justify-between py-10 px-10'>
              <div className='text-xl md:text-4xl font-bold'>
                <p className='font-aclonica text-[#d12065]'>Mohan CHAUDHARY</p>
             </div>
             <div className='md:flex hidden justify-between      text-[#576060] text-sm font-bold space-x-10'>
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