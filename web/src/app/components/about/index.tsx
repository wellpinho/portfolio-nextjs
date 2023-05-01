import Image from "next/image"

export const About = () => {
    return (
        <section className="container mx-auto p-4 py-6 h-screen flex md:flex-row md:items-center">
            <div className="basis-2/3 text-white md:mt-54">
                <h2 className="text-3xl w-36 mb-4 text-white">About me <hr /></h2>
                <p className="mb-4 text-mediumGray">
                    Hello! My name is Wellington and I like to create things that add value and automate manual services. <br />
                    My interest in web development started in 2010 when I decided to automate all processes in a restaurant, 
                    from the customer&apos;s order at the table to the dish made in the kitchen where I worked. 
                    That&apos;s right I was a sushi man for 5 years. <br /> I found that automating manual and repetitive work like customer service opened my mind to endless possibilities!
                </p>

                <p className="mb-4 text-white">Here are a few technologies I&apos;ve been working with recently:</p>
                <ul className="flex w-80 text-mediumGray">
                    <div className="basis-1/2">
                        <li>Javascript (ES23)</li>
                        <li>AWS</li>
                        <li>Node.js</li>
                        <li>MongoDB</li>
                    </div>
                    <div className="basis-1/2">
                        <li>Prisma.io</li>
                        <li>Next.js</li>
                        <li>Tailwindcss</li>
                        <li>Typescript</li>
                    </div>
                </ul>
            </div>
            <div className="basis-1/3 md:mt-30 flex justify-center">
                <Image 
                    className="rounded-full border-4 p-1 drop-shadow-2xl"
                    src="/assets/me.jpeg" 
                    width={200} 
                    height={200} 
                    alt="wellington pinho" 
                />
            </div>
        </section>
    )
}