import Navbar from './Navbar'
import Footer from './Footer'

export default function Layout({ children }: { children: React.ReactNode }) {
    return (
        <div>
            <Navbar />
                <main className='main'>
                    {children}
                </main>
            <Footer />
        </div>
    )
}
