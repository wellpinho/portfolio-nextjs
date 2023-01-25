import styles from './tours.module.scss'
import { links } from '@/objects'

const Projects = () => {
  const { github, project1, project2, project3 } = links
  return (
    <section className={styles.section_tours}>
      <div className="container">
        <div className="text-center margin-bottom-medium">
          <h2 className={styles.heading_secondary}>
            More recent projects
          </h2>
        </div>

        <div className="row">
          <div className="col">
            <div className={styles.card}>
              <div className={`${styles.card_side} ${styles.card_side_front}`}>
                <div className={`${styles.card_picture} ${styles.card_picture_1}`}>
                  &nbsp;
                </div>
                <h4 className={styles.card_heading}>
                  <span className={`${styles.card_heading_span} ${styles.card_heading_span_1}`}>
                    My portfolio
                  </span>
                </h4>
                <div className={styles.card_details}>
                  <ul>
                    <li>NodeJS</li>
                    <li>Prisma</li>
                    <li>MongoDB</li>
                    <li>NextJS</li>
                  </ul>
                </div>
              </div>
              <div className={`${styles.card_side} ${styles.card_side_back} ${styles.card_side_back_1}`}>
                <div className="card_cta">
                  <div className="card_price-box">
                    <p className="card_price-only">Only</p>
                    <p className="card_price-value">€897</p>
                  </div>
                  <a href={project1} className="btn btn--white btn-animated">See project</a>
                </div>
              </div>
            </div>
          </div>

          <div className="col">
            <div className={styles.card}>
              <div className={`${styles.card_side} ${styles.card_side_front}`}>
                <div className={`${styles.card_picture} ${styles.card_picture_2}`}>
                  &nbsp;
                </div>
                <h4 className={styles.card_heading}>
                  <span className={`${styles.card_heading_span} ${styles.card_heading_span_2}`}>
                    website Bartenders
                  </span>
                </h4>
                <div className={styles.card_details}>
                  <ul>
                    <li>NodeJS</li>
                    <li>Prisma</li>
                    <li>MongoDB</li>
                    <li>NextJS</li>
                  </ul>
                </div>
              </div>
              <div className={`${styles.card_side} ${styles.card_side_back} ${styles.card_side_back_2}`}>
                <div className="card_cta">
                  <div className="card_price-box">
                    <p className="card_price-only">Only</p>
                    <p className="card_price-value">€1125</p>
                  </div>
                  <a href={project2} className="btn btn--white btn-animated">See project</a>
                </div>
              </div>
            </div>
          </div>

          <div className="col">
            <div className={styles.card}>
              <div className={`${styles.card_side} ${styles.card_side_front}`}>
                <div className={`${styles.card_picture} ${styles.card_picture_3}`}>
                  &nbsp;
                </div>
                <h4 className={styles.card_heading}>
                  <span className={`${styles.card_heading_span} ${styles.card_heading_span_3}`}>
                    Burguer System
                  </span>
                </h4>
                <div className={styles.card_details}>
                  <ul>
                    <li>NodeJS</li>
                    <li>Prisma</li>
                    <li>MongoDB</li>
                    <li>VueJS</li>
                  </ul>
                </div>
              </div>
              <div className={`${styles.card_side} ${styles.card_side_back} ${styles.card_side_back_3}`}>
                <div className={styles.card_cta}>
                  <div className={styles.card_price_box}>
                    <p className={styles.card_price_only}>Only</p>
                    <p className={styles.card_price_value}>€1685</p>
                  </div>
                  <a href={project3} className="btn btn--white btn-animated">See project</a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.margin_top_huge}>
          <a href={github} className={`btn ${styles.btn_green}`}>see all from GitHub</a>
        </div>
      </div>
    </section >
  )
}

export { Projects }
