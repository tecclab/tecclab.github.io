import styles from '../styles/Layout.module.css'
import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <Navbar />
                <main className={styles.main}>
                    {children}
                </main>
            <Footer />
        </div>
    )
}
