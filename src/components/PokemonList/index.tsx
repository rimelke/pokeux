import React from "react"
import { Pokemon } from "../../store/pokedex"
import PokemonCard from "../PokemonCard"
import { Container } from './styles'

interface Props {
    data: Pokemon[]
    onOpenView: () => void
    setSelected: (name: string) => void
}

const PokemonList: React.FC<Props> = ({ data, onOpenView, setSelected }) => {
    return (
        <Container>
            {data.map((pokemon: Pokemon) => (
                <PokemonCard key={pokemon.name} pokemon={pokemon} onImageClick={() => {
                    setSelected(pokemon.name)
                    onOpenView()
                }}  />
            ))}
        </Container>
    )
}

export default PokemonList