import Link from 'next/link';
import styles from './experience.module.scss'

const Expriences = [
  {
    date: "2021 - Present",
    logo: "/assets/work/ahgora.jpg",
    position: "Software Engineer",
    skills:
      "Docker , GitLab, JIRA, API REST, SOAP, Secure File Transfer Protocol, scrum, Node.js, Vue.js, MongoDB",
    companyName: "Ahgora Sistemas",
    workFrom: "(Remote)",
    link: "https://www.ahgora.com/",
  },
  {
    date: "2021 - 2021",
    logo: "/assets/work/floripa.jpg",
    position: "Full Stack Development",
    skills: "Nextjs, AWS, Node.js, TypeScript, MongoDB",
    companyName: "Floripa Comercial",
    workFrom: "(Remote)",
    link: "/",
  },
  {
    date: "2019 - 2020",
    logo: "/assets/work/riocom.jpg",
    position: "Backend developer",
    skills: "RestAPI NodeJS, Express, TypeORM, SQL.",
    companyName: "Rio Comercial",
    workFrom: "(Remote)",
    link: "/",
  },
  {
    date: "2017 - 2019",
    logo: "/assets/work/evasofis.jpeg",
    position: "Full Stack Development",
    companyName: "Evasofis",
    skills: "NodeJS, Javascript, Html5, SCSS, SQL",
    workFrom: "(Hybrid)",
    link: "/",
  },
  {
    date: "2010 - 2017",
    logo: "/assets/work/1.png",
    position: "Freelance",
    skills: "Javascript, html and CSS, sql",
    companyName: "Ver & Comprar",
    workFrom: "(Home work)",
    link: "/",
  },
];

const WorkExperience = () => {
  return (
    <div className={`${styles.section_work} section-padding`}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-6 col-12">
            <div className="tag_title">
              <h2>My work experiences</h2>
            </div>
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
                        <img src={exprience.logo} alt="" />
                      </picture>
                    </li>
                    <li className={styles.date}>{exprience.date}</li>
                    <li className={styles.position}>
                      {exprience.position}
                      <span>{exprience.companyName}
                        <span>{exprience.skills}</span>
                        <span>{exprience.workFrom}</span>
                      </span>
                    </li>
                    <li className={styles.link}><Link href="/">Go to website</Link></li>
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