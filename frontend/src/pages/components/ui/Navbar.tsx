import Link from "next/link"
import { Button, Spacer, Text, useTheme } from "@nextui-org/react"
import { GithubLogo, HeartStraight, LinkedinLogo } from "phosphor-react"
import { links } from "@/objects"
import styles from './navbar.module.scss'

const Navbar = () => {
  const { theme } = useTheme()
  const { linkedin, github, sponsor } = links
  const character = '< Wellington Pinho />'

  return (
    <div style={{
      display: 'flex',
      width: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'start',
      padding: '10px 20px',
      backgroundColor: theme?.colors.gray100.value
    }}>
      <Text style={{ marginBottom: '0px' }} color="white" h4>{character}</Text>

      <Spacer css={{ flex: '1' }} />

      <Link className={styles.link} href="#">Skills</Link>
      <Link className={styles.link} href="#">Experiences</Link>
      <Link className={styles.link} href="#">Contact</Link>

      <Spacer css={{ flex: '1' }} />

      <Link className={styles.icon} href={linkedin}>
        <LinkedinLogo size={28} weight="fill" />
      </Link>
      <Link className={styles.icon} href={github} style={{ marginRight: '1rem' }}>
        <GithubLogo size={28} weight="fill" />
      </Link>

      <Link href={sponsor}>
        <Button auto color="secondary" rounded flat>
          <HeartStraight className={styles.heart} size={20} weight="fill" color="#F31260" />
          Sponsor
        </Button>
      </Link>
    </div>
  )
}

export default Navbar