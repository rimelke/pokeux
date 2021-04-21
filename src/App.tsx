import { useEffect, useState } from "react"
import { gql, useQuery } from '@apollo/client'
import apollo from "./services/apollo"

import './App.css'

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

const App = () => {
	const [limit, setLimit] = useState(50)
	const [offset, setOffset] = useState(0)

	const { loading, error, data } = useQuery(GET_POKEMONS, {
		variables: {
			limit,
			offset
		},
		client: apollo
	})

	console.log(data)

	if (loading)
		return <p>Loading...</p>

	if (error)
		return <p>{error.message}</p>

	return (
		<main>
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
						<img src={pokemon.image} />
						<div>
							<span className="id">#{pokemon.id.toString().padStart(3, '0')}</span>
							<span className="name">{pokemon.name.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.substring(1)).join(' ')}</span>
						</div>
					</li>
				))}
			</ul>
		</main>
	)
}

export default App