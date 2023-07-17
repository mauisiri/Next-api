const fetchPerson = (id) => {
  return fetch(`https://swapi.dev/api/people/${id}`)
    .then(res => res.json())
}

export default async function Person({ params }) {
    const { id } = params
    const results = await fetchPerson(id)
   
    return (
      <article>
      <h1>Person's name {results.name}</h1>
      <div>
            <p> Height: {results.height}</p>
            <p> Mass: {results.mass}</p>
            <p> Hair color: {results.hair_color}</p>
            <p> Skin color: {results.skin_color}</p>
            <p> Eye color: {results.eye_color}</p>
            <p> Birth year: {results.birth_year}</p>
            <p> Gender: {results.gender}</p>
            <p> Homeworld: {results.homeworld}</p>
            <p> Films: {results.films}</p>
            <p> Species: {results.species}</p>
            <p> Vehicles: {results.vehicles}</p>
            <p> Starships: {results.starships}</p>
            <p> Created: {results.created}</p>
            <p> Edited: {results.edited}</p>
            <p> Url: {results.url}</p>
          </div>
      </article>
    )
  }




  




  