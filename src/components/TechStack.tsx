import { TECHS } from "@/lib/data";
import { Braces, Code2, Terminal } from "lucide-react";
import Image from "next/image";


const TechStack = () => {

    return (
        <div className="w-full flex flex-col gap-6 md:gap-8 my-8">
            <div className="w-full">
                <div  className="w-3/4 md:w-4/6 bg-slate-400 h-0.5 ml-auto mb-4"/>
                <div  className="w-4/6 md:w-3/6 bg-slate-400 h-0.5 mx-auto mb-4"/>
                <div  className="w-3/4 md:w-4/6 bg-slate-400 h-0.5 mr-auto "/>
            </div>
            <div className="w-full flex flex-col gap-2 items-center justify-center relative py-16 px-4 lg:px-8 xl:px-12 2xl:px-16
            overflow-hidden">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold  w-full text-start z-30 pl-2">My Tech Stack</h1>
                <div className="w-5/6 max-w-2xl h-0 shadow-glowing border border-pink-200 border-opacity-60 block mt-3 mr-auto" />
                <div className="w-full flex justify-center gap-4 md:py-2 relative z-10 md:px-16 ">
                    <Image src={"/laptop3.png"} width={150} height={150} alt='laptop' className='absolute opacity-50 
                    left-2 2xl:left-12 -bottom-10 -rotate-12 z-20 md:w-[200px] md:h-[200px]' />
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 rounded flex-1 max-w-6xl place-content-center 
                    gap-2 md:gap-4 p-2 md:p-4 ">
                        {TECHS.map((item) => <div key={item.name} className=" grainy h-14 md:h-16 lg:h-20 w-full rounded-lg flex items-center 
                        justify-center gap-1 shadow border-2 border-slate-300 z-30" >
                            <Image src={item.icon} width={36} height={36} alt="Icon" className="" />
                            <p className={`text-lg lg:text-xl font-semibold`}
                            style={{color: item.color}}>{item.name}</p>
                        </div>)}
                    </div>
                    <Image src={"/laptop3.png"} width={130} height={130} alt='laptop' className='absolute opacity-45 scale-x-[-1] 
                    right-10 -top-20 md:-top-16 -rotate-45 md:-rotate-[30deg]  md:w-[200px] md:h-[200px]' />
                </div>
                <div className="flex gap-3 md:gap-6 ml-auto">
                            <Braces className=" h-8 md:h-10 w-8 md:w-10 text-pink-300 opacity-65" />
                            <Code2 className=" h-8 md:h-10 w-8 md:w-10 text-pink-300 opacity-65" />
                            <Terminal className=" h-8 md:h-10 w-8 md:w-10 text-pink-300 opacity-65" />
                    </div>
            </div>
            <div className="w-full">
                <div  className="w-3/4 md:w-4/6 bg-slate-400 h-0.5 ml-auto mb-4"/>
                <div  className="w-4/6 md:w-5/6 bg-slate-400 h-0.5 mx-auto mb-4"/>
                <div  className="w-3/4 md:w-4/6 bg-slate-400 h-0.5 mr-auto "/>
            </div>
        </div>
    )
}

export default TechStack;