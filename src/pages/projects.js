import AnimatedTeaxt from '@/components/animatedtext/AnimatedTeaxt'
import Layout from '@/components/layout/Layout'
import { GithubIcon } from '@/svg/Icons'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import project1 from "../../public/images/projects/crypto-screener-cover-image.jpg"
import Transition from '@/components/Transition'
import blogImg from "../../public/Screenshot (804).png"
import flipkart from "../../public/Screenshot (808).png"
import kbc from "../../public/Screenshot (809).png"
import classroom from "../../public/Screenshot (807).png"
import table from "../../public/Screenshot (805).png"
import youtube from "../../public/Screenshot (806).png"
import metapher from "../../public/Screenshot (810).png"



const FeaturedProj = ({ type, title, summary, img, link, github }) => {
    return (
        <article className='w-full flex items-start justify-between border border-solid border-dark bg-light shadow-2xl rounded-3xl p-12 boxshadowforproject lg:flex-col '>

            <Link href={link} target="_blank"
                className='w-1/2 cursor-pointer overflow-hidden rounded-lg  lg:w-[100%] '
            >
                <Image src={img} alt={title} className='w-full h-auto'
                 sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                 priority />
            </Link>
            <div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-[100%]'>
                <span className='text-primary font-medium text-xl'>{type}</span>
                <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
                    <h2 className='my-2 text-left text-4xl font-bold lg:text-[26px]'>{title}</h2>
                </Link>
                <p className='my-2 font-medium text-dark lg:my-[1rem]  md:hidden'>{summary}</p>
                <div className='mt-2 flex items-center lg:w-[100%] lg:flex-row lg:justify-between'>
                    <Link href={github} target="_blank" className='w-10'><GithubIcon /></Link>
                    <Link href={link}
                        className='ml-4 rounded-lg bg-dark text-light p-2 px-6 text-lg font-semibold md:bg-transparent md:px-0 md:py-0 md:text-[9px] md:text-dark'
                        target="_blank">Visit Project</Link>
                </div>
            </div>

        </article>
    )
}

const MiniProjects = ({ type, title, github, img, link }) => {
    return (
        <>
            <article
                className='w-full flex flex-col items-center justify-center rounded-2xl border border-solid border-dark bg-light p-6 relative boxshadowforproject' >
                <Link href={link} target="_blank"
                    className='w-full cursor-pointer overflow-hidden rounded-lg '
                >
                    <Image src={img} alt={title} className='w-full h-auto'
                     sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 50vw"
                     priority />
                </Link>
                <div className='w-full flex flex-col items-start justify-between pl-0 py-3'>
                    {/* <span className='text-primary font-medium text-xl'>{type}</span> */}
                    <Link href={link} target='_blank' className='hover:underline underline-offset-2'>
                        <h2 className='my-2 text-left text-4xl font-bold'>{title}</h2>
                    </Link>
                    {/* <p className='my-2 font-medium text-dark'>{summary}</p> */}
                    <div className='mt-5 flex items-center w-full justify-between '>
                        <Link href={link}
                            className='ml-0 rounded-lg  text-dark hover:underline underline-offset-2 p-2 px-0   text-lg font-medium'
                            target="_blank">Visit Project</Link>
                        <Link href={github} target="_blank" className='w-8'><GithubIcon /></Link>
                    </div>
                </div>

            </article>
        </>
    )

}

const projects = () => {
    return (
        <>
            <Head>
                <title>Projects </title>
                <meta name="description" content="any description" />
            </Head>
            <Transition/>
            <main className='w-full mb-16 flex flex-col items-center justify-center '>
                <Layout className={"pt-16 lg:!px-5 "}>
                    <AnimatedTeaxt text="Imagination Trumps Knowledge"
                        className='mb-16 lg:!text-center sm:!text-4xl sm:!text-center'
                    />
                    <div className="grid grid-cols-12 gap-24 lg:flex lg:flex-col " >
                        <div className="col-span-12">

                            <FeaturedProj

                                title={"Blogging  Application"}
                                img={blogImg}
                                github={"www.github.com/amansharma8944"}
                                type={"Featured Project"}
                                summary="User has to create account first. He/she can create a blog that other person can see with thier respective id's and can comment . Admin is given right to delete/edit blog. User is also able to comment on a blog"
                                link={"http://github.com/amansharma8944"}
                            />

                        </div>
                        <div className="col-span-6">

                            <MiniProjects

                                title={"Table "}
                                img={table}
                                github={"https://github.com/amansharma8944/Table-mern"}
                                type={"Featured Project"}
                                summary="user can add data  into the table and delete from the table. Data is stored into the database. There is one checkbox availabe and user can send mail of the selected users  "
                                link={"https://amandeepsharma.netlify.app/"}
                            />
                        </div>
                        <div className='col-span-6'>
                            <MiniProjects

                                title={"Youtube Clone"}
                                img={youtube}
                                github={"www.github.com/amansharma8944"}
                                type={"Featured Project"}
                                summary="ddddddddddddkkkkdfjd adfdj adfdfj aman deep sharm is a bad boy and now he is required to do so much of the work in the society and now he is required to do much of the work alone in the night "
                                link={"http://github.com/amansharma8944"}
                            />
                        </div>
                        <div className="col-span-12">

                            <FeaturedProj

                                title={"Classroom website"}
                                img={classroom}
                                github={"www.github.com/amansharma8944"}
                                type={"Featured Project"}
                                summary="Project is based on a idea similar to google classroom. Teacher can create class , post something on class and delete from the class. Student can join the class from the code given by teacher and see the questions posted by the teacher "
                                link={"http://github.com/amansharma8944"}
                            />





                        </div>
                        <div className="col-span-12">

                            <FeaturedProj

                                title={"E-commerce Website"}
                                img={flipkart}
                                github={"www.github.com/amansharma8944"}
                                type={"Featured Project"}
                                summary="Website is similar to flipkart. List of items is displayed on the home menu. User can select the items in the cart and delete from the cart. "
                                link={"http://github.com/amansharma8944"}
                            />





                        </div>
                        <div className="col-span-6">
                            <MiniProjects

                                title={"Magpiie Website"}
                                img={metapher}
                                github={"www.github.com/amansharma8944"}
                                type={"Featured Project"}
                           
                                link={"https://github.com/amansharma8944/metapher"}
                            />
                        </div>
                        <div className='col-span-6'>
                            <MiniProjects

                                title={"Quiz app(KBC)"}
                                img={kbc}
                                github={"www.github.com/amansharma8944"}
                                type={"Featured Project"}
                                
                                link={"http://github.com/amansharma8944"}
                            />
                        </div>
                    </div>
                </Layout>

            </main>


        </>
    )
}

export default projects
