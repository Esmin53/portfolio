import AboutMe from "@/components/AboutMe";
import Homepage from "@/components/Homepage";
import Projects from "@/components/Projects";
import TechStack from "@/components/TechStack";

export default function Home() {
  return (
    <div className="flex flex-col text-[#6a6f8f]">
      <Homepage />
      <TechStack />
      <Projects />
      <AboutMe />
    </div>
  );
}
