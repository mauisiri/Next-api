import { GetServerSideProps } from 'next';

export default function AllPlanets({ data }){
    return (
        <>
        <p>
            API: <a href='https://swapi.dev/api'>link</a>
        </p>
        <ul>
            {
                data.map((item, index) => (
                    < key={index}>{item}</li>
                ))}
            }
        </ul>
        </>
    )
}

export const getServerSideProps: GetServerSideProps = async () => {
    const res = await fetch(`https://swapi.dev/api/planets`)
    const data = await res.json()

    return {
        props: {
            data
        }
    }
}