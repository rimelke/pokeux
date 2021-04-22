import Modal from 'react-modal'
import { gql, useQuery } from '@apollo/client'
import React from 'react';
import { useSelector } from 'react-redux';
import apollo from '../../services/apollo';
import { FiPlus, FiCheck, FiMinus } from 'react-icons/fi'
import { Pokemon } from '../../store/pokedex'
import { Container, Info, Basics, Stats, Type } from './styles'

interface PokemonData {
	pokemon: {
		id: number
		name: string
		height: number
		weight: number
		types: {
			type: {
				name: string
			}
		}[]
		sprites: {
			front_default: string
		}
		abilities: {
			ability: {
				name: string
			}
		}[]
		stats: {
			base_stat: number
			stat: {
				name: string
			}
		}[]
	}
}

interface Props {
    onClose: () => void
    isOpen: boolean
    name: string | null
}

const GET_POKEMON = gql`
	query pokemon($name: String!) {
		pokemon(name: $name) {
		id
		name
		height
		weight
		order
		sprites {
			front_default
		}
		stats {
			base_stat
			effort
			stat {
			name
			}
		}
		types {
			slot
			type {
			name
			}
		}
		abilities {
			is_hidden
			slot
			ability {
			name
			}
		}
		}
	}
`

Modal.setAppElement('#root')

const PokemonView: React.FC<Props> = ({ isOpen, onClose, name }) => {
    const pokemons = useSelector((state: any) => state.pokedex.data)
	const { data: pokemon } = useQuery<PokemonData>(GET_POKEMON, {
		variables: { name },
		client: apollo
	})

    return (
        <Modal
            shouldCloseOnEsc
            shouldCloseOnOverlayClick
            onRequestClose={onClose}
            overlayClassName="overlay"
            className="modal"
            style={{content: {outline: 'none'}}}
            isOpen={isOpen && name !== null}>
            <Container>
                <Basics>
                    <div>
                        <h1>{pokemon?.pokemon.name.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.substring(1)).join(' ')}</h1>
                        <span>#{pokemon?.pokemon.id.toString().padStart(3, '0')}</span>
                        <ul>
                            {pokemon?.pokemon.types.map(type => (
                                <Type key={type.type.name}>{type.type.name}</Type>
                            ))}
                        </ul>
                    </div>
                    <img src={pokemon?.pokemon.sprites.front_default} alt=""/>
                </Basics>
                <Stats>
                    <div>
                        <h2>About</h2>
                        <Info>
                            <span>Height</span>
                            <span>{(Number(pokemon?.pokemon.height) / 10).toLocaleString('pt-br', {minimumFractionDigits: 2})} m</span>
                        </Info>
                        <Info>
                            <span>Weight</span>
                            <span>{(Number(pokemon?.pokemon.weight) / 10).toLocaleString('pt-br', {minimumFractionDigits: 1})} kg</span>
                        </Info>
                        <Info>
                            <span>Abilities</span>
                            <span>{pokemon?.pokemon.abilities.map(ability => ability.ability.name).join(', ')}</span>
                        </Info>
                    </div>
                    <div>
                        <h2>Base Stats</h2>
                        <Info>
                            <span>HP</span>
                            <span>{pokemon?.pokemon.stats[0].base_stat}</span>
                        </Info>
                        <Info>
                            <span>Attack</span>
                            <span>{pokemon?.pokemon.stats[1].base_stat}</span>
                        </Info>
                        <Info>
                            <span>Defense</span>
                            <span>{pokemon?.pokemon.stats[2].base_stat}</span>
                        </Info>
                        <Info>
                            <span>Sp. Atk</span>
                            <span>{pokemon?.pokemon.stats[3].base_stat}</span>
                        </Info>
                        <Info>
                            <span>Sp. Def</span>
                            <span>{pokemon?.pokemon.stats[4].base_stat}</span>
                        </Info>
                        <Info>
                            <span>Speed</span>
                            <span>{pokemon?.pokemon.stats[5].base_stat}</span>
                        </Info>
                    </div>
                </Stats>
            </Container>
        </Modal>
    )
}

export default PokemonView