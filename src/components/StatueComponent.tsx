"use client"

import Image from "next/image"
import HtmlStringTypeWriter from "./HtmlStringTypwriter"
import { useState } from "react"

const StatueComponent = () => {
    const [isAnimationFinished, setIsAnimationFinished] = useState<boolean >(false)
    const [isSecondAnimationFinished, setIsSecondAnimationFinished] = useState<boolean >(false)

    return (
        <div className='w-fit border border-pink-300 border-opacity-15 shadow-sm rounded relative animate-slideInRight overflow-hidden'
        onAnimationEnd={() => setIsAnimationFinished(true)}>
            <div className='absolute w-full h-full left-0 top-0 bg-pink-400 opacity-5 z-10' />
<HtmlStringTypeWriter />
        <Image src="/slika.png" alt='Homepage image' width={650} height={650} quality={100} 
        className={`relative z-30 ${isAnimationFinished ? "animate-slideInTop" : "opacity-0"}`}
        onAnimationEnd={() => setIsSecondAnimationFinished(true)}/>
      <Image
        src="/laptop.png"
        alt="Homepage image"
        width={370}
        height={370}
        quality={100}
        className={`absolute right-0 -bottom-6 z-30 ${isSecondAnimationFinished ? "animate-slideInBottom" : "opacity-0"}`}
      />
        </div>
    )
}

export default StatueComponent