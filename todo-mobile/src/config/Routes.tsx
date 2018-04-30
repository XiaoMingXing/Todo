import React from 'React'
import MainPage from '../areas/color'
import {DrawerNavigator, StackNavigator} from 'react-navigation'
import ChooseColorPage from '../areas/color/ColorPage'
import CusImagePickerPage from "../areas/photo/CusImagePickerPage";
import SideBar from "../components/SideBar";
import AuthPage from "../areas/auth";
import HomePage from "../areas/home";
import ScrollablePage from "../areas/scroll";
import MobXPage from "../areas/mobx";

const ColorNav = StackNavigator({
    Main: {screen: MainPage},
    ChooseColor: {screen: ChooseColorPage},
    CustomizeScreen: {screen: CusImagePickerPage}
}, {
    initialRouteName: 'Main',
    headerMode: 'none'
});

const AppRoutes = DrawerNavigator({
    Home: {screen: HomePage},
    Auth: {screen: AuthPage},
    Color: {screen: ColorNav},
    Scroll: {screen: ScrollablePage},
    MobX: {screen: MobXPage},

}, {
    contentComponent: props => <SideBar {...props} />,
    initialRouteName: 'Home'
});

export default AppRoutes