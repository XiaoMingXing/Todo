import {combineReducers} from 'redux'
import NavReducer from './NavReducer'
import ColorReducer from './ColorReducer'
import PhotoReducer from './photo/PhotoReducer'

const AppReducer = combineReducers({
    nav: NavReducer,
    color: ColorReducer,
    photo: PhotoReducer
})

export default AppReducer