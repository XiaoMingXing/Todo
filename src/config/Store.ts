import {middleware} from "./utils";
import {applyMiddleware, createStore} from "redux";
import AppReducer from "../reducers";

const store = createStore(
    AppReducer,
    applyMiddleware(middleware)
);

export default store