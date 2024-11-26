"use client"

import React from 'react'
import StatueComponent from './StatueComponent'
import GeneralInfo from './GeneralInfo'
import Image from 'next/image'

function Homepage() {

    return (
        <div className='w-full h-screen md:px-4 lg:p-8 xl:p-12 2xl:p-16 flex flex-col md:flex-row items-center justify-center sm:gap-4 overflow-x-hidden'>
            <Image src={"/laptop.png"} width={250} height={150} alt='laptop' className='hidden md:flex absolute top-0 left-8 lg:left-40 rotate-[28deg] opacity-20' />
            <Image src={"/laptop3.png"} width={200} height={100} alt='laptop' className='hidden md:flex absolute top-32 left-96 lg:left-[37rem] rotate-[45deg] opacity-30' />
            <Image src={"/slika.png"} width={250} height={250} alt='laptop' className='hidden md:flex absolute bottom-12 left-44 lg:left-96 rotate-[48deg] opacity-40' />
            
            <GeneralInfo />
            <StatueComponent />
        </div>
  )
}

export default Homepage