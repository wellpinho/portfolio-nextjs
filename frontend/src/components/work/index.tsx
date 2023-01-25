import Link from 'next/link';
import styles from './experience.module.scss'
import { Expriences } from '@/objects'

const WorkExperience = () => {
  return (
    <div className={`${styles.section_work} section-padding`}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-12">
            <h2 className='tag_title'>My work experiences</h2>
          </div>
        </div>
        <div className={styles.work_wrap}>
          <div className="row">
            {Expriences.map((exprience, exp) => (
              <div className="col-12" key={exp}>
                <div className={styles.work_item} >
                  <ul>
                    <li className={styles.logo}>
                      <picture>
                        <img src={exprience.logo} alt={exprience.companyName} />
                      </picture>
                    </li>
                    <li className={styles.date}>{exprience.date}</li>
                    <li className={styles.position}>
                      {exprience.position}
                      <span className={styles.company}>{exprience.companyName}</span>
                      <span>{exprience.skills}</span>
                      <span>{exprience.workFrom}</span>
                    </li>
                    <li className={styles.link}>
                      <Link href={exprience.link}>Go to website</Link>
                    </li>
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className={styles.shape}>
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

export { WorkExperience }