import CustomizeScreen from './CustomizeScreen'
import ImagePickerScreen from './ImagePickerScreen'
import {StackNavigator} from 'react-navigation'
import React from 'react'

let PhotoCategory = StackNavigator({
    ImagePickerScreen: {screen: ImagePickerScreen},
    CustomizeScreen: {screen: CustomizeScreen}
}, {
    initialRouteName: 'ImagePickerScreen',
    headerMode: 'none',
    navigationOptions: ({}) => ({
        title: 'Menu'
    })
})

export default class PhotoNav extends React.Component {
    render() {
        return (<PhotoCategory/>)
    }
}