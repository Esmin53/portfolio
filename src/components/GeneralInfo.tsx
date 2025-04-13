"use client"

import { ArrowRight } from "lucide-react"
import Image from "next/image"
import TypeWriter from "./TypeWriter"

const GeneralInfo = () => {

    const handleScroll = (targetId: string) => {
        const target = document.getElementById(targetId);
        if (target) {
          target.scrollIntoView({ behavior: "smooth" });
        }
      };
     
    return (
        <div className='flex-1 flex flex-col gap-1 md:gap-2 z-20 justify-evenly items-center md:items-start py-2
        md:h-full md:max-h-[500px] lg:max-h-[600px] xl:max-h-[500px] 2xl:max-h-[600px] px-4 md:px-0'>

        <div className="flex flex-col w-full gap-0.5">
            <p className="text-xl sm:text-2xl md:text-3xl font-medium">Hey, my name is</p>
            <div className="w-3/6 h-0 shadow-glowing border border-pink-200 border-opacity-60 block md:hidden mt-1" />
            <h1 className='text-5xl lg:text-6xl xl:text-7xl font-semibold relative py-1 text-center md:text-start --font-geist-sans'>
            Esmin Tufekčić.
            </h1>
            <div className="mx-auto w-4/6 h-0 shadow-glowing border border-pink-200 border-opacity-60 block md:hidden mb-1" />
            <h1 className='text-3xl sm:text-4xl lg:text-5xl xl:text-5xl font-bold 
            text-center md:text-start'>Full Stack <span className='text-pink-300 main-text-glow'>Web Developer.</span> </h1>
            <div className="ml-auto w-3/6 h-0 shadow-glowing border border-pink-200 border-opacity-60 block md:hidden mt-1" />
        </div>

        <TypeWriter />
        <div className='w-full hidden lg:flex items-center justify-end gap-2 md:gap-4 p-2 md:p-4 relative'>
            <a href="https://github.com/Esmin53" target="_blank">
                <Image src="/github3.png" alt='Github Icon' width={48} height={48} className='cursor-pointer w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12' />
            </a>
            <a href="https://www.linkedin.com/in/esmin-tufek%C4%8Di%C4%87-628130347" target="_blank">
                <Image src="/linkedin.png" alt='Linkedin Icon' width={48} height={48} className='cursor-pointer w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12' />
            </a>
            <a href="https://mail.google.com/mail/?view=cm&fs=1&to=tufekcic.esmin@gmail.com" target="_blank">
                <Image src="/gmail.png" alt='Gmail Icon' width={48} height={48} className='cursor-pointer w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12' />
            </a>
        </div>
        <div className='flex gap-y-2 gap-x-7 items-center flex-wrap'>
            <div className="flex gap-1 items-center cursor-pointer group relative" onClick={() => handleScroll('aboutme')}>
                <ArrowRight /> 
                <p className='md:text-xl text-lg font-medium'>More about me</p>
                <span className="absolute left-0 -bottom-1.5 w-0 h-[2px] bg-[#6a6f8f] transition-all duration-300 group-hover:w-full" />
            </div>
            <div className="flex gap-1 items-center cursor-pointer group relative" onClick={() => handleScroll('projects')}>
                <ArrowRight />
                <p className="md:text-xl text-lg font-medium">See my projects</p>
                <span className="absolute left-0 -bottom-1.5 w-0 h-[2px] bg-[#6a6f8f] transition-all duration-300 group-hover:w-full" />
            </div>
        </div>
    </div>
    )
}

export default GeneralInfo