import AnimatedTeaxt from '@/components/animatedtext/AnimatedTeaxt'
import Head from 'next/head'
import React, { useEffect, useRef } from 'react'
import profilePic from "../../public/images/profile/resize.webp"
import Image from 'next/image'
import Layout from '@/components/layout/Layout'
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import Skills from '@/components/Skills'
import Experience from '@/components/experience/Experience'
import Education from '@/components/Education/Education'
import Transition from '@/components/Transition'
// import  "./myown.css"




const Numberanimation = ({ value }) => {
    const ref = useRef(null);
    const motVal = useMotionValue(0);
    const sprvalue = useSpring(motVal, { duration: 5000 })
    const isInView = useInView(ref, { once: true })

    useEffect(() => {
        if (isInView) { motVal.set(value) }


    }, [isInView, value, motVal])

    useEffect(() => {
        sprvalue.on("change", (latest) => {
            if (ref.current && latest.toFixed(0) <= value) {
                ref.current.textContent = latest.toFixed(0)+"+"
            }
        })

    }, [sprvalue, value])
    return (
        <span ref={ref}></span>
    )


}
const about = () => {
    return (
        <>
            <Head>
                <title>About Page</title>
                <meta name="description" content="any description" />
            </Head>
            <Transition/>

            <main className='flex w-full flex-col items-center justify-center '>
                <Layout className={"pt-2"}>


                    <AnimatedTeaxt text="Passion Fuels Purpose" className='mb-16 !py-0   xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl' />
                    <div className="grid w-full grid-cols-8 gap-16 mb-[20vh]   lg:flex lg:flex-col lg:items-center">
                        <div className='col-span-3 flex flex-col items-start justify-start'>
                            <h2 className='mb-4 text-lg font-bold uppercase text-dark/75'>Biography</h2>
                            <p className="font-medium">
                                Hi, I &apos; m Aman Sharma, a Full stack Developer with a passion for creating beautiful, functional,
                                and user-centered digital experiences. With 1+ years of experience in the field. I am always looking for
                                new and innovative ways to bring ideas, visions to practical.
                            </p>
                            <p className="my-4 font-medium">
                                I believe that design is about more than just making things look pretty  it &apos;s about solving problems and
                                creating intuitive, enjoyable experiences for users.

                            </p>
                            <p className="my-4 font-medium">
                                Whether I&apos;m working on a website, mobile app, or
                                other digital product, I bring my commitment to design excellence and user-centered thinking to
                                every project I work on. I look forward to the opportunity to bring my skills and passion to your next project.


                            </p>
                        </div>
                        <div className='col-span-3 relative h-full  rounded-2xl border-2 border-solid border-dark p-8 -z-5 bg-light boxshadow lg:w-[100%]' >



                            <Image src={profilePic} className= "  w-full h-auto rounded-2xl z-10" />

                        </div>



                        <div className='col-span-2 flex flex-col items-end justify-between lg:flex-row lg:w-[100%] lg:justify-between lg:items-center am:flex-col am:justify-between'>
                            <div className='flex flex-col items-end  justify-center lg:items-center lg:justify-center lg:text-center  am:mb-[100px] '>
                                <span className='inline-block text-7xl font-bold lg:text-4xl'>
                                    <Numberanimation value={5} />
                                </span>
                                <h2 className='text-xl font-medium capitalize text-dark/75'>satsified client</h2>
                            </div>
                            <div className='flex flex-col items-end  justify-center lg:items-center lg:justify-center lg:text-center am:mb-[100px]'>
                                <span className='inline-block text-7xl font-bold lg:text-4xl lg:text-center'>
                                    <Numberanimation value={15} />
                                </span>
                                <h2 className='text-xl font-medium capitalize text-dark/75'>projects Done</h2>
                            </div>
                            <div className='flex flex-col items-end  justify-center lg:items-center lg:justify-center lg:text-center am:mb-[100px]'>
                                <span className='inline-block text-7xl font-bold lg:text-4xl lg:text-center'>
                                    <Numberanimation value={1} />
                                </span>
                                <h2 className='text-xl font-medium capitalize text-dark/75'>Years of experience</h2>
                            </div>
                        </div>
                    </div>

                    <Skills  />
                    <Experience />
                    <Education/>
                </Layout>
            </main>

        </>
    )
}

export default about
