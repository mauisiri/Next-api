const fetchPeople = () => {
    return fetch('https://swapi.dev/api/people')
      .then(res => res.json())
  }
  export default async function PeoplePage({ params }) {
    const people = await fetchPeople()
  
    return (
         
      <section>
        <h1>PEOPLE</h1>
        {people.results.slice(0,5).map(results => (
          <article>
            <h2>
              <link href='/planets/[id]' as={`/people/${results.id}`}></link>
              {results.name}
              </h2>
            <div>
              <p> Height (cm): {results.height}</p>
            </div>
            <button> More info </button>
          </article>
        ))}
        
      </section>
     
    )
  
  }
  
  