import styles from '../../styles/ListOf.module.css'
import btn_styles from '../../styles/Button.module.css'
import React from 'react'
import Link from 'next/link'


const fetchStarships = () => {
    return fetch('https://swapi.dev/api/starships', { cache: 'no-store' })
      .then(res => res.json())
  }
  export async function ListOfStarships () {
    const starships = await fetchStarships()

    return starships.results.map(results => (
          <article key={starships.results.id} className={styles.article}>
            <Link href={`/starships/${starships.results.id}`}>
            <div className={styles.card}>
            <div className={styles.image}>IMAGE</div>
            <h2 className={styles.name}>
              <link href='/starships/[id]' as={`/starships/${results.id}`}></link>
              {results.name}
              </h2>
              </div>
              <div className={btn_styles.more_info}>             
            <button className={btn_styles.button}> More info </button>
            </div>
            </Link>
          </article>
    ))
  }
  