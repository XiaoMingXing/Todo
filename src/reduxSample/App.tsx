import React from 'react'
import AppReducer from './AppReducer'
import {applyMiddleware, createStore} from 'redux'
import {Provider} from 'react-redux'
import AppWithNavigationState from './AppNavigatorWithState'
import {middleware} from '../config/utils'

export default class ReduxSampleApp extends React.Component {
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