import { Code2, Terminal } from "lucide-react"
import ProjectPreview from "./ProjectPreview"


const Projects = () => {

    return (
        <div className='w-full flex flex-col'>
        <div className="w-full flex flex-col items-start justify-start">
            <div className="w-full flex justify-start items-center px-4 lg:px-8 xl:px-12 2xl:px-16 relative">
                <div className="w-full flex flex-col gap-2 mt-8 mb-4 ">
                    <div className="flex items-center justify-between">
                        <h1 className="text-5xl lg:text-6xl font-semibold ">My Projects</h1>
                    </div>
                    <div className="w-5/6 max-w-xl h-0 shadow-glowing border border-pink-200 border-opacity-60 block mt-3 mr-auto" />
                    <h2 className="text-xl md:text-2xl max-w-2xl">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit doloribus ut numquam ex?</h2>
                </div>
            </div>

        </div>

        <div className="w-full py-6 flex flex-col gap-8 lg:gap-12 mx-auto p-4 sm:p-8 xl:p-12 2xl:p-16">
        <ProjectPreview description="E-commerce website built with Next.js and Neon Postgres as the database, using DrizzleORM for efficient data management. It features real-time payment processing via Stripe, an immersive admin dashboard for CRUD operations, and rich data visualizations with Recharts. The product search page is server-side rendered using Next.js server components, ensuring optimized SEO and fast response times for a better user experience."
            title="Cottonwood" subTitle="Ecommerce website."
            image="ecommerce" demo="https://e-commerce-three-theta-97.vercel.app/" git="https://github.com/Esmin53/e-commerce"
            techStack={["nextjs.png", "typescript.png", "postgresql.png", "tailwind.png"]} />
        <div className="w-full flex items-center justify-between">
            <div className="w-4/5 h-1 bg-[#6a6f8f] " />
            <Code2 className="text-red-600 w-7 h-7"/>
        </div>
        <ProjectPreview description="An online multiplayer Rummy game supporting up to 4 players, built with Next.js and Neon Postgres for database management, using DrizzleORM for efficient data handling. The game leverages WebSockets for real-time updates, providing a fast and immersive player experience."
            title="Rummy Online" subTitle="Online multiplayer game."
            image="rummy" demo="https://remi-two.vercel.app/" git="https://github.com/Esmin53/remi"
            techStack={["nextjs.png", "typescript.png", "postgresql.png", "tailwind.png"]} className="lg:flex-row-reverse"/>
        <div className="w-full flex items-center justify-between">
            <Terminal className="text-[#429ccf] w-7 h-7" />
            <div className="w-4/5 h-1 bg-[#6a6f8f] " />
        </div>
        <ProjectPreview description="Hotel bookings website built with Next.js and Neon Postgres as the database, using Prizma for efficient data management. It features  an immersive admin dashboard for CRUD operations, and rich data visualizations. The acommodation search page is server-side rendered using Next.js server components, ensuring optimized SEO and fast response times for a better user experience. It provides a rich experience for sellers/hosts and guests with customized homepage displaying accomodations sorted by popularity, rating,
        type of property and landscape, popularity of destination etc.
        Hotel bookings website built with Next.js and Neon Postgres as the database, using Prizma for efficient data management. It features  an immersive admin dashboard for CRUD operations, and rich data visualizations. The acommodation search page is server-side rendered using Next.js server components, ensuring optimized SEO and fast response times for a better user experience. It provides a rich experience for sellers/hosts and guests with customized homepage displaying accomodations sorted by popularity, rating,
        type of property and landscape, popularity of destination etc."
        title="Travelnest" subTitle="Hotel bookings website."
        image="travelnest" demo="https://travel-nest-av13.vercel.app/" git="https://github.com/Esmin53/TravelNest"
        techStack={["nextjs.png", "typescript.png", "postgresql.png", "tailwind.png"]}/>
        </div>
      </div>
    )
}

export default Projects