import React from 'react'

const fetchFilms = (id) => {
  return fetch(`https://swapi.dev/api/films/${id}`)
    .then(res => res.json())
}

export default async function Films ({ params }) {
    const { id } = params
    const results = await fetchFilms(id.results)
   
    return (
      <article>
      <h1>Title {results.title}</h1>
      <div>
            <p> Height: {results.height}</p>
            <p> Episode id: {results.episode_id}</p>
            <p> Openin crawl: {results.opening_crawl}</p>
            <p> Director: {results.director}</p>
            <p> Producer: {results.producer}</p>
            <p> Release year: {results.release_date}</p>
            <p> Gendercharacters: {results.characters}</p>
            <p> Planets: {results.planets}</p>
            <p> Created: {results.created}</p>
            <p> Edited: {results.edited}</p>
            <p> Url: {results.url}</p>
          </div>
          <h2>:'-(</h2>

      </article>
    )
  }




  




  