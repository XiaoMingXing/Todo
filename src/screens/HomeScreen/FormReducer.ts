import {combineReducers} from 'redux'

const initialState = {
    formData: {}
}

const formDataReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'FORM_DATA_CHANGED':
            return {...state, formData: action.payload.formData}
        default:
            return state
    }
}


const FormReducer = combineReducers({
    form: formDataReducer
})

export default FormReducer