import { Provider as ReduxProvider } from 'react-redux'
import Routes from './routes'
import {store, persistor} from './store'
import { PersistGate } from 'redux-persist/integration/react'
import GlobalStyle from './styles/global'
import PokemonThemeProvider from './styles/themes'

const App = () => {

	return (
		<ReduxProvider store={store}>
			<PersistGate persistor={persistor}>
				<PokemonThemeProvider>
					<GlobalStyle />
					<Routes />
				</PokemonThemeProvider>
			</PersistGate>
		</ReduxProvider>
	)
}

export default App