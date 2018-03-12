import MainPage from './MainPage'
import {StackNavigator} from 'react-navigation'
import ChooseColorPage from './ColorPage'
import CustomizeScreen from '../screens/PhotoScreen/CustomizeScreen'

const AppNavigator = StackNavigator({
    Main: {screen: MainPage},
    ChooseColor: {screen: ChooseColorPage},
    CustomizeScreen: {screen: CustomizeScreen}
}, {
    initialRouteName: 'Main',
    headerMode: 'none'
})

export default AppNavigator