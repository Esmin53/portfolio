"use client"

import Image from "next/image"
import HtmlStringTypeWriter from "./HtmlStringTypwriter"
import { useState } from "react"

const StatueComponent = () => {
    const [isAnimationFinished, setIsAnimationFinished] = useState<boolean >(false)
    const [isSecondAnimationFinished, setIsSecondAnimationFinished] = useState<boolean >(false)

    return (
        <div className='opacity-10 z-10 lg:z-30 w-fit h-fit border border-pink-300 border-opacity-15 shadow-sm rounded
        relative animate-slideInRight overflow-hidden hidden lg:block'
        onAnimationEnd={() => setIsAnimationFinished(true)}>
            <div className='absolute w-full h-full left-0 top-0 bg-pink-400 opacity-5 z-10' />
<HtmlStringTypeWriter />

      <Image src="/slika.png" alt='Homepage image' width={600} height={600} quality={100} 
        className={`w-[400px] h-[400px] xl:w-[500px] xl:h-[500px] 2xl:w-[600px] 2xl:h-[600px] z-50
            ${isAnimationFinished ? "animate-slideInTop" : "opacity-0"}`}
        onAnimationEnd={() => setIsSecondAnimationFinished(true)}/>

      <Image
        src="/laptop.png"
        alt="Homepage image"
        width={370}
        height={370}
        quality={100}
        className={`absolute w-[250px] h-[250px] xl:w-[300px] xl:h-[300px] 2xl:w-[370px] 2xl:h-[370px] right-0 -bottom-6 z-30  ${isSecondAnimationFinished ? "animate-slideInBottom" : "opacity-0"}`}
      />
        </div>
    )
}

export default StatueComponent