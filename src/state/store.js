import rootReducer from './reducers'
import { applyMiddleware, legacy_createStore as createStore } from "redux"

import persistReducer from "redux-persist/es/persistReducer"
import persistStore from "redux-persist/es/persistStore"

import storage from "redux-persist/lib/storage"

import thunk from "redux-thunk"


const persistConfig = {
    key: 'UserStorage',
    storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)
let store = createStore(persistedReducer, {}, applyMiddleware(thunk))

export const persistor = persistStore(store)

export default store