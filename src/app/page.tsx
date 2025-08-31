import AboutMe from "@/components/AboutMe";
import Homepage from "@/components/Homepage";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <div className="flex flex-col text-[#6a6f8f]" id="top">
      <Homepage />
      <AboutMe />
      <Projects />
    </div>
  );
}
