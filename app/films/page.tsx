import styles from '../../styles/ListOf.module.css'
import { ListOfFilms } from "./ListOfFilms"
import React from 'react'


const fetchFilms = () => {
  return fetch('https://swapi.dev/api/films')
    .then(res => res.json())
}
export default async function filmsPage({ params }) {
  const films = await fetchFilms()

  return (
    <section>
      <h1 className={styles.section
      }>Films</h1>
      <ListOfFilms />
    </section>
  )
}

