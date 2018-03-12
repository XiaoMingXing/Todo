const initialState = {
    colorName: 'RED',
    size: 15
}

const ColorReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'COLOR_CHANGED':
            return {...state, colorName: action.payload.colorName}
        case 'SIZE_CHANGED':
            return {...state, size: action.payload.size}
        default:
            return state
    }
}

export default ColorReducer