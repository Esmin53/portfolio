"use client"

import { ArrowRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import HtmlStringTypeWriter from './HtmlStringTypwriter'
import TypeWriter from './TypeWriter'
import StatueComponent from './StatueComponent'

function Homepage() {

    return (
    <div className='flex-1 p-16 flex items-center justify-center gap-4 overflow-x-hidden'>
        <div className='flex-1 flex flex-col gap-2 text-[#6a6f8f]'>
            <h1 className='text-6xl font-semibold text-[#6a6f8f]'>Hey, I&apos;m <span className=''>Esmin Tufekčić.</span></h1>
            <h1 className='text-6xl font-bold text-[#6a6f8f]'>Full Stack <span className='text-pink-300 text-glow'>Web Developer.</span> </h1>
            <TypeWriter />
            <div className='w-full flex items-center justify-end gap-4 p-4'>
                <Image src="/github3.png" alt='Github Icon' width={48} height={48} className='cursor-pointer' />
                <Image src="/facebook2.png" alt='Facebook Icon' width={48} height={48} className='cursor-pointer' />
                <Image src="/instagram2.png" alt='Instagram Icon' width={48} height={48} className='cursor-pointer' />
                <Image src="/gmail.png" alt='Gmail Icon' width={48} height={48} className='cursor-pointer' />
            </div>
            <div className='flex gap-6 items-center'>
                <div className='flex gap-1 items-center cursor-pointer'>
                    <ArrowRight /> 
                    <p className='text-xl font-medium'>See my projects</p>
                </div>
                <div className='flex gap-1 items-center'>
                    <ArrowRight /> 
                    <p className='text-xl font-medium cursor-pointer'>More about me</p>
                </div>
            </div>
            <div className='w-full flex items-center justify-start gap-2 p-4'>
                <Image src="/html.png" alt='Github Icon' width={48} height={48} className='cursor-pointer' />
                <Image src="/css.png" alt='Facebook Icon' width={48} height={48} className='cursor-pointer' />
                <Image src="/javascript.png" alt='Instagram Icon' width={48} height={48} className='cursor-pointer' />
                <Image src="/typescript.png" alt='Gmail Icon' width={48} height={48} className='cursor-pointer' />
                <Image src="/react.png" alt='Github Icon' width={48} height={48} className='cursor-pointer' />
                <Image src="/nodejs.png" alt='Facebook Icon' width={48} height={48} className='cursor-pointer' />
                <Image src="/mongodb.png" alt='Facebook Icon' width={48} height={48} className='cursor-pointer' />
                <Image src="/nextjs.png" alt='Instagram Icon' width={48} height={48} className='cursor-pointer' />
                <Image src="/postgresql.png" alt='Instagram Icon' width={48} height={48} className='cursor-pointer' />
                <Image src="/tailwind.png" alt='Gmail Icon' width={48} height={48} className='cursor-pointer' />
            </div>
        </div>
        <StatueComponent />
        
    </div>
  )
}

export default Homepage