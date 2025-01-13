"use client"

import { Code2 } from 'lucide-react'
import Image from 'next/image'
import React, { useState } from 'react'

interface MobileProjectPreviewProps {
    title: string
    subtitle: string
    description: string
    image: string
    images: string[]
    git: string
}

const MobileProjectPreview = ({title, subtitle, description, image, images, git}: MobileProjectPreviewProps) => {
    const [showFull, setShowFull] = useState(false)


  return (
    <div className='w-full flex flex-col md:flex-row-reverse gap-4 xl:gap-8 p-2 -mt-6'>
        <div className='flex gap-4 flex-1 md:max-w-[225px] lg:max-w-[375px] overflow-x-auto no-scrollbar'>
            {images.map((item, i) => <div key={i} className='h-[300px] md:h-[350px] w-[125px] md:w-[150px] border-x-2 border-y-8 border-slate-500 rounded-md shadow flex-shrink-0 z-20 relative'>
                <Image src={`/projects/${image}/${item}`} fill alt='Project Preview Image' quality={100} className='object-center'/>
            </div>)}
        </div>
        <div className='flex-1 p-2 flex flex-col overflow-y-hidden relative'>
            <div className="flex w-full justify-start items-center gap-4">
                <Image src={`/projects/${image}/logo.png`} width={48} height={48} alt="Logo"/>
                <h1 className="text-4xl md:text-5xl font-bold">{title}</h1>
            </div>
            <h2 className="text-2xl lg:text-3xl font-medium mt-1">{subtitle}</h2>
            <div className='flex flex-col lg:flex-row lg:items-center w-full gap-2'>
                <div className='flex items-center my-2.5 w-fit'>
                    <a className="flex gap-1 items-center cursor-pointer group relative text-gray-900"
                    href={git} target="#">
                        <Code2 /> 
                        <p className='md:text-xl text-lg font-medium'>Github Repository</p>
                        <span className="absolute left-0 -bottom-1.5 w-0 h-[2px] bg-gray-900 transition-all duration-300 group-hover:w-full" />
                    </a>
                </div>
                <div className='flex-1 flex items-center justify-end gap-6'>
                    <div className='flex items-center gap-2 text-[#5dd0fd]'>
                        <Image src={`/react.png`} width={28} height={28} alt="Logo" className=""/>
                        <p className='text-xl font-medium'>React Native</p>
                    </div>
                    <div className='flex items-center gap-2 text-[#183d55]'>
                        <Image src={`/sqlite.png`} width={28} height={28} alt="Logo" className=""/>
                        <p className='text-xl font-medium'>Sqlite</p>
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

export default MobileProjectPreview