"use client"

import { Code2, Earth } from 'lucide-react'
import Image from 'next/image'
import React, { useState } from 'react'

interface GameProjectPreviewProps {
    title: string
    subtitle: string
    description: string
    image: string
    images: string
    git: string
    demo: string
}

const GamePreview = ({title, subtitle, description, image, images, git, demo}: GameProjectPreviewProps) => {
    const [showFull, setShowFull] = useState(false)

  return (
    <div className='w-full flex flex-col md:flex-row gap-4 xl:gap-8 p-2 -mt-6'>
        <div className='flex gap-4 w-full aspect-video md:max-w-[24rem] p-0.5 lg:max-w-[30rem] xl:max-w-xl overflow-x-auto no-scrollbar shadow-glowing border border-pink-200 border-opacity-40 rounded relative'>
            <Image src={`/projects/${image}/image1.png`} fill alt='' />
        </div>
        <div className='flex-1 p-2 flex flex-col overflow-y-hidden relative'>
            <div className="flex w-full justify-start items-center gap-4">
                <Image src={`/projects/${image}/godot.svg`} width={48} height={48} alt="Logo"/>
                <h1 className="text-4xl md:text-5xl font-bold">{title}</h1>
            </div>
            <h2 className="text-2xl lg:text-3xl font-medium mt-1">{subtitle}</h2>
            <div className='flex flex-col lg:flex-row lg:items-center w-full gap-2'>
                <div className='flex gap-y-2 gap-x-7 items-center flex-wrap my-2.5'>
                        <a className="flex gap-1 items-center cursor-pointer group relative text-blue-500"
                        href={demo} target="#">
                        <Earth />
                        <p className="md:text-xl text-lg font-medium">Live Demo</p>
                        <span className="absolute left-0 -bottom-1.5 w-0 h-[2px] bg-blue-500 transition-all duration-300 group-hover:w-full" />
                    </a>
                    <a className="flex gap-1 items-center cursor-pointer group relative text-gray-900"
                    href={git} target="#">
                        <Code2 /> 
                        <p className='md:text-xl text-lg font-medium'>Github Repository</p>
                        <span className="absolute left-0 -bottom-1.5 w-0 h-[2px] bg-gray-900 transition-all duration-300 group-hover:w-full" />
                    </a>
                </div>
                <div className='flex-1 flex items-center justify-end gap-6'>
                    <div className='flex items-center gap-2 text-[#8cc1f6]'>
                        <Image src={`/projects/${image}/godot.svg`} width={28} height={28} alt="Logo" className=""/>
                        <p className='text-xl font-medium'>Godot</p>
                    </div>
  
                </div>
            </div>

            <div className="text-base lg:text-lg font-medium mt-2">
                    <p>{showFull ? description : description.slice(0, 555)}
    
                    {description.length > 555 ? <span className="text-blue-500 cursor-pointer font-medium" onClick={() => setShowFull(prev => !prev)}>
                        {showFull ? "...show less" : "...show more"}
                    </span> : null}    

                    </p> 
                </div>
        </div>
    </div>
  )
}

export default GamePreview