




import AnimatedTeaxt from '@/components/animatedtext/AnimatedTeaxt'
import Layout from '@/components/layout/Layout'
import { GithubIcon } from '@/svg/Icons'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import project1 from "../../public/images/projects/crypto-screener-cover-image.jpg"
import FormPage from '@/components/FormPage'
import SignIn from '@/components/FormPage'
import Transition from '@/components/Transition'

import picaaashish from "../../public/Screenshot (811).png"
import amandeep from "../../public/Screenshot (812).png"


const MiniProjects = ({ type, title, github, img, link ,texttoview}) => {
    return (
        <>
            <article
                className='w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative boxshadowforproject' >
                <Link href={link} target="_blank"
                    className='w-full cursor-pointer overflow-hidden rounded-lg '
                >
                    <Image src={img} alt={title} className='w-full h-auto' 
                     sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                     priority/>
                </Link>
                <div className='w-full flex flex-col items-start justify-between pl-0 py-3'>
                    <span className='text-primary font-medium text-xl'>{type}</span>
                    <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
                        <h2 className='my-2 text-left text-4xl font-bold'>{title}</h2>
                    </Link>
                    {/* <p className='my-2 font-medium text-dark'>{summary}</p> */}
                    <div className='mt-5 flex items-center w-full justify-between '>
                        <Link href={link}
                            className='ml-0 rounded-lg  text-dark hover:underline underline-offset-2 p-2 px-0   text-lg font-medium'
                            target="_blank">{texttoview}</Link>
                        {/* <Link href={github} target="_blank" className='w-8'><GithubIcon /></Link> */}
                    </div>
                </div>

            </article>
        </>
    )

}

const Articles = () => {
    return (
        <>
            <Head>
                <title>Articles</title>
                <meta name="description" content="any description" />
            </Head>
            <Transition/>
            <main className='w-full mb-16 flex flex-col items-center justify-center '>
                <Layout className={"pt-16  lg:w-[132vw] lg:pl-[8vw]"}>
                <AnimatedTeaxt text={"words can change the World"} className='mb-16 !py-0    xl:!text-5xl lg:!text-center lg:!text-6xl md:!text-5xl sm:!text-3xl' />
                    <div className="grid grid-cols-12 gap-24 mt-16 
                    
                    lg:flex lg:flex-col
                    
                    
                    
                    ">
                    
                        <div className="col-span-6">

                            <MiniProjects

                                title={"Influenced by Aashish Kumar "}
                                img={picaaashish}
                                github={"www.github.com/amansharma8944"}
                                type={""}
                                summary="ddddddddddddkkkkdfjd adfdj adfdfj aman deep sharm is a bad boy and now he is required to do so much of the work in the society and now he is required to do much of the work alone in the night "
                                link={"https://www.linkedin.com/in/aashiskumar/"}
                            
                                texttoview="visit him"
                            
                            />
                        </div>
                        <div className='col-span-6'>
                            <MiniProjects

                                title={"My linkedIn"}
                                img={amandeep}
                                github={"www.github.com/amansharma8944"}
                                type={""}
                                summary="ddddddddddddkkkkdfjd adfdj adfdfj aman deep sharm is a bad boy and now he is required to do so much of the work in the society and now he is required to do much of the work alone in the night "
                                link={"https://www.linkedin.com/in/aman-deep-sharma-136689223/"}
                                texttoview="visit me"
                            />
                        </div>
                      
                        
                    </div>
                    <SignIn/>

                </Layout>

            </main>


        </>
    )
}

export default Articles

