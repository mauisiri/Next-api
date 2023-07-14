import { ListOfPlanets } from "./ListOfPlanets.tsx"

const fetchPlanets = () => {
  return fetch('https://swapi.dev/api/planets')
    .then(res => res.json())
}
export default async function PlanetsPage({ params }) {
  const planets = await fetchPlanets()

  return (
    <section>
      <ListOfPlanets />
    </section>
  )
}




