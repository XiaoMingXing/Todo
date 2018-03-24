import {REDUX_ACTION} from "../config/Constants";

export const colorChanged = (value) => {
    return {
        type: 'COLOR_CHANGED',
        payload: value
    }
}

export const sizeChanged = (value) => {
    return {
        type: 'SIZE_CHANGED',
        payload: value
    }
}

export const photoSelected = (images: Array<any>) => {
    return {
        type: 'PHOTO_SELECTED',
        payload: images
    }
}

export const formUpdated = (value) => {
    return {
        type: REDUX_ACTION.FORM_UPDATED,
        payload: value
    }
}

// fields is array type, which fields want to trigger
export const validateField = (value) => {
    return {
        type: REDUX_ACTION.VALIDATE_FILED,
        payload: value
    }
}

