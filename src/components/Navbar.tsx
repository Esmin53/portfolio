import { Code2, Sun } from "lucide-react"


const Navbar = () => {

    return (
        <div className="w-full h-20 fixed top-0 hidden sm:flex items-center px-4 lg:px-8 xl:px-12 2xl:px-16 justify-between">
            <Code2 className="w-10 h-10" />
            <ul className="flex text-xl gap-8 font-medium">
                <li>Homepage</li>
                <li>Projects</li>
                <li>About Me</li>
            </ul>
            <Sun className="w-10 h-10 z-[70]"/>
        </div>
    )
}

export default Navbar