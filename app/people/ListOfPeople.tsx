import styles from '../../styles/People.module.css'
import btn_styles from '../../styles/Button.module.css'

import Link from 'next/link'


const fetchPeople = () => {
  return fetch('https://swapi.dev/api/people', { cache: 'no-store' })
    .then(res => res.json())
}
export async function ListOfPeople() {
  const people = await fetchPeople()

  return people.results.map(results => (
    <article key={people.results.id} className={styles.article}>
      <Link href={`/people/${people.results.id}`}>
        <div className={styles.card}>
          <div className={styles.image}>IMAGE</div>
          <h2 className={styles.person_name}>
            <link href='/people/[id]' as={`/people/${results.id}`}></link>
            {results.name}
          </h2>
          <div className={btn_styles.more_info}>
            <button className={btn_styles.button}> More info </button>
          </div>
        </div>
      </Link>
    </article>
  ))
}
