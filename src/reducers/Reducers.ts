import {REDUX_ACTION} from "../config/Constants";

const initialState = {
    colorName: 'RED',
    size: 15
}

export const ColorReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'COLOR_CHANGED':
            return {...state, colorName: action.payload.colorName}
        case 'SIZE_CHANGED':
            return {...state, size: action.payload.size}
        default:
            return state
    }
};


export const PhotoReducer = (state = {images: []}, action) => {
    switch (action.type) {
        case 'PHOTO_SELECTED':
            return {...state, images: action.payload.images}
        default:
            return state
    }
}

export const FormReducer = (state = {formData: {}, validResult: {}}, action) => {
    switch (action.type) {
        case REDUX_ACTION.FORM_UPDATED:
            return {
                formData: Object.assign({}, state.formData, action.payload),
                validResult: Object.assign({}, state.validResult, action.payload)
            };
        default:
            return state
    }
}

export const ValidateReducer = (state = [], action) => {
    switch (action.type) {
        case REDUX_ACTION.VALIDATE_ALL:
        case REDUX_ACTION.VALIDATE_FILED:
            return {
                fields: action.payload
            };
        default:
            return state
    }
}



