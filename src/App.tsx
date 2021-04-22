import { Provider as ReduxProvider } from 'react-redux'
import Routes from './routes'
import store from './store'

import './App.css'

const App = () => {
	return (
		<ReduxProvider store={store}>
			<Routes />
		</ReduxProvider>
	)
}

export default App