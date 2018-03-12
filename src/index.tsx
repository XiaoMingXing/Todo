import React from 'react'
import {AppRegistry} from 'react-native'
import HomeScreen from './screens/HomeScreen'
import ChatScreen from './screens/ChatScreen'
import {DrawerNavigator, StackNavigator} from 'react-navigation'
import SideBar from './components/SideBar'
import Profile from './screens/ProfileScreen/Profile'
import EditScreenOne from './screens/ProfileScreen/EditScreenOne'
import EditScreenTwo from './screens/ProfileScreen/EditScreenTwo'
import CustomizeScreen from './screens/PhotoScreen/CustomizeScreen'
import ImagePickerScreen from './screens/PhotoScreen/ImagePickerScreen'
import ReduxSampleApp from './reduxSample/App'

let PhotoNav = StackNavigator({
    ImagePickerScreen: {screen: ImagePickerScreen},
    CustomizeScreen: {screen: CustomizeScreen}
}, {
    initialRouteName: 'ImagePickerScreen',
    headerMode: 'none',
    navigationOptions: ({}) => ({
        title: 'Menu'
    })
})

const ProfileNav = StackNavigator({
    Profile: {screen: Profile},
    EditScreenOne: {screen: EditScreenOne},
    EditScreenTwo: {screen: EditScreenTwo}
})

const DrawerNav = DrawerNavigator({
    Home: {screen: HomeScreen},
    Photo: {screen: PhotoNav},
    Chat: {screen: ChatScreen},
    Profile: {screen: ProfileNav},
    Redux: {screen: ReduxSampleApp}
}, {
    contentComponent: props => <SideBar {...props} />,
    initialRouteName: 'Redux'
})

export default class Todo extends React.Component {
    render() {
        return (<DrawerNav/>)
    }
}

AppRegistry.registerComponent('Todo', () => Todo)
