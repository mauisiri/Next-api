import Link from "next/link"
import styles from '../styles/Sidebar.module.css'
const links = [{
    label: 'Home',
    route: '/'
}, {
    label: 'Planets',
    route: '/planets'
},{
    label: 'Spaceships',
    route: '/spaceships'
},{
    label: 'Vehicles',
    route: '/vehicles'
},{
    label: 'People',
    route: '/people'
},{
    label: 'Films',
    route: '/films'
},{
    label: 'Species',
    route: '/species'
}]

export function Sidebar () {
    return(
        <header className={styles.header} >
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