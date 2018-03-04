import React from 'react'
import {AppRegistry} from 'react-native'
import HomeScreen from './screens/HomeScreen'
import ChatScreen from './screens/ChatScreen'
import {DrawerNavigator, StackNavigator} from 'react-navigation'
import SideBar from './components/SideBar'
import Profile from './screens/ProfileScreen/Profile'
import EditScreenOne from './screens/ProfileScreen/EditScreenOne'
import EditScreenTwo from './screens/ProfileScreen/EditScreenTwo'

const ProfileNav = StackNavigator({
    Profile: {screen: Profile},
    EditScreenOne: {screen: EditScreenOne},
    EditScreenTwo: {screen: EditScreenTwo}
})

const DrawerNav = DrawerNavigator({
    Home: {screen: HomeScreen},
    Chat: {screen: ChatScreen},
    Profile: {screen: ProfileNav}
}, {
    contentComponent: props => <SideBar {...props} />,
    initialRouteName: 'Home'
})

export default class Todo extends React.Component {
    render() {
        return (<DrawerNav/>)
    }
}

AppRegistry.registerComponent('Todo', () => Todo)
