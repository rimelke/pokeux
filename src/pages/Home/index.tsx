import { useEffect, useState } from "react"
import { gql, useQuery } from '@apollo/client'
import apollo from "../../services/apollo"
import withHeader from "../../hooks/withHeader"
import useDisclosure from "../../hooks/useDisclosure"
import PokemonView from "../../components/PokemonView"
import PokemonList from "../../components/PokemonList"
import Select from 'react-select'
import { Main, Pagination, Toolbar } from "./styles"

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

const LimitOptions = [
	{value: 25, label: '25'},
	{value: 50, label: '50'},
	{value: 75, label: '75'},
	{value: 100, label: '100'},
	{value: 150, label: '150'},
	{value: 200, label: '200'},
]


const Home = () => {
	const [limit, setLimit] = useState(100)
	const [offset, setOffset] = useState(0)
	const [page, setPage] = useState(0)
	const [search, setSearch] = useState('')
	const [pokemons, setPokemons] = useState([])

	const { isOpen, onClose, onOpen} = useDisclosure()
	const [selectedPokemon, setSelectedPokemon] = useState<string | null>(null)
	const { loading, error, data } = useQuery(GET_POKEMONS, {
		variables: {
			limit: 1200,
			offset: 0
		},
		client: apollo
	})

	useEffect(() => {
		setPokemons(data.pokemons.results
			.filter((pokemon: any) => pokemon.name.includes(search)))
	}, [data, search])

	useEffect(() => {
		setOffset(page * limit)
	}, [page, limit])

	useEffect(() => {
		setPage(0)
	}, [search, limit])

	if (loading)
		return <p>Loading...</p>

	if (error)
		return <p>{error.message}</p>

	return (
		<Main>
			<PokemonView isOpen={isOpen} name={selectedPokemon} onClose={onClose} />
			<Toolbar>
				<input type="text" placeholder="Digite para pesquisar" onChange={e => setSearch(e.target.value)} />
				<Select
					className="fon"
					options={LimitOptions}
					value={LimitOptions.find(opt => opt.value === limit)}
					onChange={(opt: any) => setLimit(Number(opt.value))} />

				<Pagination>
					{Array(Math.ceil(pokemons.length / limit)).fill('_').map((_, i) => (
						<li className={page === i ? 'active' : ''} onClick={() => setPage(i)} key={i}>{i + 1}</li>
					))}
				</Pagination>
			</Toolbar>
			<PokemonList
				onOpenView={onOpen}
				setSelected={setSelectedPokemon}
				data={pokemons.slice(offset, offset + limit)} />
		</Main>
	)
}

export default withHeader(Home)