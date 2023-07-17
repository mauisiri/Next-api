import styles from '../../styles/ListOf.module.css'
import btn_styles from '../../styles/Button.module.css'
import React from 'react'


const fetchPlanets = () => {
  return fetch('https://swapi.dev/api/planets')
    .then(res => res.json())
}
export default async function PlanetsPage({ params }) {
  const planets = await fetchPlanets()

  return (
    <section>
      {planets.results.slice(0,5).map(results => (
        <article key={results.id} className={styles.article}>
          <h2 className={styles.person_name}>
            <link href='/planets/[id]' as={`/planets/${results.id}`}></link>
            {results.name}
            </h2>
          <div className={styles.details}>
            <p> Rotation period: {results.rotation_period}</p>
            <p> Diameter: {results.diameter}</p>
            <p> Climate: {results.climate}</p>
            <p> Gravity: {results.gravity}</p>
            <p> Terrain: {results.terrain}</p>
            <p> Surface water: {results.surface_water}</p>
            <p> Population: {results.population}</p>
          </div>
          <div className={btn_styles.more_info}>
            <button className={btn_styles.button}> More info </button>
          </div>
          {/* <div className={styles.details}>
            <p> Residents:</p>
            <p> {results.residents}</p>
            <p> Films:</p>
            <p> {results.films}</p>
            <p> Created: </p>
            <p> {results.created}</p>
            <p> Edited: </p>
            <p> {results.edited}</p>
            <p> Url: {results.url}</p>
          </div> */}
        </article>
      ))}
    </section>
  )

}

