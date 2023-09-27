import React from 'react'
import Layout from '../layout/Layout'
import Link from 'next/link'

const Footer = () => {
    return (
        <footer className='w-full border-t-2 border-solid border-dark font-medium 
        
        text-lg
        lg:text-[10px] 
        
        '>
 
            <Layout className={"py-8 flex items-center justify-between lg:w-full lg:!py-2  sm:!p-2 sm:text-[8px] "}
            
            
            >
                <span className='
                
                
                '>{new Date().getFullYear()}&copy; All Rights Reserved</span>
                <div className='flex items-center '>
                Build under guidance  <span className='text-primary text-[10px] px-2'>of</span>
                <Link href="www.metapher.in">Metapher</Link>
                </div>
                <Link href="/">contact Us</Link>


            </Layout>
        </footer>

    )
}

export default Footer
