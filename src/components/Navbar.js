import Link from 'next/link'
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { useRouter } from 'next/router'
import {TwitterIcon,GithubIcon,LinkedInIcon,PinterestIcon,DribbbleIcon,SunIcon} from '@/svg/Icons'
// import SVGG from "../../public/WhatsApp-Image-2023-09-13-at-6.03.42-PM.xml"



const CustomLink=({title,className="",href})=>{
    const Router=useRouter();
    // console.log(Router.asPath===href)/
    // console.log(Router.asPath)
    return(
        <Link className={`${className} relative group`} href={href}>{title}
        <span className={` ${Router.asPath===href?"w-full": "w-0" } absolute  h-[1px] inline-block  left-0 -bottom-0.5 bg-dark 
        group-hover:w-full transition-[width] ease duration-100`}>&nbsp;</span>
        </Link>
    )
}
const CustomMobileLink=({title,className="",href,toggle})=>{
    const Router=useRouter();
  
    // console.log(Router.asPath===href)
    // console.log(Router.asPath)

    const clickonlink=()=>{

      Router.push(href)
      toggle();
    }
    return(
        <button className={`${className} relative group mt-4 text-light`} href={href}  onClick={clickonlink}>{title}
        <span className={` ${Router.asPath===href?"w-full": "w-0" } absolute  h-[1px] inline-block  left-0 -bottom-0.5 bg-dark 
        group-hover:w-full transition-[width] ease duration-100`}>&nbsp;</span>
        </button>
    )
}

const Navbar = () =>{
    


    const MotionLink=motion(Link);
    const [isOpen,setIsOpen]=useState(false)
    const buttonClick=()=>{
      setIsOpen(prev=>!prev)
      // console.log(isOpen)
    }

  return (
    <header className='w-full px-32 py-8 font-medium flex items-center justify-between'>
      <button onClick={buttonClick} className='hidden lg:flex flex-col justify-center items-center absolute left-[12px] top-[25px]'>
        <span className={`h-0.5 w-6 block bg-dark  ${isOpen?"mb-0":"mb-1"}   ${isOpen?"rotate-45 translate-y-[4px]":"-translate-y-0.5"}`}></span>
        <span className={`h-0.5 w-6 block bg-dark  ${isOpen?"mb-0":"mb-1"}  ${isOpen?"opacity-0":"opacity-1"}`}></span>
        <span className={`h-0.5 w-6 block bg-dark ${isOpen?"-rotate-45 -translate-y-0":"translate-y-0.5"}`}></span>
      </button>
     
     <div className='w-full flex justify-between items-center lg:hidden'>
     <nav>
        <CustomLink title={"Home"} href="/"  className='mr-4'/>
        <CustomLink title={"About"} href="/about" className='mx-4'/>
        <CustomLink title={"Projects"} href="/projects" className='ml-4'/>
        <CustomLink title={"Articles"} href="/articles" className='mx-4'/>
      </nav>
      <div className='mt-2 flex justify-center items-center absolute left-[50%] translate-x-[-50%]'>
        <MotionLink href="/" className='rounded-full w-16 h-16 bg-dark text-light flex items-center justify-center text-2xl font-bold '
        whileHover={{
            backgroundColor:["#121212", "rgba(131,58,180,1)","rgba(253,29,29,1)","rgba(252,176,69,1)","rgba(131,58,180,1)", "#121212"], 
            transition:{duration:1,repeat:Infinity}
        }}>
        CB
        </MotionLink>
        </div>
      <nav className='flex items-center justify-center flex-wrap'>
        <motion.a href="https://twitter.com/" target='_blank' whileHover={{y:-4}}  whileTap={{scale:0.9}} className='mr-3 w-6'><TwitterIcon/></motion.a>
        <motion.a href="https://github.com/amansharma8944" target='_blank' whileHover={{y:-4}}  whileTap={{scale:0.9}} className='mr-3 w-6'><GithubIcon/></motion.a>
        <motion.a href="https://www.linkedin.com/in/aman-deep-sharma-136689223/" target='_blank' whileHover={{y:-4}}  whileTap={{scale:0.9}} className='mr-3 w-6'><LinkedInIcon/></motion.a>
        {/* <motion.a href="" target='_blank' whileHover={{y:-4}}  whileTap={{scale:0.9}} className='mr-3 w-6'><PinterestIcon/></motion.a> */}
        {/* <motion.a href="" target='_blank' whileHover={{y:-4}}  whileTap={{scale:0.9}} className='mr-3 w-6'><DribbbleIcon/></motion.a> */}
        {/* <motion.a href="" target='_blank' whileHover={{y:-4}}  whileTap={{scale:0.9}} className='mr-3 w-6'><SunIcon/></motion.a> */}
        
        
      </nav>
     </div>


{

isOpen&&
 
<motion.div
initial={{scale:0,x:"-50%", y:"-50%"}}
animate={{scale:1,opacity:"1"}}

className='min-w-[70vw] flex flex-col  justify-between items-center  fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10 bg-dark/90  rounded-lg backdrop-blur-md py-32 px-10 '>
<nav className=' flex flex-col justify-center items-center'>
   <CustomMobileLink toggle={buttonClick} title={"Home"} href="/"  className=''/>
   <CustomMobileLink toggle={buttonClick} title={"About"} href="/about" className=''/>
   <CustomMobileLink toggle={buttonClick} title={"Projects"} href="/projects" className=''/>
   <CustomMobileLink toggle={buttonClick} title={"Articles"} href="/articles" className=' mb-8'/>
 </nav>
 
 <nav className='flex items-center justify-center flex-wrap'>
   <motion.a href="" target='_blank' whileHover={{y:-4}}  whileTap={{scale:0.9}} className='mr-3 w-6 sm:mx-1'><TwitterIcon/></motion.a>
   <motion.a href="" target='_blank' whileHover={{y:-4}}  whileTap={{scale:0.9}} className='mr-3 w-6  sm:mx-1 sm:my-3'><GithubIcon/></motion.a>
   <motion.a href="" target='_blank' whileHover={{y:-4}}  whileTap={{scale:0.9}} className='mr-3 w-6 sm:mx-1 sm:my-3'><LinkedInIcon/></motion.a>
   <motion.a href="" target='_blank' whileHover={{y:-4}}  whileTap={{scale:0.9}} className='mr-3 w-6 sm:mx-1 sm:my-3'><PinterestIcon/></motion.a>
   <motion.a href="" target='_blank' whileHover={{y:-4}}  whileTap={{scale:0.9}} className='mr-3 w-6 sm:mx-1 sm:my-3'><DribbbleIcon/></motion.a>
   {/* <motion.a href="" target='_blank' whileHover={{y:-4}}  whileTap={{scale:0.9}} className='mr-3 w-6 sm:mx-1 sm:my-3'><SunIcon/></motion.a> */}
   
   
 </nav>
</motion.div>




}
      {/* <SVGG/> */}
    </header>
  )
}

export default Navbar
