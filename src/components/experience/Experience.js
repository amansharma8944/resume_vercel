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
                  position="WEB DEVELOPER INTERN"
                  company={"LETSGROWMORE"}
                  companyLink={"https://letsgrowmore.in/"}
                  time={"2021-2022"}
                  address={"REMOTE"}
                  work={"During my internship, I undertook a series of dynamic projects directly aligned with the company's objectives. These initiatives spanned various facets of software development within the field of Computer Science and Engineering. I successfully conceptualized, developed, and implemented projects that not only showcased technical proficiency but also addressed critical challenges faced by the company. This experience equipped me with practical insights and skills essential for real-world application in the CSE domain."}
                  />
                  <Details 
                  position="WEB DEVELOPER INTERN"
                  company={"SUVHIDA MAHILA MANDAL"}
                  companyLink={"https://www.suvidhafoundationedutech.org/"}
                  time={"2022-2022"}
                  address={"NAGPUR, INDIA "}
                  work={"During my tenure at Suhida Mahila Mandal, I collaborated within a dedicated team to craft a bespoke web interface. This platform was tailored to cater specifically to the organization's needs, aligning with their mission to empower and support women. Through this experience, I not only honed my web development skills but also gained valuable insights into designing solutions that directly impact and uplift communities. This internship was a significant milestone in my journey towards becoming a proficient WEB DEVELOPER INTERN."}
                  />
                  <Details 
                  position="WEB DEVELOPER INTERN"
                  company={"PHN TECHNOLOGY "}
                  companyLink={"https://phntechnology.com/"}
                  time={"2022-2023"}
                  address={"PUNE"}
                  work={"Worked on a team responsible for developing new features for company website. During my tenure , I completed all the task given to me and managed with the team . "}
                  />
                  <Details 
                  position="FULL STACK DEVELOPER INTERN"
                  company={"METAPHER"}
                  companyLink={"https://www.metapher.in/"}
                  time={"2022-present"}
                  address={"BANGLORE,KARNATAKA"}
                  work={"In my current internship role, I have been entrusted with the responsibility of developing a comprehensive joining page for the company. This task has involved not only the creation of an intuitive and user-friendly website interface but also the establishment and management of a robust database to handle critical information. Additionally, I've taken charge of overseeing the Jira board for streamlined project tracking and have effectively utilized GitLab for version control and collaborative development. This multifaceted experience has enriched my skill set and provided me with practical insights into the seamless integration of various technical tools and platforms in a professional setting."}
                  />
                
                </ul>
            </div>

        </div>
    )
}

export default Experience
