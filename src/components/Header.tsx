import { useSelector } from "react-redux"
import { useHistory } from "react-router"

const Header = () => {
    const count = useSelector((state: any) => state.count)
    const history = useHistory()

    return (
        <header>
            <div></div>
            <div>
                <img onClick={() => history.push('/')} className="logo" src="logo.png" alt=""/>
            </div>
            <div>
                <div className="pokedex" onClick={() => history.push('/pokedex')}>
                    <img src="pokedex.svg" alt="Pokedex"/>
                    <div>
                        <span>{count}</span>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header