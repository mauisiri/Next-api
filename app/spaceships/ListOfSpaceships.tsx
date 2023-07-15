import Link from 'next/link'
const fetchSpaceships = () => {
    return fetch('https://swapi.dev/api/spaceships',{ cache: 'no-store' })
      .then(res => res.json())
  }
  export async function ListOfSpaceships () {
    const spaceships = await fetchSpaceships()

    return spaceships.results.slice(0,5).map(results => (
          <article key={spaceships.results.id}>
            <Link href={`/spaceships/${results.id}`}>
            <h2>
              <link href='/spaceships/[id]' as={`/spaceships/${results.id}`}></link>
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
  