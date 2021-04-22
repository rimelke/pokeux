import { useState } from "react"
import { gql, useQuery } from '@apollo/client'
import apollo from "../../services/apollo"
import withHeader from "../../hooks/withHeader"
import useDisclosure from "../../hooks/useDisclosure"
import PokemonView from "../../components/PokemonView"
import PokemonList from "../../components/PokemonList"

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
        name
        image
      }
    }
  }
`


const Home = () => {
	const [limit, setLimit] = useState(50)
	const [offset, setOffset] = useState(0)
	const { isOpen, onClose, onOpen} = useDisclosure()
	const [selectedPokemon, setSelectedPokemon] = useState<string | null>(null)
	const { loading, error, data } = useQuery(GET_POKEMONS, {
		variables: {
			limit,
			offset
		},
		client: apollo
	})

	if (loading)
		return <p>Loading...</p>

	if (error)
		return <p>{error.message}</p>

	return (
		<main>
			<PokemonView isOpen={isOpen} name={selectedPokemon} onClose={onClose} />
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
			<PokemonList onOpenView={onOpen} setSelected={setSelectedPokemon} data={data.pokemons.results} />
		</main>
	)
}

export default withHeader(Home)