import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Pokemon } from '../../store/pokedex'
import { Container } from './styles'

interface Props {
    pokemon: Pokemon
    onImageClick?: () => void
}

const PokemonCard: React.FC<Props> = ({ pokemon, onImageClick }) => {
    const pokemons = useSelector((state: any) => state.data)
	const dispatch = useDispatch()

    return (
        <Container key={pokemon.id}>
            <img src={pokemon.image} onClick={onImageClick || (() => {})} alt={pokemon.name} />
            <div>
                <span>#{pokemon.id.toString().padStart(3, '0')}</span>
                <h3>{pokemon.name.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.substring(1)).join(' ')}</h3>
            </div>
        </Container>
    )
}

export default PokemonCard