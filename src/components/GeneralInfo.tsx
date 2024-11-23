import { ArrowRight } from "lucide-react"
import Image from "next/image"
import TypeWriter from "./TypeWriter"


const GeneralInfo = () => {
    
    return (
        <div className='flex-1 flex flex-col gap-1 md:gap-2 z-20 justify-center items-center md:items-start'>

        <p className="text-2xl md:text-3xl font-medium">Hey, my name is</p>
        <h1 className='text-5xl md:text-5xl xl:text-7xl font-semibold text-center md:text-start relative md:pl-3 lg:pl-4 py-1'>
            Esmin Tufekčić.
            </h1>
        <h1 className='text-3xl sm:text-4xl lg:text-5xl xl:text-5xl font-bold text-center md:text-start md:pl-8 lg::pl-12'>Full Stack <span className='text-pink-300 main-text-glow'>Web Developer.</span> </h1>
        <TypeWriter />
        <div className='w-full hidden md:flex items-center justify-end gap-2 md:gap-4 p-2 md:p-4 relative lg:my-6'>
            <Image src="/github3.png" alt='Github Icon' width={48} height={48} className='cursor-pointer w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12' />
            <Image src="/linkedin.png" alt='Linkedin Icon' width={48} height={48} className='cursor-pointer w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12' />
            <Image src="/gmail.png" alt='Gmail Icon' width={48} height={48} className='cursor-pointer w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12' />
        </div>
        <div className='flex gap-7 items-center flex-wrap'>
            <div className="flex gap-1 items-center cursor-pointer group relative">
                <ArrowRight />
                <p className="md:text-xl text-lg font-medium">See my projects</p>
                <span className="absolute left-0 -bottom-1.5 w-0 h-[2px] bg-[#6a6f8f] transition-all duration-300 group-hover:w-full" />
            </div>
            <div className="flex gap-1 items-center cursor-pointer group relative">
                <ArrowRight /> 
                <p className='md:text-xl text-lg font-medium'>More about me</p>
                <span className="absolute left-0 -bottom-1.5 w-0 h-[2px] bg-[#6a6f8f] transition-all duration-300 group-hover:w-full" />
            </div>
        </div>
    </div>
    )
}

export default GeneralInfo