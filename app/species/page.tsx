import styles from '../../styles/ListOf.module.css'
import { ListOfSpecies } from "./ListOfSpecies"
import React from 'react'


const fetchSpecies = () => {
  return fetch('https://swapi.dev/api/species')
    .then(res => res.json())
}
export default async function speciesPage({ params }) {
  const species = await fetchSpecies()

  return (
    <section>
      <h1 className={styles.section
      }>Species</h1>
      <ListOfSpecies />
    </section>
  )
}

