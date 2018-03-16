import MainPage from '../home/HomePage'
import {StackNavigator} from 'react-navigation'
import ChooseColorPage from '../color/ColorPage'
import CusImagePickerPage from "../photo/CusImagePickerPage";

const AppNavigator = StackNavigator({
    Main: {screen: MainPage},
    ChooseColor: {screen: ChooseColorPage},
    CustomizeScreen: {screen: CusImagePickerPage}
}, {
    initialRouteName: 'Main',
    headerMode: 'none'
})

export default AppNavigator