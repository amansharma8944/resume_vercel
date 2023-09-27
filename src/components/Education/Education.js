import { motion,useScroll } from 'framer-motion';
import React, { useRef } from 'react'
import LiIcon from '../experience/LiIcon';
// import LiIcon from '..';


const Details = ({ type,time,place,info }) => {
    const reff=useRef(null);
    return <li 
    ref={reff}
    className='my-8 first:mt-[15vh] last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between'>
        <LiIcon reference={reff}/>
        <motion.div
        initial={{y:-50}}
     whileInView={{y:0}}
        transition={{duration:0.5}}
        >

            <h3 className='capitalize font-bold text-2xl'>
                {type}&nbsp;
               
            </h3>
            <span className='capitalize font-medium text-dark/75'>

                {time} {place}

            </span>

            <p className='font-medium w-full'>

                {info}

            </p>

        </motion.div>
    </li>
}

const Education = () => {
const ref=useRef(null);
const {scrollYProgress}=useScroll({
    target:ref,
    offset:["start end","center start"]
})

    return (
        <div className='my-64'>
            <h2 className="font-bold text-8xl mb-full w-full text-center lg:text-5xl">Education</h2>
            <div className='w-[75%] mx-auto relative'>
                <motion.div 
                ref={ref}
                style={{scaleY:scrollYProgress}}

                className=" mt-[15vh] absolute h-full top-0 left-8 bg-black w-[4px] origin-top md:-left-[6rem]"></motion.div>
                <ul className='w-full flex flex-col items-start justify-between ml-4'>
                    <Details 
                   type={"Matriculation"}
                   time={"2018-2019"}
                   place={" Kendriya Vidyalaya DPS Kishtwar"}
                   info={
                      "Completed 10th grade with excellence, achieving 10CGPA. Demonstrated proficiency in subjects such as Mathematics, Science. Developed a strong foundation in critical thinking and problem-solving, laying the groundwork for further academic pursuits"
   
                   }
   
                    />
                  <Details 
                 type={" Higher Secondary"}
                 time={"2020-2021"}
                 place={" Kendriya Vidyalaya DPS Kishtwar"}
                 info={
                    "Studied  mathematics with a focus on  Algebra, Calculus, Statistics. Developed strong analytical and problem-solving skills through rigorous coursework and independent research projects."

                 }

                  />
                  <Details 
                 type={" Bachelor of Technology In Computer Science"}
                 time={"2021-2025"}
                 place={" walchand institute of technology (WIT)"}
                 info={
                     "Relevant courses included Data Structures and Algorithms, Computer Systems Engineering, and Artificial Intelligence."

                 }

                  />
               
                 
 
                
                </ul>
            </div>

        </div>
    )
}

export default Education
