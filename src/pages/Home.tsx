import { About } from "../components/home/About";
import { AboutMe } from "../components/home/AboutMe";
import { Contact } from "../components/home/Contact";
// import { Experience } from "../components/home/Experience";
import { Projects } from "../components/home/Projects";
import { WorkSkills } from "../components/home/WorkSkills";
import { Header } from "../components/ui/Header";
import { Horizontal } from "../components/ui/Horizontal";

export const Home = () => {
  return (
    <div className="w-[90%]">
      <Header />
      <About />
      <Horizontal />
      <Projects />
      <Horizontal />
      <AboutMe />
      <Horizontal />
      <WorkSkills />
      {/* <Horizontal /> */}
      {/* <Experience /> */}
      <Horizontal />
      <Contact />
    </div>
  );
};
