import React from 'react'

export default function Project({ children, href, src, alt, title }: { children: React.ReactNode, href:string, src: string, alt: string, title: string} ) {
    return (
        <a className='project' href={href}>
            <img src={src} alt={alt} />
            <h2>{title}</h2>
            <p>{children}</p>
        </a>
    )
}