import { Code2, Terminal } from "lucide-react"
import ProjectPreview from "./ProjectPreview"
import MobileProjectPreview from "./MobileProjectPreview"


const Projects = () => {

    return (
        <div className='w-full flex flex-col' id="projects">
        <div className="w-full flex flex-col items-start justify-start">
            <div className="w-full flex justify-start items-center px-4 lg:px-8 xl:px-12 2xl:px-16 relative">
                <div className="w-full flex flex-col gap-2 mt-8 mb-4 ">
                    <div className="flex items-center justify-between">
                        <h1 className="text-5xl lg:text-6xl font-semibold ">My Projects</h1>
                    </div>
                    <div className="w-5/6 max-w-xl h-0 shadow-glowing border border-pink-200 border-opacity-60 block mt-3 mr-auto" />
                    <h2 className="text-xl md:text-2xl max-w-2xl">A selection of projects I&apos;ve worked on in the past.</h2>
                </div>
            </div>

        </div>

        <div className="w-full py-6 flex flex-col gap-8 lg:gap-12 mx-auto p-4 sm:p-8 xl:p-12 2xl:p-16">
        {/* Ecommerce */}
        <ProjectPreview description="E-commerce website built with Next.js and Neon Postgres as the database, using DrizzleORM for efficient data management. It features real-time payment processing via Stripe, an immersive admin dashboard for CRUD operations, and rich data visualizations with Recharts. The product search page is server-side rendered using Next.js server components, ensuring optimized SEO and fast response times for a better user experience."
            title="Cottonwood" subTitle="Ecommerce website."
            image="ecommerce" demo="https://e-commerce-three-theta-97.vercel.app/" git="https://github.com/Esmin53/e-commerce"
            techStack={["nextjs.png", "typescript.png", "postgresql.png", "tailwind.png"]} />
        <div className="w-full flex items-center justify-between">
            <div className="w-4/5 h-1 bg-[#6a6f8f] " />
            <Code2 className="text-red-600 w-7 h-7"/>
        </div>
        {/* Rummy Online */}
        <ProjectPreview description="An online multiplayer Rummy game supporting up to 4 players, built with Next.js and Neon Postgres for database management, using DrizzleORM for efficient data handling. The game leverages WebSockets for real-time updates, providing a fast and immersive player experience."
            title="Rummy Online" subTitle="Online multiplayer game."
            image="rummy" demo="https://remi-two.vercel.app/" git="https://github.com/Esmin53/remi"
            techStack={["nextjs.png", "typescript.png", "postgresql.png", "tailwind.png"]} className="lg:flex-row-reverse"/>
        <div className="w-full flex items-center justify-between">
            <Terminal className="text-[#429ccf] w-7 h-7" />
            <div className="w-4/5 h-1 bg-[#6a6f8f] " />
        </div>
        {/* Pixel Vault */}
        <ProjectPreview description="Built with React (Vite) and Node.js + Express, using MongoDB for flexible data storage and Zustand for streamlined state management. The platform features a secure JWT-based authentication flow, ensuring protected routes for buyers and sellers.
        The product search and listings are optimized for performance, with a responsive UI powered by Tailwind CSS. Sellers benefit from an intuitive dashboard to manage inventory, while buyers enjoy a seamless shopping experience with a Zustand-powered cart that persists across sessions.
        Stripe integration enables smooth, secure payments—supporting one-time purchases and subscriptions, with real-time order tracking. The system processes transactions via webhooks, ensuring reliability.
        Guests see a personalized homepage showcasing trending products, top-rated items, and curated collections, enhancing discoverability."
        title="PixelVault" subTitle="Digital Marketplace."
        image="pixelvault" demo="https://digital-marketplace-gfe2.onrender.com/" git="https://github.com/Esmin53/digital-marketplace"
        techStack={["nodejs.png", "react.png", "mongodb.png", "tailwind.png", "typescript.png"]}/>
        <div className="w-full flex items-center justify-between">
            <div className="w-4/5 h-1 bg-[#6a6f8f] " />
            <Code2 className="text-red-600 w-7 h-7"/>
        </div>
        {/* Travel Nest */}
        <ProjectPreview description="Hotel bookings website built with Next.js and Neon Postgres as the database, using Prizma for efficient data management. It features  an immersive admin dashboard for CRUD operations, and rich data visualizations. The acommodation search page is server-side rendered using Next.js server components, ensuring optimized SEO and fast response times for a better user experience. It provides a rich experience for sellers/hosts and guests with customized homepage displaying accomodations sorted by popularity, rating,
        type of property and landscape, popularity of destination etc.
        Hotel bookings website built with Next.js and Neon Postgres as the database, using Prizma for efficient data management. It features  an immersive admin dashboard for CRUD operations, and rich data visualizations. The acommodation search page is server-side rendered using Next.js server components, ensuring optimized SEO and fast response times for a better user experience. It provides a rich experience for sellers/hosts and guests with customized homepage displaying accomodations sorted by popularity, rating,
        type of property and landscape, popularity of destination etc."
        title="Travelnest" subTitle="Hotel bookings website." className="lg:flex-row-reverse"
        image="travelnest" demo="https://travel-nest-av13.vercel.app/" git="https://github.com/Esmin53/TravelNest"
        techStack={["nextjs.png", "typescript.png", "postgresql.png", "tailwind.png"]}/>
        <div className="w-full flex items-center justify-between">
            <Terminal className="text-[#429ccf] w-7 h-7" />
            <div className="w-4/5 h-1 bg-[#6a6f8f] " />
        </div>
        {/* E Book Reader */}
        <MobileProjectPreview title="E Book Reader" subtitle="Mobile app for reading e-books" image="ebookreader" 
        description="A feature-rich e-book reader app built with React Native, designed for a seamless reading experience. The app allows users to easily add books from their phone storage using SQLite, with options to edit book details and delete books. It supports both dark and light modes for personalized reading preferences, and enables PDF and e-book file reading. Users can search for books, create and manage bookshelves, and add or remove books from shelves. The app remembers the last read page of each book, along with other book-related data, all stored in SQLite. Books can be sorted by title, author, or in alphabetical order (both ascending and descending) for easier navigation."
        images={["image5.jpg", "image4.jpg", "image3.jpg", "image2.jpg", "image1.jpg"]} git='https://github.com/Esmin53/e-book-reader'/>
        <div className="w-full flex items-center justify-between">
            <div className="w-4/5 h-1 bg-[#6a6f8f] " />
            <Code2 className="text-red-600 w-7 h-7"/>
        </div>
        <ProjectPreview description="
Live chat website built with Next.js and Neon Postgres as the database, using Prisma ORM for efficient and scalable data management. It features secure authentication via OAuth and Google Auth, ensuring a seamless login experience for users. The platform integrates Pusher for WebSocket-based real-time messaging and notifications, delivering instant updates and a responsive user experience. "
            title="Vibe" subTitle="Real time chat website."
            image="vibee" demo="https://vibee.vercel.app/" git="https://github.com/Esmin53/Vibee"
            techStack={["nextjs.png", "typescript.png", "postgresql.png", "tailwind.png"]} className="lg:flex-row-reverse"/>
        </div>
      </div>
    )
}

export default Projects