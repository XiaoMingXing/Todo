import {applyMiddleware, createStore} from 'redux'
import {persistReducer, persistStore} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import AppReducer from "../reducers";
import {middleware} from "./utils";
import {composeWithDevTools} from 'redux-devtools-extension';


const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, AppReducer);

export default () => {
    let store = createStore(
        persistedReducer,
        composeWithDevTools(applyMiddleware(middleware))
    );
    let persistor = persistStore(store);
    return {store, persistor}
}