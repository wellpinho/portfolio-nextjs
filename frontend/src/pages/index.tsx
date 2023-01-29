// TODO: componentization needs to be done
// import { About } from "@/components/about";
// import { Contact } from "@/components/contact";
// import { Experience } from "@/components/experience";
// import { Header } from "@/components/header";
// import { Navbar } from "@/components/navbar";
// import { Projects } from "@/components/projects";
// import { Testimonials } from "@/components/store";
import { WorkExperience } from "@/components/work";
import Image from "next/image";
import { contact, linkedinRecommendations, links } from '@/objects'
import { FilePdf, Heart, LinkedinLogo, LinkSimple } from "phosphor-react";
import moment from "moment";
import Link from "next/link";

export default function Home() {
  const { name, profesion } = contact
  const { cv, github, linkedin, sponsor, project1, project2, project3 } = links

  const since = {
    startJob: 2017,
    year: moment().format("YYYY"),
    month: moment('2017-02').format("M"),
  };

  const totalWork = Number(since.year) - since.startJob;

  return (
    <>
      <div className="navigation">
        <input type="checkbox" className="navigation__checkbox" id="navi-toggle" />

        <label htmlFor="navi-toggle" className="navigation__button">
          <span className="navigation__icon">&nbsp;</span>
        </label>

        <div className="navigation__background">&nbsp;</div>

        <nav className="navigation__nav">
          <ul className="navigation__list">
            <li className="navigation__item"><Link href="#" className="navigation__link"><span>01</span>About</Link></li>
            <li className="navigation__item"><Link href="#" className="navigation__link"><span>02</span>Your benfits</Link></li>
            <li className="navigation__item"><Link href="#" className="navigation__link"><span>03</span>Popular tours</Link></li>
            <li className="navigation__item"><Link href="#" className="navigation__link"><span>04</span>Stories</Link></li>
            <li className="navigation__item"><Link href="#" className="navigation__link"><span>05</span>Book now</Link></li>
          </ul>
        </nav>
      </div>

      <header className="header">
        <div className="header__logo-box" id='header'>
          <Link href={sponsor} className="heart_link" style={{ display: 'flex', alignItems: 'center' }}>
            <Heart className="heart" size={32} weight="fill" />
            Sponsor
          </Link>
        </div>

        <div className="header__text-box" style={{ textAlign: 'center' }}>
          <h1 className="heading-primary">
            <span className="heading-primary--main">{name}</span>
            <span className="heading-primary--sub">{profesion}</span>
          </h1>

          <Link href={cv} className="btn btn--white btn--animated">
            <span>
              resume
              <FilePdf size={28} />
            </span>
          </Link>
        </div>
      </header>

      <main>
        <section className="section-about">
          <div className="row">
            <div className="col-1-of-2">
              <div className="experience_wrap">
                <div className="experience">
                  <h2>{`${totalWork}.${since.month}`}</h2>
                  <span>Years of Experience as a software engineer</span>
                </div>
                <div className="client">
                  <h3>
                    <span>100</span>
                  </h3>
                  <p>Continuous learning</p>
                </div>
              </div>
            </div>
            <div className="col-1-of-2">
              <h2 className="heading-secondary">
                How the key turned
              </h2>
              <span className="heading_span">
                It all started with World of Warcraft in 2005. The curiosity
                to understand the gears was the beginning. I studied C++ and
                then I never stopped! I love to face new challenges because
                they teach and strengthen me.
              </span>
              <div className="composition">
                <picture>
                  <Image width={200} height={200} src="/assets/banner.jpg" alt="Photo 1" className="composition__photo composition__photo--p1" />
                </picture>

                <picture>
                  <Image width={200} height={200} src="/assets/banner2.jpg" alt="Photo 2" className="composition__photo composition__photo--p2" />
                </picture>

                <picture>
                  <Image width={200} height={200} src="/assets/banner3.jpg" alt="Photo 3" className="composition__photo composition__photo--p3" />
                </picture>
              </div>
            </div>
          </div>
        </section>

        <section className="section-features">
          <div className="row">
            <h2 className="heading-primary">My favorite stacks</h2>
            <div className="col-1-of-4">
              <div className="feature-box">
                <picture>
                  <Image width={100} height={100} src="/assets/nodejs.svg" alt="" />
                </picture>
                <h6>Backend</h6>
                <p>Work since 2017</p>
              </div>
            </div>

            <div className="col-1-of-4">
              <div className="feature-box">
                <picture>
                  <Image width={100} height={100} src="/assets/prisma.svg" alt="" />
                </picture>
                <h6>Communicate with database</h6>
                <p>Work since 2018</p>
              </div>
            </div>

            <div className="col-1-of-4">
              <div className="feature-box">
                <picture>
                  <Image width={100} height={100} src="/assets/mongodb.svg" alt="" />
                </picture>
                <h6>Database noSql</h6>
                <p>Work since 2017</p>
              </div>
            </div>

            <div className="col-1-of-4">
              <div className="feature-box">
                <picture>
                  <Image width={100} height={100} src="/assets/nextjs.svg" alt="" />
                </picture>
                <h6>Frontend</h6>
                <p>Worksince 2021</p>
              </div>
            </div>
            <p className="lastChild">I also work with: AWS, Docker, Jest, Redis, SQL, Scrum, Jira, Kanban</p>
          </div>
        </section>

        <WorkExperience />

        <section className="section-companies" id="section-companies">
          <div className="u-center-text u-margin-bottom-small">
            <h2 className="heading-secondary">
              More recent projects
            </h2>
          </div>
          <div className="row">
            <div className="col-1-of-3">
              <div className="card">
                <div className="card__side card__side--front">
                  <div className="card__picture card_picture_1">
                    &nbsp;
                  </div>
                  <h4 className="card__heading">
                    <span className="card__heading-span card__heading-span--1">My portfolio</span>
                  </h4>
                  <div className="card__details">
                    <ul>
                      <li>NodeJS</li>
                      <li>Prisma</li>
                      <li>MongoDB</li>
                      <li>NextJS</li>
                    </ul>
                  </div>
                </div>
                <div className="card__side card__side--back card__side--back-1">
                  <div className="card__cta">
                    <div className="card__price-box">
                      <p className="card__price-only">Only</p>
                      <p className="card__price-value">€897</p>
                    </div>
                    <Link href={project2} className="btn btn--white">See project!</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-1-of-3">
              <div className="card">
                <div className="card__side card__side--front">
                  <div className="card__picture card_picture_2">
                    &nbsp;
                  </div>
                  <h4 className="card__heading">
                    <span className="card__heading-span card__heading-span--2">website Bartenders</span>
                  </h4>
                  <div className="card__details">
                    <ul>
                      <li>NodeJS</li>
                      <li>Prisma</li>
                      <li>MongoDB</li>
                      <li>NextJS</li>
                    </ul>
                  </div>
                </div>
                <div className="card__side card__side--back card__side--back-2">
                  <div className="card__cta">
                    <div className="card__price-box">
                      <p className="card__price-only">Only</p>
                      <p className="card__price-value">€1125</p>
                    </div>
                    <Link href={project2} className="btn btn--white">See project</Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-1-of-3">
              <div className="card">
                <div className="card__side card__side--front">
                  <div className="card__picture card_picture_3">
                    &nbsp;
                  </div>
                  <h4 className="card__heading">
                    <span className="card__heading-span card__heading-span--3">Burguer System</span>
                  </h4>
                  <div className="card__details">
                    <ul>
                      <li>NodeJS</li>
                      <li>Prisma</li>
                      <li>MongoDB</li>
                      <li>VueJS</li>
                    </ul>
                  </div>
                </div>
                <div className="card__side card__side--back card__side--back-3">
                  <div className="card__cta">
                    <div className="card__price-box">
                      <p className="card__price-only">Only</p>
                      <p className="card__price-value">€885</p>
                    </div>
                    <Link href={project3} className="btn btn--white">See project</Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="u-center-text">
            <Link href={github} className="btn btn--green">See all from GitHub</Link>
          </div>
        </section>

        <section className="section-stories">
          <div className="bg-video">
            <video className="bg-video__content" autoPlay muted loop>
              <source src="/assets/video.mp4" type="video/mp4" />
              <source src="/assets/video.webm" type="video/webm" />
              Your browser is not supported!
            </video>
          </div>
          <div className="u-center-text u-margin-bottom-big">
            <h2 className="heading-secondary">
              Linkedin recommendations
            </h2>
          </div>
          {
            linkedinRecommendations.map((item, index) => {
              return (
                <div className="row" style={{ marginBottom: '1rem' }} key={index}>
                  <div className="story">
                    <picture className="story__shape">
                      <Image width={120} height={120} src={item.image} alt="Person on a tour" className="story__img" />
                      <figcaption className="story__caption">{item.name}</figcaption>
                    </picture>
                    <div className="story__text">
                      <h3
                        className="heading-tertiary u-margin-bottom-small"
                        style={{ display: 'flex', flexDirection: 'column' }}
                      >
                        {item.skills}
                        <Link href={item.linkedin}>
                          <LinkedinLogo className="store_icon" size={32} weight="fill" />
                        </Link>
                      </h3>
                      <p>{item.text}</p>
                    </div>
                  </div>
                </div>
              )
            })
          }
          <div className="u-center-text u-margin-top-huge">
            <Link href={links.linkedin} className="btn-text">Read all &rarr;</Link>
          </div>
        </section>

        <section className="section-book">
          <div className="row">
            <div className="book">
              <div className="book__form">
                <form action="#" className="form">
                  <div className="u-margin-bottom-medium">
                    <h2 className="heading-secondary">
                      Shall we have a coffee?
                    </h2>
                  </div>

                  <div className="form__group">
                    <input type="text" className="form__input" placeholder="Name" id="name" required />
                    <label htmlFor="name" className="form__label">Name</label>
                  </div>

                  <div className="form__group">
                    <input type="email" className="form__input" placeholder="Email" id="email" required />
                    <label htmlFor="email" className="form__label">Email</label>
                  </div>

                  <div className="form__group">
                    <input type="tel" className="form__input" placeholder="Phone" id="phone" required />
                    <label htmlFor="email" className="form__label">Phone</label>
                  </div>

                  <div className="form__group u-margin-bottom-medium">
                    <div className="form__radio-group">
                      <input type="radio" className="form__radio-input" id="small" name="size" />
                      <label htmlFor="small" className="form__radio-label">
                        <span className="form__radio-button"></span>
                        Europe
                      </label>
                    </div>

                    <div className="form__radio-group">
                      <input type="radio" className="form__radio-input" id="large" name="size" />
                      <label htmlFor="large" className="form__radio-label">
                        <span className="form__radio-button"></span>
                        EUA
                      </label>
                    </div>
                  </div>

                  <div className="form__group">
                    <button className="btn btn--green">Contact me &rarr;</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer__logo-box">
          <Image width={120} height={120} src="/assets/eu.jpeg" alt="" />
        </div>
        <div className="row">
          <div className="col-1-of-2">
            <div className="footer__navigation">
              <ul className="footer__list">
                <li className="footer__item"><Link href="#" className="footer__link">Company</Link></li>
                <li className="footer__item"><Link href="#" className="footer__link">Contact us</Link></li>
                <li className="footer__item"><Link href="#" className="footer__link">Carrers</Link></li>
                <li className="footer__item"><Link href="#" className="footer__link">Privacy policy</Link></li>
                <li className="footer__item"><Link href="#" className="footer__link">Terms</Link></li>
              </ul>
            </div>
          </div>
          <div className="col-1-of-2">
            <p className="footer__copyright">
              Built by <Link href="#" className="footer__link">Wellington Pinho</Link> in the advanced course<Link href="https://www.udemy.com/course/advanced-css-and-sass/" className="footer__link">CSS and Sass: Flexbox, Grid, Animations and More!</Link> Copyright &copy; by Jonas Schmedtmann.
              <br /> And completely redesigned by me to support Nextjs, in addition to the backend made in NodeJS, Prisma, and MongoDB.
              contributions to the project on <a className="footer__link" href={`${github}/portfolio-nextjs`}><LinkSimple size={18} weight="thin" />GitHub</a> are welcome.
            </p>
          </div>
        </div>
      </footer>
    </>
  )
}