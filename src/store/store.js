import { createStore, combineReducers, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import { createStateSyncMiddleware } from "redux-state-sync";
import { composeWithDevTools } from "redux-devtools-extension";

import { reducerAuth } from "./auth";
import { reducerCatalog } from "./catalog";
import { reducerGeneral } from "./general";

const allReducer = combineReducers({
  auth: reducerAuth,
  catalog: reducerCatalog,
  general: reducerGeneral,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, allReducer);

export const store = createStore(
  persistedReducer,

  composeWithDevTools(
    applyMiddleware(
      createStateSyncMiddleware({
        blacklist: ["persist/PERSIST", "persist/REHYDRATE"],
      })
    )
  )
);

export const persistor = persistStore(store);
