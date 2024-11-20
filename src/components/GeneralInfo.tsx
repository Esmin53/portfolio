import { ArrowRight } from "lucide-react"
import Image from "next/image"
import TypeWriter from "./TypeWriter"


const GeneralInfo = () => {
    
    return (
        <div className='flex-1 flex flex-col gap-2 z-20 items-center lg:items-start'>
        <h1 className='text-4xl md:text-5xl xl:text-6xl font-semibold text-center lg:text-start'>Hey, I&apos;m <span className=''>Esmin Tufekčić.</span></h1>
        <h1 className='text-4xl md:text-5xl xl:text-6xl font-bold text-center lg:text-start'>Full Stack <span className='text-pink-300 main-text-glow'>Web Developer.</span> </h1>
        <TypeWriter />
        <div className='lg:w-full flex items-center justify-center lg:justify-end gap-4 p-4 absolute top-0 right-0 lg:relative'>
            <Image src="/github3.png" alt='Github Icon' width={48} height={48} className='cursor-pointer w-8 h-8 sm:w-10 sm:h-10 xl:w-12 xl:h-12' />
            <Image src="/facebook2.png" alt='Facebook Icon' width={48} height={48} className='cursor-pointer w-8 h-8 sm:w-10 sm:h-10 xl:w-12 xl:h-12' />
            <Image src="/instagram2.png" alt='Instagram Icon' width={48} height={48} className='cursor-pointer w-8 h-8 sm:w-10 sm:h-10 xl:w-12 xl:h-12' />
            <Image src="/gmail.png" alt='Gmail Icon' width={48} height={48} className='cursor-pointer w-8 h-8 sm:w-10 sm:h-10 xl:w-12 xl:h-12' />
        </div>
        <div className='flex gap-6 items-center py-4 flex-wrap'>
            <div className='flex gap-1 items-center cursor-pointer'>
                <ArrowRight /> 
                <p className='md:text-xl text-lg font-medium'>See my projects</p>
            </div>
            <div className='flex gap-1 items-center cursor-pointer'>
                <ArrowRight /> 
                <p className='md:text-xl text-lg font-medium'>More about me</p>
            </div>
        </div>
        <div className='w-fit grid grid-flow-col-dense items-center justify-center lg:justify-start gap-2 p-4 absolute 
        bottom-0  lg:relative'>
            <Image src="/html.png" alt='Github Icon' width={48} height={48} className='cursor-pointer w-8 h-8 md:w-12 md:h-12 aspect-square' />
            <Image src="/css.png" alt='Facebook Icon' width={48} height={48} className='cursor-pointer w-8 h-8 md:w-12 md:h-12' />
            <Image src="/javascript.png" alt='Instagram Icon' width={48} height={48} className='cursor-pointer w-8 h-8 md:w-12 md:h-12' />
            <Image src="/typescript.png" alt='Gmail Icon' width={48} height={48} className='cursor-pointer w-8 h-8 md:w-12 md:h-12' />
            <Image src="/react.png" alt='Github Icon' width={48} height={48} className='cursor-pointer w-8 h-8 md:w-12 md:h-12' />
            <Image src="/nodejs.png" alt='Facebook Icon' width={48} height={48} className='cursor-pointer w-8 h-8 md:w-12 md:h-12' />
            <Image src="/mongodb.png" alt='Facebook Icon' width={48} height={48} className='cursor-pointer w-8 h-8 md:w-12 md:h-12' />
            <Image src="/nextjs.png" alt='Instagram Icon' width={48} height={48} className='cursor-pointer w-8 h-8 md:w-12 md:h-12' />
            <Image src="/postgresql.png" alt='Instagram Icon' width={48} height={48} className='cursor-pointer w-8 h-8 md:w-12 md:h-12' />
            <Image src="/tailwind.png" alt='Gmail Icon' width={48} height={48} className='cursor-pointer w-8 h-8 md:w-12 md:h-12' />
        </div>
    </div>
    )
}

export default GeneralInfo