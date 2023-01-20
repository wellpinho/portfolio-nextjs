import IMG1 from './../../assets/nat-8.jpg'
import IMG2 from './../../assets/nat-9.jpg'

const store: React.FC = () => {
  return (
    <section className="section-store">
      <div className="bg-video">
        <video className="bg-video_content" autoPlay muted loop>
          {/* videos do http://coverr.co */}
          <source src="./../../assets/video.mp4" type="video/mp4" />
          <source src="./../../assets/video.webm" type="video/webm" />
          Your brownser is no tsuported!
        </video>
      </div>
      <div className="text-center margin-bottom-medium">
        <h2 className="heading-secondary">
          We make people genuinely happy
        </h2>
      </div>

      <div className="row">
        <div className="story">
          <figure className="story_shape">
            <img src={IMG1} alt="Person on a tour" />
            <figcaption className="story_shape_caption">
              Mary Pinho
            </figcaption>
          </figure>
          <div className="story_text">
            <h3 className="heading-tertiary margin-bottom-small">
              I had the best week ever with my family
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum,
              totam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum,
              totam?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum,
              totam?
              </p>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="story">
          <figure className="story_shape">
            <img src={IMG2} alt="Person on a tour" />
            <figcaption className="story_shape_caption">
              Well Pinho
            </figcaption>
          </figure>
          <div className="story_text">
            <h3 className="heading-tertiary margin-bottom-small">
              Wow! My life is completely different now
            </h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum,
              totam?Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum,
              totam?
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum,
              totam?
              </p>
          </div>
        </div>
      </div>

      <div className="text-center">
        <a href="" className="btn-text">Read all stories &rarr;</a>
      </div>
    </section>
  )
}

export default store
