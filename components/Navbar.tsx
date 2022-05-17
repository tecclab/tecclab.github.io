import styles from '../styles/Navbar.module.css'
import ActiveLink from './ActiveLink'

export default function Navbar() {
    return (
        <div className={styles.navbar}>
            <a className={styles.navLogo} href={'/'}>
                <img src={'/tecc.png'} alt='TECC Logo' />
            </a>
            <nav className={styles.navLinks}>
                <span className={styles.mobileHide}><ActiveLink href={'/'}>Home</ActiveLink></span>
                <ActiveLink href={'/projects'}>Projects</ActiveLink>
                <ActiveLink href={'/opportunities'}>Opportunities</ActiveLink>
                <ActiveLink href={'/publications'}>Publications</ActiveLink>
            </nav>
        </div>
    )
}
