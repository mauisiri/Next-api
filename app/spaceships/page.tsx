import { ListOfSpaceships } from "./ListOfSpaceships"

const fetchSpaceships = () => {
    return fetch('https://swapi.dev/api/spaceships')
      .then(res => res.json())
  }
  export default async function spaceshipsPage ({ params }) {
    const spaceships = await fetchSpaceships()
  
    return (
         
      <section>
        <ListOfSpaceships />
      </section>
    )
  }
  
  