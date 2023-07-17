import styles from '../../styles/ListOf.module.css'
import { ListOfVehicles } from "./ListOfVehicles"
import React from 'react'


const fetchVehicles = () => {
  return fetch('https://swapi.dev/api/vehicles')
    .then(res => res.json())
}
export default async function vehiclesPage({ params }) {
  const vehicles = await fetchVehicles()

  return (
    <section>
      <h1 className={styles.section
      }>Vehicles</h1>
      <ListOfVehicles />
    </section>
  )
}

