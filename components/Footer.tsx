import styles from '../styles/Footer.module.css'

export default function Footer() {
    return (
        <div className={styles.footer}>
            <div className={styles.copyright}>
                <p>Copyright &copy; 2022 Technology Enhanced Cancer Care</p>
            </div>
            <div className={styles.contactUs}>
                <a href={'/contact_us'}>Contact Us</a>
            </div>
        </div>
    )
}
