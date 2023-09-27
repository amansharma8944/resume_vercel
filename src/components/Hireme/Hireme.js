import React from 'react'
import  { CircularText } from './NewHireMeSvg'
import Link from 'next/link'

const Hireme = () => {
  return (
    <div className='fixed   xl:bottom-[0.6rem] 2xl:bottom-[1vh] flex items-center justify-center lg:-top-[87%]  lg:right-[88vh]  lg:translate-x-[543%] md:!translate-x-[680%]  amandeep'>
      
      <div className='w-48 lg:!w-[6rem]  h-auto flex items-center justify-center relative'>

         <CircularText className={"fill-dark animate-spin-slow  lg:!w-[150px]"}/>
         <Link className='flex items-center justify-center align-center absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark text-light shadow-md border border-solid border-dark w-20  lg:w-10 lg:h-10  h-20 rounded-full font-semibold hover:bg-light hover:text-dark lg:text-[10px]' href={""}>Hire Me</Link>

      </div>
    </div>
  )
}

export default Hireme
