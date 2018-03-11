import React from 'react'
import {AppRegistry} from 'react-native'
import App from './reduxSample/App'

export default class Todo extends React.Component {

    render() {
        return (
            <App/>
        )
    }
}

AppRegistry.registerComponent('Todo', () => Todo)
