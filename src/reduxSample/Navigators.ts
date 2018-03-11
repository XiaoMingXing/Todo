import MainPage from './MainPage'
import {StackNavigator} from 'react-navigation'
import ChooseColorPage from './ColorPage'

const AppNavigator = StackNavigator({
    Main: {screen: MainPage},
    ChooseColor: {screen: ChooseColorPage}
}, {
    initialRouteName: 'Main'
})

export default AppNavigator