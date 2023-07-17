import styles from '../../styles/ListOf.module.css'
import { ListOfPeople } from "./ListOfPeople"
import React from 'react'

const fetchPeople = () => {
    return fetch('https://swapi.dev/api/people')
      .then(res => res.json())
  }
  export default async function PeoplePage ({ params }) {
    const people = await fetchPeople()
  
    return (
      <section>
         <h1 className={styles.section
      }>People</h1>
        <ListOfPeople />
      </section>
    )
  }
  
  