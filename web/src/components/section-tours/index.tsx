export default function index() {
  return (
    <section className="section-tours">
      <div className="text-center margin-bottom-medium">
        <h2 className="heading-secondary">
          Most popular tours
        </h2>
      </div>

      <div className="row">
        <div className="col-1-of-3">
          <div className="card">
            <div className="card_side card_side--front">
              <div className="card_picture card_picture-1">
                &nbsp;
                  </div>
              <h4 className="card_heading">
                <span className="card_heading-span card_heading-span-1">
                  the sea explorer
                    </span>
              </h4>
              <div className="card_details">
                <ul>
                  <li>3 day tours</li>
                  <li>up these people</li>
                  <li>2 tour guides</li>
                  <li>sleep in cozy hotels</li>
                  <li>dificulty: easy</li>
                </ul>
              </div>
            </div>
            <div className="card_side card_side--back card_side--back-1">
              <div className="card_cta">
                <div className="card_price-box">
                  <p className="card_price-only">Only</p>
                  <p className="card_price-value">$297</p>
                </div>
                <a href="#/" className="btn btn--white btn-animated">Book now</a>
              </div>
            </div>
          </div>
        </div>

        <div className="col-1-of-3">
          <div className="card">
            <div className="card_side card_side--front">
              <div className="card_picture card_picture-2">
                &nbsp;
                  </div>
              <h4 className="card_heading">
                <span className="card_heading-span card_heading-span-2">
                  the forest hiker
                    </span>
              </h4>
              <div className="card_details">
                <ul>
                  <li>7 day tours</li>
                  <li>up to 40 people</li>
                  <li>6 tour guides</li>
                  <li>sleep in provided tents</li>
                  <li>dificulty: medium</li>
                </ul>
              </div>
            </div>
            <div className="card_side card_side--back card_side--back-2">
              <div className="card_cta">
                <div className="card_price-box">
                  <p className="card_price-only">Only</p>
                  <p className="card_price-value">$497</p>
                </div>
                <a href="#/" className="btn btn--white btn-animated">Book now</a>
              </div>
            </div>
          </div>
        </div>

        <div className="col-1-of-3">
          <div className="card">
            <div className="card_side card_side--front">
              <div className="card_picture card_picture-3">
                &nbsp;
                  </div>
              <h4 className="card_heading">
                <span className="card_heading-span card_heading-span-3">
                  the snow adventurer
                    </span>
              </h4>
              <div className="card_details">
                <ul>
                  <li>5 day tours</li>
                  <li>Up to 15 people</li>
                  <li>3 tour guides</li>
                  <li>Sleep in provided tents</li>
                  <li>Dificulty: hard</li>
                </ul>
              </div>
            </div>
            <div className="card_side card_side--back card_side--back-3">
              <div className="card_cta">
                <div className="card_price-box">
                  <p className="card_price-only">Only</p>
                  <p className="card_price-value">$897</p>
                </div>
                <a href="#/" className="btn btn--white btn-animated">Book now</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="text-center margin-top-huge">
        <a href="#/" className="btn btn--green">Discovery all tours</a>
      </div>
    </section>
  )
}
