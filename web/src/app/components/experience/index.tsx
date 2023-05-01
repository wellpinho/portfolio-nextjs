import Link from "next/link"
import { Expriences } from "../objects"
import moment from 'moment'
import Image from "next/image";

export const Experience = () => {
  const year = moment().format('YYYY');
  const month = moment().format('MM');
  const expertise = Number(year) - 2010
  let totalMonth = 12 - Number(month)
  
  if (totalMonth === 12) {
    totalMonth = 0;
  }

    return (
        <div className='container mx-auto py-4'>
          <h2 className='text-white text-4xl font-bold mb-4'>My journey</h2>
          <div className="flex flex-row items-center mt-8 mb-8">
            <h2 className="text-customYellow text-6xl font-extrabold">{expertise}.{totalMonth}</h2>
            <span className="text-white">Years of Experience as a software engineer</span>
          </div>

          {Expriences.map((experience, exp) => (
            <div
              key={exp}
              className="
                w-full 
                bg-darkGray-700 
                mt-1 
                mb-1 
                p-4 
                rounded-sm
                md:hover:
              ">
              <ul className="grid grid-cols-4 text-white">
                <li className="flex items-center">
                    <Image className="rounded-full border-2 p-1 mr-4" width={70} height={70} src={experience.logo} alt={experience.companyName} />
                    <div className="flex flex-col">
                      <span className='text-customYellow font-extrabold text-lg'>{experience.companyName}</span>
                      {experience.date}
                    </div>
                </li>

                  <li className="col-span-2 md:mt-2">
                    <span className="text-white text-lg mr-4 flex flex-col">{experience.position}</span>
                    <span className="text-white text-xs">{experience.competence}</span>
                  </li>

                  <li className="flex justify-center items-center">
                    <Link className="text-customYellow" href={experience.link}>Go to website</Link>
                  </li>
              </ul>
            </div>
          ))}

          <div className='{styles.shape}'>
            <svg width="1500" height="1500" viewBox="0 0 1500 1500" fill="none">
              <g opacity="0.45" filter="url(#filter0_f_39_4214)">
                <circle cx="750" cy="750" r="200" />
              </g>
              <defs>
                <filter id="filter0_f_39_4214" x="0" y="0" width="1500" height="1500"
                  filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                  <feGaussianBlur stdDeviation="275" result="effect1_foregroundBlur_39_4212" />
                </filter>
              </defs>
            </svg>
          </div>
      </div>
    )
}