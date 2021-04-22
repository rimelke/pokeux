import { useDispatch, useSelector } from "react-redux"
import { useHistory } from "react-router"
import { Container, PokedexLogo } from './styles'
import Select from 'react-select'
import { getContrast, transparentize } from 'polished'
import { themes } from "../../styles/themes"

interface Option {
	value: string
	label: string
	color: string
}

const options: Option[] = Object.entries(themes).map(theme => ({
  value: theme[0],
  label: theme[0].charAt(0).toUpperCase() + theme[0].slice(1),
  color: theme[1].colors.primary
}))

const dot = (color = '#ccc') => ({
    alignItems: 'center',
    display: 'flex',
  
    ':before': {
      backgroundColor: color,
      borderRadius: 10,
      content: '" "',
      display: 'block',
      marginRight: 8,
      height: 10,
      width: 10,
    },
})

const selectThemeStyles = {
    control: (styles: any) => ({ ...styles, width: '10rem', backgroundColor: 'white' }),
    option: (styles: { [x: string]: any }, { data, isDisabled, isFocused, isSelected }: any) => {
      return {
        ...styles,
        backgroundColor: isDisabled
          ? null
          : isSelected
          ? data.color
          : isFocused
          ? transparentize(.9, data.color)
          : null,
        color: isDisabled
          ? '#ccc'
          : isSelected
          ? getContrast(data.color, 'white') > 2
            ? 'white'
            : 'black'
          : data.color,
        cursor: isDisabled ? 'not-allowed' : 'default',
  
        ':active': {
          ...styles[':active'],
          backgroundColor:
            !isDisabled && (isSelected ? data.color : transparentize(.7, data.color)),
        },
      };
    },
    input: (styles: any) => ({ ...styles, ...dot() }),
    placeholder: (styles: any) => ({ ...styles, ...dot() }),
    singleValue: (styles: any, { data }: any) => ({ ...styles, ...dot(data.color) }),
}

const Header = () => {
    const count = useSelector((state: any) => state.pokedex.count)
    const theme: string = useSelector((state: any) => state.theme.theme)
    const history = useHistory()
    const dispatch = useDispatch()

    return (
        <Container>
            <div>
                <Select
                    onChange={(opt: Option | null) => {
                        if (opt !== null)
                            dispatch({type: 'CHANGE_THEME', key: opt.value})
                    }}
                    styles={selectThemeStyles}
                    value={options[Object.keys(themes).indexOf(theme)]}
                    options={options} />
            </div>
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