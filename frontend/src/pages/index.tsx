import { About } from "@/components/about";
import { Experience } from "@/components/experience";
import { Header } from "@/components/header";
import { Projects } from "@/components/projects";
import { Testimonials } from "@/components/store";
import { WorkExperience } from "@/components/work";

export default function Home() {

  return (
    <>
      <Header />
      <About />
      <Experience />
      <WorkExperience />
      <Projects />
      <Testimonials />
    </>
  )
}
