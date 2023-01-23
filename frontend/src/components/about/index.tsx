import moment from 'moment'
import styles from './about.module.scss'

const since = {
  startJob: 2017,
  year: moment().format("YYYY"),
  month: moment('2017-02').format("M"),
};

const totalWork = Number(since.year) - since.startJob;

const About = () => {
  return (
    <div className={`${styles.about} section-padding`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-5 col-md-12 col-sm-12">
            <div className={styles.experience_wrap}>
              <div className={styles.experience}>
                <h2>{`${totalWork}.${since.month}`}</h2>
                <span>Years of Experience as a software engineer</span>
              </div>
              <div className={styles.client}>
                <h3>
                  <span data-count="100">100</span>%
                </h3>
                <p>Continuous learning</p>
              </div>
            </div>
          </div>
          <div className="col-lg-5 col-md-12 col-sm-12">
            <h2 className={styles.heading_secondary}>
              How the key turned
            </h2>
            <span className={styles.heading_span}>
              It all started with World of Warcraft in 2005. The curiosity
              to understand the gears was the beginning. I studied C++ and
              then I never stopped! I love to face new challenges because
              they teach and strengthen me.</span>
            <div className={styles.composition}>
              <img src="/assets/banner2.jpg" alt="Photo 1" className={`${styles.composition_photo} ${styles.composition_photo_1}`} />
              <img src="/assets/banner3.jpg" alt="Photo 2" className={`${styles.composition_photo} ${styles.composition_photo_2}`} />
              <img src="/assets/banner.jpg" alt="Photo 3" className={`${styles.composition_photo} ${styles.composition_photo_3}`} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export { About }
