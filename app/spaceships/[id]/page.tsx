import Link from 'next/link'

const fetchPerson = (id) => {
  return fetch(`https://swapi.dev/api/people/${id}`)
    .then(res => res.json())
}

export default async function Person({ params }) {
    const { id } = params
    const person = await fetchPerson(id)
   
    return (
      <article>
      <h1>{person.name}</h1>
      </article>
    )
  }




  




  