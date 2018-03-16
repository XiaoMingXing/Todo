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