import React from 'react'
import AppReducer from './reducers'
import {applyMiddleware, createStore} from 'redux'
import {Provider} from 'react-redux'
import AppWithNavigationState from './App'
import {middleware} from './config/utils'
import {AppRegistry} from "react-native";

export default class Todo extends React.Component {
    store = createStore(
        AppReducer,
        applyMiddleware(middleware)
    )

    render() {
        return (
            <Provider store={this.store}>
                <AppWithNavigationState/>
            </Provider>
        )
    }
}

AppRegistry.registerComponent('Todo', () => Todo)