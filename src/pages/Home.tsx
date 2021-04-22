import { useEffect, useState } from "react"
import { gql, useQuery } from '@apollo/client'
import apollo from "../services/apollo"
import withHeader from "../hooks/withHeader"
import { FiPlus, FiCheck, FiMinus } from 'react-icons/fi'
import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router"
import Modal from 'react-modal'

interface Pokemon {
	id: number
	name: string
	image: string
	url: string
}

const GET_POKEMONS = gql`
  query pokemons($limit: Int, $offset: Int) {
    pokemons(limit: $limit, offset: $offset) {
      count
      next
      previous
      status
      message
      results {
		id
        url
        name
        image
      }
    }
  }
`

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

Modal.setAppElement('#root');

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

const Home = () => {
	const [limit, setLimit] = useState(50)
	const [offset, setOffset] = useState(0)
	const [isOpen, setIsOpen] = useState(false)
	const [selectedPokemon, setSelectedPokemon] = useState<String | null>(null)

	const history = useHistory()
	const pokemons = useSelector((state: any) => state.data)
	const dispatch = useDispatch()

	const onClose = () => setIsOpen(false)
	const onOpen = () => setIsOpen(true)
	

	const { loading, error, data } = useQuery(GET_POKEMONS, {
		variables: {
			limit,
			offset
		},
		client: apollo
	})

	const { data: pokemon } = useQuery<PokemonData>(GET_POKEMON, {
		variables: {
			name: selectedPokemon
		},
		client: apollo
	})

	if (loading)
		return <p>Loading...</p>

	if (error)
		return <p>{error.message}</p>

	console.log(pokemon)

	return (
		<main>
			<Modal
				shouldCloseOnEsc
				shouldCloseOnOverlayClick
				onRequestClose={onClose}
				overlayClassName="overlay"
				className="modal"
				isOpen={isOpen}>
				<div>
					<div className="basics">
						<h1>{pokemon?.pokemon.name.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.substring(1)).join(' ')}</h1>
						<span>#{pokemon?.pokemon.id.toString().padStart(3, '0')}</span>
						<ul>
							{pokemon?.pokemon.types.map(type => (
								<li className="type" key={type.type.name}>{type.type.name}</li>
							))}
						</ul>
					</div>
					<img src={pokemon?.pokemon.sprites.front_default} alt=""/>
				</div>
				<div className="stats">
					<div>
						<h2>About</h2>
						<div className="info">
							<span>Height</span>
							<span>{(Number(pokemon?.pokemon.height) / 10).toLocaleString('pt-br', {minimumFractionDigits: 2})} m</span>
						</div>
						<div className="info">
							<span>Weight</span>
							<span>{(Number(pokemon?.pokemon.weight) / 10).toLocaleString('pt-br', {minimumFractionDigits: 1})} kg</span>
						</div>
						<div className="info">
							<span>Abilities</span>
							<span>{pokemon?.pokemon.abilities.map(ability => ability.ability.name).join(', ')}</span>
						</div>
					</div>
					<div>
						<h2>Base Stats</h2>
						<div className="info">
							<span>HP</span>
							<span>{pokemon?.pokemon.stats[0].base_stat}</span>
						</div>
						<div className="info">
							<span>Attack</span>
							<span>{pokemon?.pokemon.stats[1].base_stat}</span>
						</div>
						<div className="info">
							<span>Defense</span>
							<span>{pokemon?.pokemon.stats[2].base_stat}</span>
						</div>
						<div className="info">
							<span>Sp. Atk</span>
							<span>{pokemon?.pokemon.stats[3].base_stat}</span>
						</div>
						<div className="info">
							<span>Sp. Def</span>
							<span>{pokemon?.pokemon.stats[4].base_stat}</span>
						</div>
						<div className="info">
							<span>Speed</span>
							<span>{pokemon?.pokemon.stats[5].base_stat}</span>
						</div>
					</div>
					<button className={pokemons.includes(pokemon?.pokemon.name) ? 'remove' : 'add'}>
						{pokemons.includes(pokemon?.pokemon.name) ? <FiMinus /> : <FiPlus />}
					</button>
				</div>
			</Modal>
			<div>
				<select value={limit} onChange={e => setLimit(Number(e.target.value))}>
					<option value={25}>25</option>
					<option value={50}>50</option>
					<option value={75}>75</option>
					<option value={100}>100</option>
					<option value={150}>150</option>
					<option value={200}>200</option>
				</select>
			</div>
			<ul>
				{data.pokemons.results.map((pokemon: Pokemon) => (
					<li className="poke" key={pokemon.id}>
						<img src={pokemon.image} onClick={() => {
							setSelectedPokemon(pokemon.name)
							onOpen()
						}} alt={pokemon.name} />
						<div>
							<span className="id">#{pokemon.id.toString().padStart(3, '0')}</span>
							<span className="name">{pokemon.name.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.substring(1)).join(' ')}</span>
						</div>
						<span className={pokemons.includes(pokemon.name) ? 'checked' : ''} onClick={() => dispatch({type: 'ADD_POKEMON', name: pokemon.name})}>
							{pokemons.includes(pokemon.name) ? <FiCheck size={20} /> : <FiPlus size={20} />}
						</span>
					</li>
				))}
			</ul>
		</main>
	)
}

export default withHeader(Home)