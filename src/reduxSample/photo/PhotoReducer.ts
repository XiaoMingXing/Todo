const initialState = {
    images: []
}

const PhotoReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'PHOTO_SELECTED':
            return {...state, images: action.payload.images}
        default:
            return state
    }
}

export default PhotoReducer