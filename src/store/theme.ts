const INITIAL_STATE = {
  theme: "water",
};

interface State {
  theme: string;
}

function pokedex(state: State = INITIAL_STATE, action: any) {
  switch (action.type) {
    case "CHANGE_THEME":
      return { ...state, theme: action.key };
    default:
      return state;
  }
}

export default pokedex;
