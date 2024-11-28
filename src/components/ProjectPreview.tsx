"use client"

import { Code2, Earth } from "lucide-react"
import Image from "next/image"

interface ProjectProps {
    image: string
    techStack: string[]
    title: string
    subTitle: string
    description: string
    className?: string
}

const ProjectPreview = ({image, techStack, title, description, className, subTitle}: ProjectProps) => {

    return (
        <div className={`w-full flex gap-4 xl:gap-6 flex-col ${className ? className : "lg:flex-row"}`}>
            <div className="relative w-full lg:w-fit overflow-x-auto md:overflow-x-visible  z-10 flex items-end p-2 gap-2 mb-auto">
                <div className="flex gap-2 w-fit bottom-3 sm:bottom-2 md:-top-2 lg:-top-6 z-40 md:left-[25rem] lg:left-1.5 absolute">
                    {techStack.map((item, i) => (<div key={i} 
                    className="w-10 h-10 sm:w-11 sm:h-11 lg:w-[3.3rem] lg:h-[3.3rem] rounded flex items-center justify-center border-2
                    border-slate-400 shadow grainy">
                        <Image src={`/${item}`} width={32} height={32} alt="Logo" className="sm:w-9 sm:h-9 lg:w-10 lg:h-10 2xl:w-11 2xl:h-11"/>
                    </div>))}
                </div>
                <div className="h-full w-11/12 md:w-96 xl:w-[26rem] 2xl:w-[32rem] flex-shrink-0 z-10 lg:ml-16 xl:ml-20 2xl:ml-28">
                    <div className="flex flex-col items-center">
                        <div className="w-full aspect-video border-[12px] 2xl:border-[16px] border-slate-500 rounded-lg shadow-sm relative">
                            <Image src={`/projects/${image}/desktop.png`} fill alt="Title" quality={100} className="objec"/>
                        </div>
                        <div className="w-full h-6 bg-slate-400 -translate-y-1.5 rounded-bl-md rounded-br-md" />
                        <div className="w-8 lg:w-10 h-6 lg:h-10 bg-slate-500 border border-slate-600 -translate-y-1.5"/>
                        <div className="w-44 h-4 lg:h-6 bg-slate-500 rounded-tr-full rounded-tl-full -translate-y-1.5" />
                    </div>
                </div>
                <div className="w-44 h-56 lg:w-44 lg:h-52 xl:w-48 2xl:w-52 xl:h-60 2xl:h-64 border-x-8 border-y-8 border-slate-500 rounded-md shadow 
                flex-shrink-0 z-20 relative lg:absolute">
                    <Image src={`/projects/${image}/tablet.png`} fill alt="Title" quality={100} className="object-center"/>
                </div>
                <div className="w-[110px] h-[202px] lg:w-[100px] lg:h-[180px] xl:w-[120px] xl:h-[212px] border-x-2 border-y-8 border-slate-500 rounded-md shadow flex-shrink-0 z-20 
                 lg:left-48 xl:left-56 relative lg:absolute">
                    <Image src={`/projects/${image}/mobile.png`} fill alt="Title" quality={100} className="objec"/>
                </div>
            </div>

            <div className="flex-1 p-2 flex flex-col overflow-y-hidden max-h-96 relative">
                <div className="flex w-full justify-start items-center gap-4">
                    <Image src={`/projects/${image}/logo.ico`} width={38} height={38} alt="Logo"/>
                    <h1 className="text-4xl lg:text-5xl font-bold">{title}</h1>
                </div>
                <h2 className="text-2xl lg:text-3xl font-medium mt-1">{subTitle}</h2>

                <div className='flex gap-y-2 gap-x-7 items-center flex-wrap my-2.5'>
                    <div className="flex gap-1 items-center cursor-pointer group relative text-blue-500">
                        <Earth />
                        <p className="md:text-xl text-lg font-medium">Live Demo</p>
                        <span className="absolute left-0 -bottom-1.5 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full" />
                    </div>
                    <div className="flex gap-1 items-center cursor-pointer group relative text-gray-900">
                        <Code2 /> 
                        <p className='md:text-xl text-lg font-medium'>Github Repository</p>
                        <span className="absolute left-0 -bottom-1.5 w-0 h-[2px] bg-gray-900 transition-all duration-300 group-hover:w-full" />
                    </div>
                </div>
                

                <p className="text-base font-medium overflow-y-auto max-h-72 mt-2">{description}</p>
            </div>
        </div>
    )
}

export default ProjectPreview