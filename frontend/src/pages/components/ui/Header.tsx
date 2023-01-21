import Link from 'next/link'
import { FilePdf } from 'phosphor-react'
import styles from './header.module.scss'
import { links } from './../../../objects/index'

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.header_text_box}>
        <h1>
          <span className={styles.heading_primary_main}>Software Engineer</span>
          <span className={styles.heading_primary_sub}>NodeJS, Typescript, MongoDB, NextJS, Docker, AWS, Jest.</span>
        </h1>

        <Link className="btn btn--white btn--animated" href={links.cv} type='file'>
          <div style={{
            display: 'flex',
            alignItems: 'center'
          }}>
            Resume
            <FilePdf size={26} />
          </div>
        </Link>
      </div>
    </header>
  )
}

export default Header