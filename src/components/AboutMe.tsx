import { TECHS } from "@/lib/data"
import { Braces, Code2, LucideFileDown, Mail, Phone, Terminal } from "lucide-react"
import Image from "next/image"


const AboutMe = () => {
    return (
        <div className="w-full flex flex-col gap-6 md:gap-8 my-8" >
            <div className="w-full">
                <div  className="w-3/4 md:w-4/6 bg-slate-400 h-0.5 ml-auto mb-4"/>
                <div  className="w-4/6 md:w-3/6 bg-slate-400 h-0.5 mx-auto mb-4"/>
                <div  className="w-3/4 md:w-4/6 bg-slate-400 h-0.5 mr-auto "/>
            </div>
            <div className="w-full flex flex-col gap-4 py-8 relative px-4 lg:px-8 xl:px-12 2xl:px-16" id="aboutme">
            <div className="w-full flex flex-col gap-2 items-center justify-center relative">
            <div className="flex-1 flex flex-col gap-2" id='about-me'>
                <h1 className="text-5xl lg:text-6xl font-bold w-full text-start z-30 pl-2">About me</h1>
                <div className="w-3/6 max-w-2xl h-0 shadow-glowing border border-pink-200 border-opacity-60 block mt-3 mr-auto" />
                <p className="text-lg md:text-xl font-medium my-2">
                    As someone aspiring to pursue a career in development, I am deeply motivated by a steadfast work ethic and a relentless pursuit of exellence. I approcah each new challenge with enthusiasm and determination viewing them as opportunities for growth and learning.
                    I specialize in modern technologies like TypeScript, JavaScript, React, Next.js, Node.js, MongoDB, PostgreSQL, and Tailwind CSS, delivering optimized performance and seamless user experiences. I&apos;m also skilled in React Native, enabling me to create mobile applications alongside web solutions.
                    What excites me most is solving real-world challenges through code. Whether it&apos;s crafting a sleek e-commerce platform or engineering a real-time chat application, I thrive on bringing innovative ideas to life and making a tangible impact.<br />
                    Fluent in both spoken and written English, with strong communication skills.
                </p>
                <div className="pl-4 flex flex-col gap-2">
                    <h2 className="text-xl md:text-2xl font-semibold">Education</h2>
                    <p className="md:text-xl pl-4"><span className="font-semibold">2021 - present</span> <br />
                    Ipi Akademija - Information Technology
                    </p>
                </div>
                <div className="pl-4 flex flex-col gap-2">
                    <h2 className="text-xl md:text-2xl font-semibold">Contacts</h2>
                    <div className="flex gap-2 md:text-xl pl-4">
                        <Phone className="w-5 h-5 md:w-6 md:h-6"/>
                        <p>062 176 121</p>
                    </div>
                    <a href="https://mail.google.com/mail/?view=cm&fs=1&to=tufekcic.esmin@gmail.com" target="_blank" className="flex gap-2 md:text-xl pl-4">
                        <Mail className="w-5 h-5 md:w-6 md:h-6"/>
                        <p>tufekcic.esmin@gmail.com</p>
                    </a>
                    <a href="https://www.linkedin.com/in/esmin-tufek%C4%8Di%C4%87-628130347" target="_blank" className="flex gap-2 md:text-xl pl-4">
                        <Image src={'/linkedin.png'} alt="Linkedin logo" width={24} height={24}/>
                        <p>Linkedin</p>
                    </a>
                    <a href="https://github.com/Esmin53" target="_blank" className="flex gap-2 md:text-xl pl-4">
                        <Image src={'/github3.png'} alt="Github logo" width={24} height={24}/>
                        <p>Github</p>
                    </a>
                    <a href="/esmintufekciccv.pdf" className="flex gap-2 md:text-xl pl-4 text-blue-500 cursor-pointer" download="Esmin-Tufekcic-CV.pdf">
                        <LucideFileDown className="w-5 h-5 md:w-6 md:h-6"/>
                        <p>Download my CV</p>
                    </a>
                </div>
            </div>
            </div>

            <div className="flex gap-3 md:gap-6 mx-auto">
                            <Braces className=" h-8 md:h-10 w-8 md:w-10 text-pink-300 opacity-65" />
                            <Code2 className=" h-8 md:h-10 w-8 md:w-10 text-pink-300 opacity-65" />
                            <Terminal className=" h-8 md:h-10 w-8 md:w-10 text-pink-300 opacity-65" />
                    </div>
            {/*Tech Stack */}
            <div className="w-full flex flex-col gap-2 items-center justify-center relative
            overflow-hidden pb-16">
                <h1 className="text-5xl lg:text-6xl font-bold w-full text-start z-30 pl-2">My Tech Stack</h1>
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

export default AboutMe