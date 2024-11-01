"use client"

import { useEffect, useRef, useState } from "react"

const HtmlStringTypeWriter = () => {
    const [letterCount, setLetterCount] = useState(1)
    const [scroll, setScroll] = useState<number>(0)
    const preRef = useRef<HTMLPreElement | null>(null);
    const divRef = useRef<HTMLDivElement | null>(null)

    const htmlString: string = `<html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta http-equiv="X-UA-Compatible" content="ie=edge">
        <title>Portfolio Website</title>
        <link rel="stylesheet" href="./style.css">
        <link rel="icon" href="./favicon.ico" type="image/x-icon">
    </head>
    <body>
        <main>
            <nav className="w-full h-12 flex items-center 
            justify-between">
                <img src="https://flowbite.com/docs/images/logo.svg" 
                class="h-8" alt="Flowbite Logo" />
                <ul>
                </ul>
            </nav>
            <section>
                <h1>Welcome to My Portfolio</h1>
                <h2>
                    I am Esmin Tufekčić,
                    Full stack web developer from Tuzla, BiH
                </h2>  
            </section>
        </main>
        <script src="index.js"></script>
    </body>
</html>`

    useEffect(() => {
        if(preRef.current && divRef.current) {
            const rect = preRef.current.getBoundingClientRect().bottom;
            const divRect = divRef.current.getBoundingClientRect().bottom;

            const difference = rect - divRect;

            if (difference > 0) {
                divRef.current.scrollTop = divRef.current.scrollHeight;
              }
        }

        if(letterCount === htmlString.length) return

        let timeout

        if(htmlString[letterCount + 1] == " " && htmlString[letterCount + 2] == " ") {
            setLetterCount(prev => prev + 1)
            return
        } else {
            timeout = setTimeout(() => {
                setLetterCount(prev => prev + 1)
            }, 140)
        }
        
        return () => clearTimeout(timeout)

    }, [letterCount])


    return (
        <div className='absolute w-full h-full left-0 top-0 z-20 text-2xl text-pink-200 font-medium text-glow overflow-hidden'
        ref={divRef}>
            <pre ref={preRef} className="duration-500 min-h-full p-2" style={{transform: `translateY(-${scroll}px)`, transition: 'transform 0.5s'}}>
{htmlString.slice(0, letterCount)}
            </pre>
        </div>
    )
};

export default HtmlStringTypeWriter;