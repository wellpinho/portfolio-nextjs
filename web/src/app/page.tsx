import { About } from './components/about'
import { Button } from './components/buttons'
import { Experience } from './components/experience'
import { Navbar } from './components/navbar'

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="bg-gradient-to-r from-gray-900 from-0% to-emerald-900 to-90%">
        <header className='
          header 
          h-screen 
          md:bg-[url("/assets/banner3.jpg")] bg-cover
          opacity-20
        '>
        </header>
      </div>

      <div className="flex flex-col items-center absolute top-96 w-full">
        <h1 className='
          heading_main
          tracking-[.78rem]
          text-6xl 
          text-white 
          font-bold
        '>Wellington Pinho</h1>

        <h2 className='
          heading_sub
          text-3xl 
          tracking-[1.5rem] 
          text-white
        '>Software Engineer</h2>
        <span className='animatedText max-w-md mt-2 text-gray-100 text-lg'>
        Specializing in creating products with global impact and accessible to 
        millions of people around the world.
        </span>

        <Button 
          title='Resume' 
          link='/cv-wellington.pdf' 
          bgColor='bg-white' 
          textColor='text-mediumGreen'
        />
      </div>

      <main>
        <div className="bg-darkBlue">
          <About />
        </div>

        <div className='h-screen py-4 bg-gradient-to-r from-gray-900 from-0% to-emerald-900 to-90%'>
          <Experience />
        </div>
      </main>
    </>
  )
}
