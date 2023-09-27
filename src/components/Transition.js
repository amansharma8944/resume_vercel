import React from 'react'
import {motion} from "framer-motion"
// import { motionValue } from 'framer-motion'


const Transition = () => {
  return (
 <>
    <motion.div
    className='fixed top-0 bottom-0 right-full w-screen h-screen z-[102] bg-primary'
    initial={{x:"100%",width:"100%"}}
    animate={{x:"0%",width:"0%"}}
    transition={{duration:"0.9"}}
    >
      
    </motion.div>
    <motion.div
    className='fixed top-0 bottom-0 right-full w-screen h-screen z-[101] bg-yellow-600'
    initial={{x:"100%",width:"100%"}}
    animate={{x:"0%",width:"0%"}}
    transition={{duration:"0.9",delay:"0.2"}}
    >
      
    </motion.div>
    <motion.div
    className='fixed top-0 bottom-0 right-full w-screen h-screen z-[100] bg-green-300'
    initial={{x:"100%",width:"100%"}}
    animate={{x:"0%",width:"0%"}}
    transition={{duration:"0.9",delay:"0.3"}}
    >
      
    </motion.div>
    </>
  )
}

export default Transition
