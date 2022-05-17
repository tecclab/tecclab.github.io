import { useRouter } from 'next/router'

export default function ActiveLink({ children, href}: { children: React.ReactNode, href: string }) {
    const router = useRouter()
    const path = router.asPath
    let style = {}

    if (path === href) {
        style = {
            color: '#E57200'
        }
    }

    return (
        <a href={href} style={style}>
            {children}
        </a>
    )
}
