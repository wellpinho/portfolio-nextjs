import Link from 'next/link'
import styles from './navbar.module.scss'

const Navbar = () => {
  return (
    <div className={styles.navigation}>
      <input type="checkbox" className={styles.navigation_checkbox} id="navi-toggle" />

      <label htmlFor="navi-toggle" className={styles.navigation_button}>
        <span className={styles.navigation_icon}>&nbsp;</span>
      </label>

      <div className={styles.navigation_background}>&nbsp;</div>

      <nav className={styles.navigation_nav}>
        <ul className={styles.navigation_list}>
          <li className={styles.navigation_item}><Link href="/" className={styles.navigation_link}><span>01</span>home</Link></li>
          <li className={styles.navigation_item}><Link href="/" className={styles.navigation_link}><span>02</span>about</Link></li>
          <li className={styles.navigation_item}><Link href="/" className={styles.navigation_link}><span>03</span>services</Link></li>
          <li className={styles.navigation_item}><Link href="/" className={styles.navigation_link}><span>04</span>resume</Link></li>
          <li className={styles.navigation_item}><Link href="/" className={styles.navigation_link}><span>05</span>portfolio</Link></li>
          <li className={styles.navigation_item}><Link href="/" className={styles.navigation_link}><span>05</span>testimonials</Link></li>
          <li className={styles.navigation_item}><Link href="/" className={styles.navigation_link}><span>05</span>contact</Link></li>
        </ul>
      </nav>
    </div>
  )
}

export { Navbar }