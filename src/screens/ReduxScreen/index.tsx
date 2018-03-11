import React from 'react'
import {Provider} from 'react-redux'
import {applyMiddleware, createStore} from 'redux'
import reducers from './reducer'
import ReduxThunk from 'redux-thunk'
import {View} from 'react-native'
import CustomizeHeader from '../../components/CustomizeHeader'
import App from './main'

interface Props {
    navigation: { goBack: () => void, navigate: (screen: string) => void }
}

export default class ReduxScreen extends React.Component<Props> {

    render() {
        return (
            <View>
                <CustomizeHeader navigation={this.props.navigation}/>
                <Provider store={createStore(reducers, applyMiddleware(ReduxThunk))}>
                    <View>
                        <App/>
                    </View>
                </Provider>
            </View>
        )
    }
}