import Link from "next/link"
import styles from './Sidebar.module.css'
const links = [{
    label: 'Home',
    route: '/'
}, {
    label: 'Planets',
    route: '/planets'
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