import { useSelector } from "react-redux"
import { useHistory } from "react-router"
import { Container, PokedexLogo } from './styles'

const Header = () => {
    const count = useSelector((state: any) => state.count)
    const history = useHistory()

    return (
        <Container>
            <div></div>
            <div>
                <img onClick={() => history.push('/')} className="logo" src="logo.png" alt=""/>
            </div>
            <div>
                <PokedexLogo onClick={() => history.push('/pokedex')}>
                    <img src="pokedex.svg" alt="Pokedex"/>
                    <div>
                        <span>{count}</span>
                    </div>
                </PokedexLogo>
            </div>
        </Container>
    )
}

export default Header