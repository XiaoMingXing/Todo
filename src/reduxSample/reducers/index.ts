import {combineReducers} from 'redux'
import NavReducer from './NavReducer'
import {ColorReducer, PhotoReducer} from './Reducers'

const AppReducer = combineReducers({
    nav: NavReducer,
    color: ColorReducer,
    photo: PhotoReducer
})

export default AppReducer