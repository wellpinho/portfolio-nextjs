import Card1 from './../../assets/nat-1-large.jpg'
import Card2 from './../../assets/nat-2-large.jpg'
import Card3 from './../../assets/nat-3-large.jpg'

export default function index() {
  return (
    <section className="section-about">
      <div className="text-center margin-bottom-medium">
        <h2 className="heading-secondary">
          Exciting tours for adventures people
            </h2>
      </div>

      <div className="row">
        <div className="col-1-of-2">
          <h3 className="heading-tertiary margin-bottom-small">
            You´re going to fall in love with nature
              </h3>
          <p className="paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dolores ea repudiandae ut inventore expedita. Officia maxime
            enim minus sapiente laudantium.
              </p>
        </div>
        <div className="col-1-of-2">
          <h3 className="heading-tertiary margin-bottom-small">
            Live adventures like you never have before
              </h3>
          <p className="paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dolores ea repudiandae ut inventore expedita. Officia maxime
            enim minus sapiente laudantium.
              </p>

          <a href="#/" className="btn-text">Learn more &rarr;</a>
        </div>
        <div className="col-1-of-2">
          <div className="composition">
            <img src={Card1} alt="Photo 1" className="composition_photo composition_photo--p1" />
            <img src={Card2} alt="Photo 2" className="composition_photo composition_photo--p2" />
            <img src={Card3} alt="Photo 3" className="composition_photo composition_photo--p3" />
          </div>
        </div>
      </div>
    </section>
  )
}
