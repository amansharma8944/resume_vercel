import { motion,useScroll } from 'framer-motion';
import React, { useRef } from 'react'
import LiIcon from './LiIcon';


const Details = ({ position, company, companyLink, time, address, work }) => {
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
                {position}&nbsp;
                <a href={companyLink}
                target='_blank'
                className='text-primary capitalize'
                >
                    @{company}</a>
            </h3>
            <span className='capitalize font-medium text-dark/75'>

                {time} {address}

            </span>

            <p className='font-medium w-full'>

                {work}

            </p>

        </motion.div>
    </li>
}

const Experience = () => {
const ref=useRef(null);
const {scrollYProgress}=useScroll({
    target:ref,
    offset:["start end","center start"]
})

    return (
        <div className='my-64'>
            <h2 className="font-bold text-8xl  mb-full w-full text-center lg:text-5xl">Experience</h2>
            <div className='w-[75%] mx-auto relative'>
                <motion.div 
                ref={ref}
                style={{scaleY:scrollYProgress}}

                className=" mt-[15vh] absolute h-full top-0 left-8 bg-black w-[4px] origin-top md:-left-[6rem]"></motion.div>
                <ul className='w-full flex flex-col items-start justify-between ml-4'>
                  <Details 
                  position="Software Engineer"
                  company={"google"}
                  companyLink={"www.google.com"}
                  time={"2022-present"}
                  address={"Mountain view, CA "}
                  work={"Worked on a team responsible for developing new features for Google's search engine, including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization"}
                  />
                  <Details 
                  position="Software Engineer"
                  company={"google"}
                  companyLink={"www.google.com"}
                  time={"2022-present"}
                  address={"Mountain view, CA "}
                  work={"Worked on a team responsible for developing new features for Google's search engine, including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization"}
                  />
                  <Details 
                  position="Software Engineer"
                  company={"google"}
                  companyLink={"www.google.com"}
                  time={"2022-present"}
                  address={"Mountain view, CA "}
                  work={"Worked on a team responsible for developing new features for Google's search engine, including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization"}
                  />
                  <Details 
                  position="Software Engineer"
                  company={"google"}
                  companyLink={"www.google.com"}
                  time={"2022-present"}
                  address={"Mountain view, CA "}
                  work={"Worked on a team responsible for developing new features for Google's search engine, including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization"}
                  />
                  <Details 
                  position="Software Engineer"
                  company={"google"}
                  companyLink={"www.google.com"}
                  time={"2022-present"}
                  address={"Mountain view, CA "}
                  work={"Worked on a team responsible for developing new features for Google's search engine, including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization"}
                  />
                  <Details 
                  position="Software Engineer"
                  company={"google"}
                  companyLink={"www.google.com"}
                  time={"2022-present"}
                  address={"Mountain view, CA "}
                  work={"Worked on a team responsible for developing new features for Google's search engine, including improving the accuracy and relevance of search results and developing new tools for data analysis and visualization"}
                  />
                </ul>
            </div>

        </div>
    )
}

export default Experience
