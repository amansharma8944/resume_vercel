import { motion,useScroll } from "framer-motion"
import { useEffect } from "react"

const LiIcon = ({ reference }) => {

    const { scrollYProgress } = useScroll(

        {
            target: reference,

            offset: ["start end", "center center"]
        })
        useEffect(()=>{
console.log(scrollYProgress)
        },[scrollYProgress])



    return (

        <figure className='absolute left-0 rotate-[260deg]  stroke-dark md:-left-[128px]' >

            <svg width="75" height="75" viewBox="0 0 100 100"> 
            <cire cx="75" cy="50" r="20" className='stroke-primary stroke-1 fill-none'/> 
            <motion.circle cx="75" cy="50" r="20" className=' stroke-[5px] fill-light' 
            style={{pathLength:scrollYProgress}}
            /> 
            <circle cx="75" cy="50" r="10" className=' animate-pulse stroke-1 fill-primary' />

        </svg >
    
    </figure >)}

export default LiIcon