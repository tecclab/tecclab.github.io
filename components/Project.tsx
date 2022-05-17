import React from 'react'
import styles from '../styles/Project.module.css'

export default function Project({ children, href, src, alt, title }: { children: React.ReactNode, href:string, src: string, alt: string, title: string} ) {
    return (
        <a className={styles.project} href={href}>
            <img src={src} alt={alt} />
            <h2>{title}</h2>
            <p>{children}</p>
        </a>
    )
}