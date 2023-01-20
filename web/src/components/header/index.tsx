import Logo from './../../assets/logo-white.png'

export default function index() {
  return (
    <header className="header">
      <div className="header_logo-box">
        <img className="header_logo" src={Logo} alt="Natures React Theme" />
      </div>

      <div className="header_text-box">
        <h1 className="heading-primary">
          <span className="heading-primary--main">Outdoors</span>
          <span className="heading-primary--sub">is where life happens</span>
        </h1>

        <a className="btn btn--white btn--animated" href="#/">Discover my CV</a>
      </div>
    </header>
  )
}
