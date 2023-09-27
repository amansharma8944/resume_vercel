import React, { useRef } from 'react'
import { motion } from "framer-motion"
import { useInView } from 'react-intersection-observer';




const Webskills = ({ text, x, y }) => {


    return (
        <motion.div
           
            whileHover={{ scale: 1.1 }}
            initial={{ x: 0, y: 0 }}
            animate={{ x: x, y: y }}
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
            className="flex items-center justify-center rounded-full font-semibold bg-dark text-light py-3 px-6 shadow-dark absolute cursor-pointer
            lg:py-2 lg:px-4 md:text-sm md:py-1.5 md:px-3 xs:bg-transparent xs:text-dark xs:font-bold
            lg:bg-circularLightLg
            md:bg-circularLightMd
            sm:bg-circularLightSm
            lg:text-dark

            
            ">

            {text}
        </motion.div>

    )
}

const Skills = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
      });

    return (
        <>
  <h2 className={"font-bold text-8xl mt-64 w-full text-center"}

ref={ref}
            >
                Skills

            </h2>
            
            
            {
                inView&&
            <div className="w-full h-screen relative flex items-center justify-center rounded-full bg-makdijala lg:w-[67vw] lg:h-[60vh]
            sm:h-[60vh] 
            xs:h-[50vh] 
            ">
               <motion.div

     
                    whileHover={{ scale: 1.1 }}
                    className="flex items-center justify-center rounded-full font-semibold bg-dark text-light p-8 shadow-dark
                    lg:p-6 
                    md:p-4
                    xs:text-xs
                    xs:p-2
                    ">web</motion.div>

                <Webskills text="css" x="-5vw" y="-10vw" />
                <Webskills text="HTML" x="-20vw" y="2vw" />
                <Webskills text="c" x="20vw" y="6vw" />
                <Webskills text="c++" x="0vw" y="12vw" />
                <Webskills text="java" x="20vw" y="-19vw" />
                <Webskills text="javascript" x="15vw" y="-12vw" />
                <Webskills text="React" x="32vw" y="-5vw" />
                <Webskills text="MONGODB" x="0vw" y="-20vw" />
                <Webskills text="NODEJS" x="-25vw" y="18vw" />
                <Webskills text="Express" x="18vw" y="18vw" />
                <Webskills text="MYSQL" x="-20vw" y="-19vw" />
      
            
            </div>
}


        </>
    )
}

export default Skills
