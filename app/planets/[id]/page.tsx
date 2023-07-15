
interface PageProps {
    params: { id: string },
}



export default async function PlanetsPage({ params: { id } : PageProps}) {
    const resoinse = await fetch(`https://swapi.dev/api/planets/${id}`)
    const planet = await response.json();
  
    return (
        <section>
            <h1>PLANETS</h1>
      {planets.results.map(results => (
        <article key={results.id}>
          <h2>
            <link href='/planets/[id]' as={`/planets/${results.id}`}></link>
            {results.name}
            </h2>
          <div>
            <p> Rotation period: {results.rotation_period}</p>
            <p> Diameter: {results.diameter}</p>
            <p>Climate: {results.climate}</p>
            <p> Gravity: {results.gravity}</p>
            <p> Terrain: {results.terrain}</p>
            <p> Surface water: {results.surface_water}</p>
            <p> Population: {results.population}</p>
          </div>
          <div>
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


//2:05

/* export default function Results ({ params }) {
    const { id } = params
    
    return <h1>{id} - Mercurio </h1> 
} */
 