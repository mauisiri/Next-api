import React from 'react'

const fetchVehicles = (id) => {
  return fetch(`https://swapi.dev/api/vehicles/${id}`)
    .then(res => res.json())
}

export default async function Vehicles({ params }) {
    const { id } = params
    const vehicle = await fetchVehicles(id)
   
    return (
      <article>
      <h1>{vehicle.name}</h1>
      </article>
    )
  }




  




  