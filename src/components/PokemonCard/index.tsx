import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Pokemon } from '../../store/pokedex'
import { Container } from './styles'
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai'

interface Props {
    pokemon: Pokemon
    onImageClick?: () => void
}

const PokemonCard: React.FC<Props> = ({ pokemon, onImageClick }) => {
    const pokemons: Pokemon[] = useSelector((state: any) => state.pokedex.data)
	const dispatch = useDispatch()

    return (
        <Container key={pokemon.id}>
            <img src={pokemon.image} onClick={onImageClick || (() => {})} alt={pokemon.name} />
            <div>
                <span>#{pokemon.id.toString().padStart(3, '0')}</span>
                <h3>{pokemon.name.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.substring(1)).join(' ')}</h3>
            </div>
            {pokemons.map(pokemon => pokemon.name).includes(pokemon.name)
                ? <AiFillHeart onClick={() => dispatch({type: 'REMOVE_POKEMON', name: pokemon.name})} className="full" />
                : <AiOutlineHeart onClick={() => dispatch({type: 'ADD_POKEMON', pokemon})} className="empty" />}
        </Container>
    )
}

export default PokemonCard