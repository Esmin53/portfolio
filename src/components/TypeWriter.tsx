"use client"

import { useEffect, useState } from "react"

const TypeWriter = () => {
    const [techCount, setTechCount] = useState<number >(0)
    const [letterCount, setLetterCount] = useState<number >(0)
    const [sign, setSign] = useState<"plus" | "minus" >("plus")


    const techs = [
        {
            name: "HTML5",
            color: "#e54d26"
        },
        {
            name: "CSS3",
            color: "#264ee4"
        },
        {
            name: "JavaScript",
            color: "#e8d44d"
        },
        {
            name: "TypeScript",
            color: "#2f74c1"
        },
        {
            name: "Node.js",
            color: "#86bc16"
        },
        {
            name: "MongoDB",
            color: "#11a54f"
        },
        {
            name: "React",
            color: "#5dd0fd"
        },
        {
            name: "Next.js",
            color: "#000000"
        },
        {
            name: "Postgresql",
            color: "#2f648e"
        },
        {
            name: "Tailwind",
            color: "#00acc2"
        },
    ]


    useEffect(() => {

        let tempCount = letterCount
        let tempSing = sign

        if(letterCount + 1 > techs[techCount].name.length) {
            setSign("minus")
            tempSing = "minus"
        }

        if(sign === "minus" && letterCount === 0) {
            if(techCount + 1 !== techs.length) {
                setTechCount(prev => prev + 1)
            } else {
                setTechCount(0)
            }
            setSign("plus")
            tempSing = "plus"
            setLetterCount(0)
            tempCount = 0
        }

        const timeout = setTimeout(() => {
            if(tempSing === "plus") {
                setLetterCount(prev => tempCount + 1)
            } else {
                setLetterCount(prev => tempCount - 1)
            }
        }, 300)

        return () => clearTimeout(timeout)

    }, [letterCount])


    return (
        <div className="flex items-center text-[#6a6f8f] text-4xl font-medium gap-1.5 py-1.5">
            <p>I am proficient in </p>
            <span className="font-bold" style={{color: `${techs[techCount].color}`}}>{techs[techCount].name.slice(0, letterCount)}</span>
        </div>
    )
}

export default TypeWriter