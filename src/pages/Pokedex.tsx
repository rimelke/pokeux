import { useState } from "react"
import { useSelector } from "react-redux"
import PokemonList from "../components/PokemonList"
import PokemonView from "../components/PokemonView"
import useDisclosure from "../hooks/useDisclosure"
import withHeader from "../hooks/withHeader"

const Pokedex = () => {
    const pokemons = useSelector((state: any) => state.data)
    const [selectedPokemon, setSelectedPokemon] = useState<string | null>(null)
    const {isOpen, onClose, onOpen} = useDisclosure()

    return (
        <main>
            <PokemonView name={selectedPokemon} isOpen={isOpen} onClose={onClose} />
            <PokemonList data={pokemons} onOpenView={onOpen} setSelected={setSelectedPokemon} />
        </main>
    )
}

export default withHeader(Pokedex)