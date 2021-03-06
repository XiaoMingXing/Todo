import {applyMiddleware, createStore} from 'redux'
import {persistReducer, persistStore} from 'redux-persist'
import AppReducer from "../reducers";
import {navigationMiddleware} from "./utils";
import {createLogger} from "redux-logger";
import {composeWithDevTools} from 'redux-devtools-extension';
import autoMergeLevel2 from "redux-persist/es/stateReconciler/autoMergeLevel2";
import storage from 'redux-persist/lib/storage'


const persistConfig = {
    key: 'root',
    storage,
    stateReconciler: autoMergeLevel2,
    whitelist: ['form']
};

const middlewares = [];
if (__DEV__) {
    middlewares.push(createLogger());
    middlewares.push(navigationMiddleware)
}

const persistedReducer = persistReducer(persistConfig, AppReducer);

export const store = createStore(
    persistedReducer,
    composeWithDevTools(applyMiddleware(navigationMiddleware))
);
export const persistor = persistStore(store);

