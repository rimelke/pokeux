const INITIAL_STATE = {
  data: [],
  count: 0,
};

interface State {
  data: string[];
  count: number;
}

function pokedex(state: State = INITIAL_STATE, action: any) {
  switch (action.type) {
    case "ADD_POKEMON":
      return state.data.includes(action.name)
        ? state
        : {
            ...state,
            data: [...state.data, action.name],
            count: state.count + 1,
          };
    default:
      return state;
  }
}

export default pokedex;
