import { createStore, combineReducers } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import pokedex from "./pokedex";
import theme from "./theme";

const persistConfig = {
  key: "pokeux",
  storage,
};

const reducer = combineReducers({
  pokedex,
  theme,
});

const persistedReducer = persistReducer(persistConfig, reducer);

const store = createStore(persistedReducer);
const persistor = persistStore(store);

export { store, persistor };
