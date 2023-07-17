import Link from "next/link"
import styles from '../styles/Sidebar.module.css'
import Logo from '../public/logo.png'
import Image from 'next/image'
import React from 'react'


const links = [{
    label: 'Planets',
    route: '/planets'
}, {
    label: 'Starships',
    route: '/starships'
}, {
    label: 'Vehicles',
    route: '/vehicles'
}, {
    label: 'People',
    route: '/people'
}, {
    label: 'Films',
    route: '/films'
}, {
    label: 'Species',
    route: '/species'
}]

export function Sidebar() {
    return (
        <header className={styles.header} >
            <div className={styles.logo} >
                <Image
                    src={Logo}
                    width={100}
                    height={100}
                    alt="STAR WARS"
                />
            </div>
            <nav>
                <ul className={styles.sidebar}>
                    {links.map(({ label, route }) => (
                        <li key={route}>
                            <Link href={route}>
                                {label}
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
        </header >
    )
}


