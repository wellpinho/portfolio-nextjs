import { links } from '@/objects'
import { LinkedinLogo } from 'phosphor-react'
import styles from './store.module.scss'
import { linkedinRecommendations } from '@/objects'

const Testimonials = () => {
  return (
    <section className={styles.section_stories}>
      <div className={styles.bg_video}>
        <video className={styles.video_content} autoPlay muted loop>
          <source src="/assets/video.mp4" type="video/mp4" />
          <source src="/assets/video.webm" type="video/webm" />
          Your browser is not supported!
        </video>
      </div>

      <div className={`container ${styles.store_box}`}>
        <div style={{ textAlign: 'center', margin: '5rem 0' }}>
          <h2 className="heading-secondary">
            linkedin recommendations
          </h2>
        </div>
        <div className="row">
          {
            linkedinRecommendations.map((item, index) => {
              return (
                <div className="col-1-of-3" key={index}>
                  <div className={styles.story}>
                    <picture className={styles.story_shape}>
                      <img src={item.image} alt="Person on a tour" className={styles.story_img} />
                      <figcaption className={styles.story_caption}>{item.name}</figcaption>
                    </picture>

                    <div className={styles.story_text}>
                      <h3 style={{ marginBottom: '15px', display: 'flex', alignItems: 'center' }}>
                        {item.skills}
                        <a href={item.linkedin}>
                          <LinkedinLogo className={styles.store_icon} size={32} weight="fill" />
                        </a>
                      </h3>
                      <p>{item.text}</p>
                    </div>
                  </div>
                </div>
              )
            })
          }
        </div>
        <div style={{ textAlign: 'center', marginTop: '1rem' }}>
          <a href={links.linkedin} className="btn-text">Read all &rarr;</a>
        </div>
      </div>
    </section >
  )
}

export { Testimonials }
