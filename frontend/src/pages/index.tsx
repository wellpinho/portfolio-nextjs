import { About } from "@/components/about";
import { Experience } from "@/components/experience";
import { Header } from "@/components/header";
import { WorkExperience } from "@/components/work";

export default function Home() {

  return (
    <>
      <Header />
      <About />
      <Experience />
      <WorkExperience />
    </>
  )
}
