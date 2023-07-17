import React from 'react'

const fetchSpecies = (id) => {
  return fetch(`https://swapi.dev/api/species/${id}`)
    .then(res => res.json())
}

export default async function Species({ params }) {
    const { id } = params
    const specie = await fetchSpecies(id)
   
    return (
      <article>
      <h1>{specie.name}</h1>
      </article>
    )
  }




  




  