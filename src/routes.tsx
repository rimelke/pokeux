import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Home from './pages/Home'
import Pokedex from './pages/Pokedex'

const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/pokedex" component={Pokedex} exact />
                <Route path="/" component={Home} />
            </Switch>
        </BrowserRouter>
    )
}

export default Routes