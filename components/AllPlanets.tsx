import styles from './AllPlanets.module.css'


const fetchPlanets = () => {
    return fetch('https://swapi.dev/api/planets')
      .then(res => res.json())
  }
  export default async function AllPlanets() {
    const planets = await fetchPlanets()
  
    return (
      <section>
        {planets.results.map(results => (
          <article key={results.id} className={styles.article}>
            <h2 className={styles.title}>{results.name}</h2>
            <div className={styles.details}>
              <p> Rotation period: {results.rotation_period}</p>
              <p> Diameter: {results.diameter}</p>
              <p>Climate: {results.climate}</p>
              <p> Gravity: {results.gravity}</p>
              <p> Terrain: {results.terrain}</p>
              <p> Surface water: {results.surface_water}</p>
              <p> Population: {results.population}</p>
            </div>
            <div className={styles.details}>
              <p> Residents:</p>
              <p> {results.residents}</p>
              <p> Films:</p>
              <p> {results.films}</p>
              <p> Created: </p>
              <p> {results.created}</p>
              <p> Edited: </p>
              <p> {results.edited}</p>
              <p> Url: {results.url}</p>
            </div>
          </article>
        ))}
      </section>
    )
  }