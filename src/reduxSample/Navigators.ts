import MainPage from './MainPage'
import {StackNavigator} from 'react-navigation'

const AppNavigator = StackNavigator({
    Main: {screen: MainPage}
}, {
    initialRouteName: 'Main'
})

export default AppNavigator