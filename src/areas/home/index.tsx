import React, {Component} from 'react'
import {View} from 'react-native'
import {Text} from 'native-base'
import CustomizeHeader from "../../components/CustomizeHeader";

interface Props {
    navigation: any
}

export default class HomePage extends Component<Props> {
    render() {

        return (
            <View>
                <CustomizeHeader navigation={this.props.navigation}/>
                <Text>Welcome to dashboard!</Text>
            </View>
        )
    }
}

