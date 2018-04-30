import React from 'react'
import {Provider} from 'react-redux'
import AppWithNavigationState from './App'
import {AppRegistry} from 'react-native'
import {PersistGate} from 'redux-persist/integration/react'
import {persistor, store} from './config/configureStore'

export default class Todo extends React.Component {
    render() {
        return (
            <Provider store={store}>
                <PersistGate loading={true} persistor={persistor}>
                    <AppWithNavigationState/>
                </PersistGate>
            </Provider>
        )
    }
}

AppRegistry.registerComponent('Todo', () => Todo)