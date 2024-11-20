import Homepage from "@/components/Homepage";
import ProjectPreview from "@/components/ProjectPreview";

export default function Home() {
  return (
    <div className="flex flex-col text-[#6a6f8f]">
      <Homepage />
      <div className='w-full flex flex-col'>
        <div className="w-full flex flex-col items-center justify-center gap-2 sm:gap-4 py-4">
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-semibold lg:ont-bold">My Projects</h1>
            <h2 className="text-xl text-center lg:text-3xl font-medium">Here are a few past projects I&apos;ve worked on.</h2>
        </div>
        <div className="w-full py-6 grid md:grid-cols-2 gap-4 lg:gap-6 mx-auto p-4 sm:p-8 xl:p-12 2xl:p-16">
        <ProjectPreview description="E-commerce website built with Next.js and Neon Postgres as the database, using DrizzleORM for efficient data management. It features real-time payment processing via Stripe, an immersive admin dashboard for CRUD operations, and rich data visualizations with Recharts. The product search page is server-side rendered using Next.js server components, ensuring optimized SEO and fast response times for a better user experience."
        title="Ecommerce Website" image="ecommerce-md.png" techStack={["nextjs.png", "typescript.png", "postgresql.png", "tailwind.png"]} />
        <ProjectPreview description="An online multiplayer Rummy game supporting up to 4 players, built with Next.js and Neon Postgres for database management, using DrizzleORM for efficient data handling. The game leverages WebSockets for real-time updates, providing a fast and immersive player experience."
        title="Online Rummy Game" image="snip.png" techStack={["nextjs.png", "typescript.png", "postgresql.png", "tailwind.png"]}/>
        <ProjectPreview description="Hotel bookings website built with Next.js and Neon Postgres as the database, using Prizma for efficient data management. It features  an immersive admin dashboard for CRUD operations, and rich data visualizations. The acommodation search page is server-side rendered using Next.js server components, ensuring optimized SEO and fast response times for a better user experience. It provides a rich experience for sellers/hosts and guests with customized homepage displaying accomodations sorted by popularity, rating,
        type of property and landscape, popularity of destination etc.
        Hotel bookings website built with Next.js and Neon Postgres as the database, using Prizma for efficient data management. It features  an immersive admin dashboard for CRUD operations, and rich data visualizations. The acommodation search page is server-side rendered using Next.js server components, ensuring optimized SEO and fast response times for a better user experience. It provides a rich experience for sellers/hosts and guests with customized homepage displaying accomodations sorted by popularity, rating,
        type of property and landscape, popularity of destination etc."
        title="Travelnest" image="travelnest-md3.png" techStack={["nextjs.png", "typescript.png", "postgresql.png", "tailwind.png"]}/>
        </div>
      </div>
    </div>
  );
}
