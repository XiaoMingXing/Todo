import React from 'react'
import {Provider} from 'react-redux'
import AppWithNavigationState from './App'
import {AppRegistry} from "react-native";
import {PersistGate} from "redux-persist/integration/react";
import configureStore from "./config/configureStore"

export default class Todo extends React.Component {

    render() {
        const {store, persistor} = configureStore();
        return (
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <AppWithNavigationState/>
                </PersistGate>
            </Provider>
        )
    }
}

AppRegistry.registerComponent('Todo', () => Todo);