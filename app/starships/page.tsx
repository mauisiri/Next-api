import styles from '../../styles/ListOf.module.css'
import { ListOfStarships } from "./ListOfStarships"
import React from 'react'


const fetchStarships = () => {
  return fetch('https://swapi.dev/api/starships')
    .then(res => res.json())
}
export default async function starshipsPage({ params }) {
  const starships = await fetchStarships()

  return (
    <section>
      <h1 className={styles.section
      }>Starships</h1>
      <ListOfStarships />
    </section>
  )
}

