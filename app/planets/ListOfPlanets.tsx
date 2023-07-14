const fetchPlanets = () => {
    return fetch('https://swapi.dev/api/planets')
        .then(res => res.json())
}
export async function ListOfPlanets() {
    const planets = await fetchPlanets()

    return planets.slice(0, 5).map(planet => (
        <article key={planet.id}>
            <h2>{planet.name}</h2>
            <p>{planet.rotation_period}</p>
            <p>{planet.diameter}</p>
            <p>{planet.climate}</p>
            <p>{planet.gravity}</p>
            <p>{planet.terrain}</p>
            <p>{planet.surface_water}</p>
            <p>{planet.population}</p>
            <p>{planet.residents}</p>
            <p>{planet.films}</p>
            <p>{planet.created}</p>
            <p>{planet.edited}</p>
            <p>{planet.url}</p>
        </article>  
    ))  
}


