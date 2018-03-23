import {combineReducers} from 'redux'
import NavReducer from './NavReducer'
import {ColorReducer, FormReducer, PhotoReducer} from './Reducers'

const AppReducer = combineReducers({
    nav: NavReducer,
    form: FormReducer,
    color: ColorReducer,
    photo: PhotoReducer
})

export default AppReducer