import Link from 'next/link'
const fetchPeople = () => {
    return fetch('https://swapi.dev/api/people',{ cache: 'no-store' })
      .then(res => res.json())
  }
  export async function ListOfPeople () {
    const people = await fetchPeople()

    return people.results.slice(0,5).map(results => (
          <article key={results.id}>
            <Link href={`/people/${results.id}`}>
            <h2>
              <link href='/planets/[id]' as={`/people/${results.id}`}></link>
              {results.name}
              </h2>
            <div>
              <p> Height (cm): {results.height}</p>
            </div>
            <button> More info </button>
            </Link>
          </article>
    ))
  }
  