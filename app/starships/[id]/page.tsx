import React from 'react'
import ColorComponent from './ColorComponent'
import styles from '../../../styles/ListOf.module.css'




const fetchStarship = (id) => {
  return fetch(`https://swapi.dev/api/starships/${id}`)
    .then(res => res.json())
}

export default async function Starship({ params }) {
  const { id } = params
  const results = await fetchStarship(id)

  return (
    <section>
          <div className={styles.game_box}>
      <article className={styles.no_data}>
        <h1>{results.name}</h1>
        <div>
          <p> Height: {results.height}</p>
          <p> Model: {results.model}</p>
          <p> Manufacturer: {results.manufacturer}</p>
          <p> Cost in credits: {results.cost_in_credits}</p>
          <p> Length: {results.length}</p>
          <p> Max atmosphering speed: {results.max_atmosphering_speed}</p>
          <p> Crew: {results.crew}</p>
          <p> Passengers: {results.passengers}</p>
          <p> Cargo capacity: {results.cargo_capacity}</p>
          <p> Consumables: {results.consumables}</p>
          <p> Hyperdrive Rating: {results.hyperdrive_rating}</p>
          <p> Pilots: {results.MGLT}</p>
          <p> Planets: {results.starship_class}</p>
          <p> Planets: {results.pilots}</p>
          <p> Films: {results.films}</p>
          <p> Created: {results.created}</p>
          <p> Edited: {results.edited}</p>
          <p> Url: {results.url}</p>
          
        </div>
      </article>
      <div>
        <ColorComponent />
      </div>
      </div>
    </section>
  )
}





