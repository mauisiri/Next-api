import React from 'react'

const fetchStarship = (id) => {
  return fetch(`https://swapi.dev/api/starships/${id}`)
    .then(res => res.json())
}

export default async function Starship({ params }) {
    const { id } = params
    const starship = await fetchStarship(id)
   
    return (
      <article>
      <h1>{starship.name}</h1>
      </article>
    )
  }




  




  