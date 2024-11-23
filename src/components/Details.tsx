import { Code2 } from "lucide-react"
import Image from "next/image"


const Details = () => {


    return (
        <div className="absolute bottom-0 left-4">
            
            <div className="absolute w-[30rem] lg:w-[40rem] h-56 rotate-[5deg] top-20 lg:top-[2.25rem] left-4 -z-10 opacity-50 flex items-center" style={{
                 background: "linear-gradient(to right, #ffc2d1 37%, #ffe5ec00 100%)",
                  clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 20%)",
                  boxShadow: "0.25px -0.5px 12px 4px rgba(249,168,212,0.75)"
            }}>
                <div className="h-full aspect-video rounded-full rotate-[20deg] ml-auto z-40 flex items-center justify-center"
                style={{background: "linear-gradient(to right, #ffc2d1 37%, #ffe5ec00 80%) z-20",
                    boxShadow: "0.25px -0.5px 12px 4px rgba(249,168,212,0.25)"
                }}>
                </div>
            </div>
        </div>
    )
}

export default Details