import {combineReducers} from 'redux'
import NavReducer from './NavReducer'
import {ColorReducer, FormReducer, PhotoReducer, ValidateReducer} from './Reducers'

const AppReducer = combineReducers({
    nav: NavReducer,
    form: FormReducer,
    validate: ValidateReducer,
    color: ColorReducer,
    photo: PhotoReducer,
})

export default AppReducer