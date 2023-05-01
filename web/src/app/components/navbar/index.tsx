import Image from "next/image"
import Link from "next/link"

export const Navbar = () => {
    return (
        <div className="bg-white fixed w-full z-50">
            <nav className="container mx-auto pt-2 pb-2">
                <div className="md:flex">
                    <div className="flex md:flex-shrink-0 justify-center max-w-200">
                        <Link href="/">
                            <Image 
                                width={100} 
                                height={50} 
                                src="/assets/logo.svg" 
                                alt="Woman paying for a purchase" 
                            />
                        </Link>
                    </div>

                    <ul className="flex md:flex-row items-center w-full md:justify-end justify-center">
                        <li className="mr-3"><a href="/about">About</a></li>
                        <li className="mr-3"><a href="/experience">Experience</a></li>
                        <li className="mr-3"><a href="/work">Work</a></li>
                        <li className="mr-3"><a href="/testimonials">Testimonials</a></li>
                        <li className="mr-3"><a href="/contact">Contact</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}
