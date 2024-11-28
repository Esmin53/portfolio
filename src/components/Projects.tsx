import { Code2, Terminal } from "lucide-react"
import ProjectPreview from "./ProjectPreview"


const Projects = () => {

    return (
        <div className='w-full flex flex-col'>
        <div className="w-full flex flex-col items-center justify-center gap-2 sm:gap-4 py-4">
            <h1 className="text-4xl md:text-5xl xl:text-7xl font-semibold lg:ont-bold">My Projects</h1>
            <h2 className="text-xl text-center lg:text-3xl font-medium">Here are a few past projects I&apos;ve worked on.</h2>
        </div>
        <div className="w-full py-6 flex flex-col gap-8 lg:gap-12 mx-auto p-4 sm:p-8 xl:p-12 2xl:p-16">
        <ProjectPreview description="E-commerce website built with Next.js and Neon Postgres as the database, using DrizzleORM for efficient data management. It features real-time payment processing via Stripe, an immersive admin dashboard for CRUD operations, and rich data visualizations with Recharts. The product search page is server-side rendered using Next.js server components, ensuring optimized SEO and fast response times for a better user experience."
            title="Cottonwood & Co" subTitle="Ecommerce website."
            image="ecommerce" 
            techStack={["nextjs.png", "typescript.png", "postgresql.png", "tailwind.png"]} />
        <div className="w-full flex items-center justify-between">
            <div className="w-4/5 h-0.5 bg-[#6a6f8f] " />
            <Code2 className="text-red-600 w-7 h-7"/>
        </div>
        <ProjectPreview description="An online multiplayer Rummy game supporting up to 4 players, built with Next.js and Neon Postgres for database management, using DrizzleORM for efficient data handling. The game leverages WebSockets for real-time updates, providing a fast and immersive player experience."
            title="Rummy Online" subTitle="Online multiplayer game."
            image="rummy" 
            techStack={["nextjs.png", "typescript.png", "postgresql.png", "tailwind.png"]} className="lg:flex-row-reverse"/>
        <div className="w-full flex items-center justify-between">
            <Terminal className="text-[#429ccf] w-7 h-7" />
            <div className="w-4/5 h-0.5 bg-[#6a6f8f] " />
        </div>
        <ProjectPreview description="Hotel bookings website built with Next.js and Neon Postgres as the database, using Prizma for efficient data management. It features  an immersive admin dashboard for CRUD operations, and rich data visualizations. The acommodation search page is server-side rendered using Next.js server components, ensuring optimized SEO and fast response times for a better user experience. It provides a rich experience for sellers/hosts and guests with customized homepage displaying accomodations sorted by popularity, rating,
        type of property and landscape, popularity of destination etc.
        Hotel bookings website built with Next.js and Neon Postgres as the database, using Prizma for efficient data management. It features  an immersive admin dashboard for CRUD operations, and rich data visualizations. The acommodation search page is server-side rendered using Next.js server components, ensuring optimized SEO and fast response times for a better user experience. It provides a rich experience for sellers/hosts and guests with customized homepage displaying accomodations sorted by popularity, rating,
        type of property and landscape, popularity of destination etc."
        title="Travelnest" subTitle="Hotel bookings website."
        image="travelnest" 
        techStack={["nextjs.png", "typescript.png", "postgresql.png", "tailwind.png"]}/>
        </div>
      </div>
    )
}

export default Projects