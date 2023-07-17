import styles from '../../styles/ListOf.module.css'
import btn_styles from '../../styles/Button.module.css'
import React from 'react'
import Link from 'next/link'


const fetchSpecies = () => {
    return fetch('https://swapi.dev/api/species', { cache: 'no-store' })
      .then(res => res.json())
  }
  export async function ListOfSpecies () {
    const species = await fetchSpecies()

    return species.results.map(results => (
          <article key={species.results.id} className={styles.article}>
            <Link href={`/species/${species.results.id}`}>
            <div className={styles.card}>
            <div className={styles.image}>IMAGE</div>
            <h2 className={styles.name}>
              <link href='/species/[id]' as={`/species/${results.id}`}></link>
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
  