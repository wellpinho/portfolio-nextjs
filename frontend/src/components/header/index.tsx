import { links, contact } from '@/objects'
import { Container, Spacer, Text } from '@nextui-org/react'
import { FilePdf, Heart } from 'phosphor-react'
import styles from './header.module.scss'

const Header = () => {
  const logo = '< Wellpinho />'
  const { cv, sponsor } = links
  const { name } = contact

  return (
    <header className={`${styles.header}`}>
      <Container>
        <div className={styles.logo_box}>
          <Text style={{ padding: '2rem' }} h2>{logo}</Text>
          <Spacer x={12} />
          <a style={{ padding: '2rem' }} href={sponsor} className={styles.link}>
            <Heart className={styles.heart} size={32} weight="fill" />
            Sponsor
          </a>
        </div>
      </Container>

      <div className={styles.text_box}>
        <h1 className={styles.heading_primary}>
          <span className={styles.heading_main}>{name}</span>
          <span className={styles.heading_sub}>Software Engineer</span>
          <span className={styles.skills}>NodeJS, Typescript, NextJS, MongoDB, Docker, Jest, AWS</span>
        </h1>

        <a className={`${styles.btn} ${styles.btn_white} ${styles.btn_animated}`} href={cv}>
          Resume
          <FilePdf className={styles.icon} size={28} weight="light" />
        </a>
      </div>
    </header >
  )
}

export { Header }
