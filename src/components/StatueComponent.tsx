"use client"

import Image from "next/image"
import HtmlStringTypeWriter from "./HtmlStringTypwriter"
import { useState } from "react"
import Icons from "./Icons"

const StatueComponent = () => {

    const [isSecondAnimationFinished, setIsSecondAnimationFinished] = useState<boolean >(false)
    const [isLoaded, setIsLoaded] = useState(false)
  

    return (
        <div className='opacity-10 z-10 lg:z-30  md:border border-pink-300 border-opacity-40 rounded h-full  w-full md:w-[330px] max-h-[300px] md:max-h-[500px] lg:w-[400px] lg:max-h-[600px] xl:w-[500px] xl:max-h-[600px] 2xl:w-[600px] 2xl:max-h-[700px] relative animate-slideInRight overflow-hidden flex items-center justify-center md:shadow-glowing noisy' 
        >
            <div className='absolute w-full h-full left-0 top-0  md:bg-[#fab6da] opacity-70 md:opacity-[0.05] z-10' />


        <HtmlStringTypeWriter />
         <Icons />
        <Image src="/slika.png" alt='Homepage image' fill 
        className={` z-50 max-w-[280px] max-h-[280px] md:max-h-[330px] md:max-w-[330px] lg:max-h-[400px] lg:max-w-[max-w-400px] xl:max-h-[500px] xl:max-w-[500px] 2xl:max-h-[600px] 2xl:max-w-[600px] my-auto
          mx-auto
            ${isLoaded ? "animate-slideInTop" : "opacity-0"}
            `}
        onAnimationEnd={() => setIsSecondAnimationFinished(true)}
        priority
        onLoadingComplete={() => setIsLoaded(true)}
        />
      <Image 
        src="/laptop.png"
        alt="Homepage image"
        width={370}
        height={370}
        quality={100}
        priority
        className={`absolute w-[200px] h-[200px] lg:w-[250px] lg:h-[250px] xl:w-[300px] xl:h-[300px] 2xl:w-[370px] 2xl:h-[370px] 
           ml-24 md:right-0
            -bottom-12 sm:-bottom-10 md:bottom-12 xl:-bottom-9 2xl:-bottom-2 z-[52]  ${isSecondAnimationFinished ? "animate-slideInBottom" : "opacity-0"}`}
          
      />


        </div>
    )
}

export default StatueComponent