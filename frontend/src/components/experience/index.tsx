import Link from 'next/link'
import styles from './experience.module.scss'

const Experience = () => {
  return (
    <section className={styles.section_features}>
      <div className="container">
        <div className="row">
          <h2 className='text-center'>My favorite stacks</h2>
          <div className="col">
            <div className={styles.feature_box}>
              <picture>
                <img src="/assets/nodejs.svg" alt="" />
              </picture>
              <h6>Backend</h6>
              <p>Work since 2017</p>
            </div>
          </div>

          <div className="col">
            <div className={styles.feature_box}>
              <picture>
                <img src="/assets/prisma.svg" alt="" />
              </picture>
              <h6>Communicate with database</h6>
              <p>Work since 2018</p>
            </div>
          </div>

          <div className="col">
            <div className={styles.feature_box}>
              <picture>
                <img src="/assets/mongodb.svg" alt="" />
              </picture>
              <h6>Database noSql</h6>
              <p>Work since 2017</p>
            </div>
          </div>

          <div className="col">
            <div className={styles.feature_box}>
              <picture>
                <img src="/assets/nextjs.svg" alt="" />
              </picture>
              <h6>Frontend</h6>
              <p>Worksince 2021</p>
            </div>
          </div>
          <p className={styles.lastChild}>I also work with: AWS, Docker, Jest, Redis, SQL, Scrum, Jira, Kanban</p>
        </div>
      </div>
    </section>
  )
}

export { Experience }