import { useSelector } from "react-redux"
import withHeader from "../hooks/withHeader"

const Pokedex = () => {
    const pokemons = useSelector((state: any) => state.data)

    return (
        <ul>
            {pokemons.map((pokemon: string) => (
                <li key={pokemon}>{pokemon}</li>
            ))}
        </ul>
    )
}

export default withHeader(Pokedex)