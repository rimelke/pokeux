import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import pokedex from "./pokedex";

const persistConfig = {
  key: "pokeux",
  storage,
};

const persistedReducer = persistReducer(persistConfig, pokedex);

const store = createStore(persistedReducer);
const persistor = persistStore(store);

export { store, persistor };
