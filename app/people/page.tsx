import { ListOfPeople } from "./ListOfPeople"

const fetchPeople = () => {
    return fetch('https://swapi.dev/api/people')
      .then(res => res.json())
  }
  export default async function PeoplePage ({ params }) {
    const people = await fetchPeople()
  
    return (
         
      <section>
        <ListOfPeople />
      </section>
    )
  }
  
  