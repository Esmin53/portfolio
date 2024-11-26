import Image from "next/image"
import { useEffect, useState } from "react"


const Icons = () => {

    const [currentElement, setCurrentElement] = useState(0)
    const [currentBoxShadow, setCurrentBoxShadow] = useState<number | null>(null)

    const techs = [
        {
            name: "HTML5",
            color: "#e54d26",
            rgb: "rgb(229, 77, 38)",
            icon: "/html.png",
            boxShadow: "-40px -25px 60px rgba(229, 77, 38, 0.4), -5px -50px 40px rgba(229, 77, 38, 0.25)"
        },
        {
            name: "CSS3",
            color: "#264ee4",
            rgb: "rgb(38, 78, 228)",
            icon: "/css.png",
            boxShadow: "-80px -25px 60px rgba(38, 78, 228, 0.6), -5px -50px 40px rgba(38, 78, 228, 0.35)"
        },
        {
            name: "JavaScript",
            color: "#e8d44d",
            rgb: "rgb(232, 212, 77)",
            icon: "/javascript.png",
            boxShadow: "-80px -25px 60px rgba(232, 212, 77, 0.4), -5px -50px 60px rgba(232, 212, 77, 0.2)"
        },
        {
            name: "TypeScript",
            color: "#2f74c1",
            rgb: "rgb(47, 116, 193)",
            icon: "/typescript.png",
            boxShadow: "-80px -25px 60px rgba(47, 116, 193, 0.6), -5px -50px 40px rgba(47, 116, 193, 0.35)"
        },
        {
            name: "Node.js",
            color: "#86bc16",
            rgb: "rgb(134, 188, 22)",
            icon: "/nodejs.png",
            boxShadow: "-80px -25px 60px rgba(134, 188, 22, 0.6), -5px -50px 40px rgba(134, 188, 22, 0.35)"
        },
        {
            name: "MongoDB",
            color: "#11a54f",
            rgb: "rgb(17, 165, 79)",
            icon: "/mongodb.png",
            boxShadow: "-80px -25px 60px rgba(17, 165, 79, 0.6), -5px -50px 40px rgba(17, 165, 79, 0.35)"
        },
        {
            name: "React",
            color: "#5dd0fd",
            rgb: "rgb(93, 208, 253)",
            icon: "/react.png",
            boxShadow: "-80px -25px 60px rgba(93, 208, 253, 0.6), -5px -50px 40px rgba(93, 208, 253, 0.35)"
        },
        {
            name: "Next.js",
            color: "#000000",
            rgb: "rgb(0, 0, 0)",
            icon: "/nextjs.png",
            boxShadow: "-80px -25px 60px rgba(255, 255, 255, 0.6), -5px -50px 40px rgba(255, 255, 255, 0.35)"
        },
        {
            name: "Postgresql",
            color: "#2f648e",
            rgb: "rgb(47, 100, 142)",
            icon: "/postgresql.png",
            boxShadow: "-80px -25px 60px rgba(47, 100, 142, 0.6), -5px -50px 40px rgba(47, 100, 142, 0.35)"
        },
        {
            name: "Tailwind",
            color: "#00acc2",
            rgb: "rgb(0, 172, 194)",
            icon: "/tailwind.png",
            boxShadow: "-80px -25px 60px rgba(0, 172, 194, 0.6), -5px -50px 40px rgba(0, 172, 194, 0.35)"
        },
    ];

    useEffect(() => {
        if(currentElement > 10) return
        let shadowTimeout = null;
        if(currentBoxShadow === null)  {
            shadowTimeout = setTimeout(() => setCurrentBoxShadow(0), 1300)
        }


        const timeout = setTimeout(() => setCurrentElement(prev => prev + 1), currentElement > 0 ? 1300 : 1300)

        return () => {
            clearTimeout(timeout)
            if(shadowTimeout) {
                clearTimeout(shadowTimeout)
            }
        }
    }, [currentElement])
    
    useEffect(() => {
        if(currentBoxShadow === null) return
        
        if(currentBoxShadow === 9) {
            const timeout = setTimeout(() => setCurrentBoxShadow(0), currentElement > 0 ? 1300 : 1300)

            return () => clearTimeout(timeout)
        } else {
            const timeout = setTimeout(() => setCurrentBoxShadow(prev => prev! + 1), currentElement > 0 ? 1300 : 1300)

            return () => clearTimeout(timeout)
        }


    }, [currentBoxShadow])

    return (
        <div className="w-[250px] md:w-[300px] lg:w-[380px] xl:w-[460px] aspect-square relative grid grid-cols-1 grid-rows-1 rounded-full z-[51] 
        place-items-center flex-grow-0  -mt-10 md:-mt-[48px] lg:-mt-[64px] xl:-mt-20 2xl:-mt-24 -mr-8 xl:-mr-8 2xl:-mr-10">
            {currentBoxShadow !== null ? <div className="absolute bottom-3 right-2  md:right-8 2xl:right-12 w-16 lg:w-24 h-8 lg:h-12 -rotate-[13deg] glowing -skew-x-[44deg]"
            style={{
                boxShadow: techs[currentBoxShadow].boxShadow
            }}> 
            </div> : null}
            {currentElement > 0 ? <div className="w-[200px] lg:w-[250px] xl:w-[315px] 2xl:w-[360px] aspect-square animate-slowSpin z-[50] absolute flex-shrink-0 rotate-6">
                <Image src={techs[0].icon} width={32} height={32} alt="Icon" className="w-8 h-8 md:w-9 md:h-9 xl:w-12 xl:h-12 absolute bottom-0 right-2 stayUp" />
            </div> : null}
            {currentElement > 1 ? <div className="w-[200px] lg:w-[250px] xl:w-[315px] 2xl:w-[360px] aspect-square animate-slowSpin z-[50] absolute flex-shrink-0">
                <Image src={techs[1].icon} width={32} height={32} alt="Icon" className="w-8 h-8 md:w-9 md:h-9 xl:w-12 xl:h-12 absolute bottom-0 right-2 stayUp" />
            </div> : null}
            {currentElement > 2 ? <div className="w-[200px] lg:w-[250px] xl:w-[315px] 2xl:w-[360px] aspect-square animate-slowSpin z-[50] absolute flex-shrink-0">
                <Image src={techs[2].icon} width={32} height={32} alt="Icon" className="w-8 h-8 md:w-9 md:h-9 xl:w-12 xl:h-12 absolute bottom-0 right-2 stayUp" />
            </div> : null}
            {currentElement > 3 ? <div className="w-[200px] lg:w-[250px] xl:w-[315px] 2xl:w-[360px] aspect-square animate-slowSpin z-[50] absolute flex-shrink-0">
                <Image src={techs[3].icon} width={32} height={32} alt="Icon" className="w-8 h-8 md:w-9 md:h-9 xl:w-12 xl:h-12 absolute bottom-0 right-2 stayUp" />
            </div> : null}
            {currentElement > 4 ? <div className="w-[200px] lg:w-[250px] xl:w-[315px] 2xl:w-[360px] aspect-square animate-slowSpin z-[50] absolute flex-shrink-0">
                <Image src={techs[4].icon} width={32} height={32} alt="Icon" className="w-8 h-8 md:w-9 md:h-9 xl:w-12 xl:h-12 absolute bottom-0 right-2 stayUp" />
            </div> : null}
            {currentElement > 5 ? <div className="w-[200px] lg:w-[250px] xl:w-[315px] 2xl:w-[360px] aspect-square animate-slowSpin z-[50] absolute flex-shrink-0">
                <Image src={techs[5].icon} width={32} height={32} alt="Icon" className="w-8 h-8 md:w-9 md:h-9 xl:w-12 xl:h-12 absolute bottom-0 right-2 stayUp" />
            </div> : null}
            {currentElement > 6 ? <div className="w-[200px] lg:w-[250px] xl:w-[315px] 2xl:w-[360px] aspect-square animate-slowSpin z-[50] absolute flex-shrink-0">
                <Image src={techs[6].icon} width={32} height={32} alt="Icon" className="w-8 h-8 md:w-9 md:h-9 xl:w-12 xl:h-12 absolute bottom-0 right-2 stayUp" />
            </div> : null}
            {currentElement > 7 ? <div className="w-[200px] lg:w-[250px] xl:w-[315px] 2xl:w-[360px] aspect-square animate-slowSpin z-[50] absolute flex-shrink-0">
                <Image src={techs[7].icon} width={32} height={32} alt="Icon" className="w-8 h-8 md:w-9 md:h-9 xl:w-12 xl:h-12 absolute bottom-0 right-2 stayUp" />
            </div> : null}
            {currentElement > 8 ? <div className="w-[200px] lg:w-[250px] xl:w-[315px] 2xl:w-[360px] aspect-square animate-slowSpin z-[50] absolute flex-shrink-0">
                <Image src={techs[8].icon} width={32} height={32} alt="Icon" className="w-8 h-8 md:w-9 md:h-9 xl:w-12 xl:h-12 absolute bottom-0 right-2 stayUp" />
            </div> : null}
            {currentElement > 9 ? <div className="w-[200px] lg:w-[250px] xl:w-[315px] 2xl:w-[360px] aspect-square animate-slowSpin z-[50] absolute flex-shrink-0">
                <Image src={techs[9].icon} width={32} height={32} alt="Icon" className="w-8 h-8 md:w-9 md:h-9 xl:w-12 xl:h-12 absolute bottom-0 right-2 stayUp" />
            </div> : null}
        </div>
    )
}

export default Icons