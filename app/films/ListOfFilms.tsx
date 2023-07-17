import styles from '../../styles/ListOf.module.css'
import btn_styles from '../../styles/Button.module.css'
import React from 'react'
import Link from 'next/link'


const fetchFilms = () => {
    return fetch('https://swapi.dev/api/films', { cache: 'no-store' })
      .then(res => res.json())
  }
  export async function ListOfFilms () {
    const films = await fetchFilms()

    return films.results.map(results => (
          <article key={films.results.id} className={styles.article}>
            <Link href={`/films/${films.results.id}`}>
            <div className={styles.card}>
            <div className={styles.image}>IMAGE</div>
            <h2 className={styles.name}>
              <link href='/films/[id]' as={`/films/${results.id}`}></link>
              {results.title}
              </h2>
              </div>
              <div className={btn_styles.more_info}>             
            <button className={btn_styles.button}> More info </button>
            </div>
            </Link>
          </article>
    ))
  }
  