"use client"

import Image from "next/image"
import HtmlStringTypeWriter from "./HtmlStringTypwriter"
import { useState } from "react"
import Icons from "./Icons"

const StatueComponent = () => {
    const [isAnimationFinished, setIsAnimationFinished] = useState<boolean >(false)
    const [isSecondAnimationFinished, setIsSecondAnimationFinished] = useState<boolean >(false)

  

    return (
        <div className='opacity-10 z-10 lg:z-30  md:border border-pink-200 border-opacity-40 rounded h-full  w-full md:w-[330px] max-h-[300px] md:max-h-[500px] lg:w-[400px] lg:max-h-[600px] xl:w-[500px] xl:max-h-[600px] 2xl:w-[600px] 2xl:max-h-[700px] relative animate-slideInRight overflow-hidden flex items-center justify-center grainy md:shadow-glowing' 
        onAnimationEnd={() => setIsAnimationFinished(true)}>
            <div className='absolute w-full h-full left-0 top-0  md:bg-pink-300 opacity-20 md:opacity-5 z-10' />


<HtmlStringTypeWriter />
      <Icons />
      <Image src="/slika.png" alt='Homepage image' fill quality={100} 
        className={` z-50 max-w-[280px] max-h-[280px] md:max-h-[330px] md:max-w-[330px] lg:max-h-[400px] lg:max-w-[max-w-400px] xl:max-h-[500px] xl:max-w-[500px] 2xl:max-h-[600px] 2xl:max-w-[600px] my-auto
          mx-auto
            ${isAnimationFinished ? "animate-slideInTop" : "opacity-0"}`}
        onAnimationEnd={() => setIsSecondAnimationFinished(true)}/>
      <Image 
        src="/laptop.png"
        alt="Homepage image"
        width={370}
        height={370}
        quality={100}
        className={`absolute w-[200px] h-[200px] lg:w-[250px] lg:h-[250px] xl:w-[300px] xl:h-[300px] 2xl:w-[370px] 2xl:h-[370px] 
           ml-24 md:right-0
            -bottom-12 sm:-bottom-10 md:bottom-12 xl:-bottom-9 2xl:-bottom-2 z-[52]  ${isSecondAnimationFinished ? "animate-slideInBottom" : "opacity-0"}`}
      />


        </div>
    )
}

export default StatueComponent