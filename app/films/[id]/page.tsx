import React from 'react'

const fetchFilms = (id) => {
  return fetch(`https://swapi.dev/api/films/${id}`)
    .then(res => res.json())
}

export default async function Films({ params }) {
    const { id } = params
    const film = await fetchFilms(id)
   
    return (
      <article>
      <h1>{film.name}</h1>
      </article>
    )
  }




  




  