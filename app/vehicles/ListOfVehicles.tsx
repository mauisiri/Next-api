import styles from '../../styles/ListOf.module.css'
import btn_styles from '../../styles/Button.module.css'
import React from 'react'
import Link from 'next/link'


const fetchVehicles = () => {
    return fetch('https://swapi.dev/api/vehicles', { cache: 'no-store' })
      .then(res => res.json())
  }
  export async function ListOfVehicles () {
    const vehicles = await fetchVehicles()

    return vehicles.results.map(results => (
          <article key={vehicles.results.id} className={styles.article}>
            <Link href={`/vehicles/${vehicles.results.id}`}>
            <div className={styles.card}>
            <div className={styles.image}>IMAGE</div>
            <h2 className={styles.name}>
              <link href='/vehicles/[id]' as={`/vehicles/${results.id}`}></link>
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
  