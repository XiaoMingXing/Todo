import React from 'react'
import {Text, View} from 'react-native'
import CustomizeHeader from '../../components/CustomizeHeader'

interface Props {
    navigation: { goBack: () => void, navigate: (screen: string) => void }
}

export default class ReduxScreen extends React.Component<Props> {

    render() {
        return (
            <View>
                <CustomizeHeader navigation={this.props.navigation}/>
                <Text>Redux playground</Text>
            </View>
        )
    }
}