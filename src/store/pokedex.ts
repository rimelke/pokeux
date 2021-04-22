const INITIAL_STATE = {
  data: [],
  count: 0,
};

export interface Pokemon {
  id: number;
  name: string;
  image: string;
}

interface State {
  data: Pokemon[];
  count: number;
}

function pokedex(state: State = INITIAL_STATE, action: any) {
  switch (action.type) {
    case "ADD_POKEMON":
      return state.data.map((pokemon) => pokemon.id).includes(action.pokemon.id)
        ? state
        : {
            ...state,
            data: [...state.data, action.pokemon],
            count: state.count + 1,
          };
    default:
      return state;
  }
}

export default pokedex;
