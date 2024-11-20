"use client"

import { ArrowRight, ChevronLeft, ChevronRight, Code2, Earth } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

interface ProjectProps {
    image: string
    techStack: string[]
    title: string
    description: string
}

const ProjectPreview = ({image, techStack, title, description}: ProjectProps) => {
    const [isShowInfo, setIsShowInfo] = useState(false)

    return (
        <div className="relative w-full aspect-video rounded-lg shadow border-2 border-pink-300 border-opacity-35 
        overflow-hidden z-10 flex">
            <div className='absolute w-full h-full left-0 top-0 bg-pink-400 opacity-5 z-10' />
        <div className="h-full w-10 lg:w-12 flex flex-col px-1 justify-start items-center py-2.5 gap-2">
          <Code2 className="w-6 h-6 lg:w-7 lg:h-7"/>
            {techStack.map((item) => <Image src={`/${item}`} key={item} alt='Instagram Icon' width={48} height={48} 
            className='cursor-pointer ' />)}
        </div>  
        <div className="flex-1 flex flex-col relative">
            <div className="w-full h-9 lg:h-12 flex items-center px-2">
              <h2 className="font-semibold text-sm sm:text-base lg:text-xl lg:font-medium text-gray-900">{title}</h2>
              <Earth className='cursor-pointer ml-auto w-7 h-7 lg:w-9 lg:h-9 text-blue-500 z-30' />
            </div>
            
            <div className="absolute w-4/6 h-full left-1 top-8 lg:top-12 p-2 flex flex-col overflow-y-auto z-40">
                <div className="w-full flex justify-between items-center pb-2 flex-wrap gap-2">
                    <Link href={"/"} className="text-blue-500 text-sm md:text-base  flex items-center gap-1">
                    <ArrowRight className="w-4 h-4"/> 
                    Live demo
                    </Link>
                    <Link href={"/"} className="text-blue-500 text-sm md:text-base  flex items-center gap-1">
                    <ArrowRight className="w-4 h-4"/> 
                    Github repo
                    </Link>
                 </div>
                <p className="text-sm lg:text-base lg:font-medium flex-1 pb-12 overflow-y-auto pl-2">
                    {description}
                 </p>
            </div>
            <div className={`flex-1 relative rounded-tl-lg overflow-hidden shadow-lg border border-gray-300 -mr-1 -mb-1
                z-40 duration-300 ${isShowInfo ? "translate-x-3/4" : ""}`}>
                <div className="absolute z-50 left-3 top-1/2 -translate-y-1/2"
                onClick={() => setIsShowInfo((prev) => !prev)}>
                    {isShowInfo ? 
                    <ChevronLeft  className="w-8 h-8 cursor-pointer text-pink-300"/> : 
                    <ChevronRight  className="w-8 h-8 cursor-pointer text-pink-300"/>}
                </div>
            <div className="absolute bottom-0 right-0 flex p-2 z-40">
              
            </div>
            <Image 
              src={`/projects/${image}`} 
              fill 
              alt="E-commerce Project" 
              quality={100} 
              className="object-cover z-0" 
            />
            </div>
        </div>



      </div>
    )
}

export default ProjectPreview