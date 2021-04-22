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

function removePokemon(state: State, action: any) {
  const data = state.data.filter((pokemon) => pokemon.name !== action.name);
  return { ...state, data, count: data.length };
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
    case "REMOVE_POKEMON":
      return removePokemon(state, action);
    default:
      return state;
  }
}

export default pokedex;
